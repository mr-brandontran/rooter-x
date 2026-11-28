interface Env {
  TURNSTILE_SECRET_KEY?: string;
  TWILIO_ACCOUNT_SID?: string;
  TWILIO_AUTH_TOKEN?: string;
  TWILIO_FROM_PHONE?: string;
  OWNER_PHONE?: string;
  RESEND_API_KEY?: string;
  WEB3FORMS_ACCESS_KEY?: string;
  LEADS_KV?: any;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const formData = await request.formData();
    const name = (formData.get("name") || "").toString().trim();
    const phone = (formData.get("phone") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const service = (formData.get("service") || "").toString().trim();
    const address = (formData.get("address") || "").toString().trim();
    const preferredTime = (formData.get("preferredTime") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();
    const botCheck = (formData.get("website_url_check") || "").toString().trim();
    const turnstileToken = (formData.get("cf-turnstile-response") || "").toString().trim();

    // Honeypot check
    if (botCheck !== "") {
      return Response.redirect(new URL("/thank-you/", request.url).href, 303);
    }

    // Basic Validation
    if (!name || !phone || !email || !service) {
      return new Response("Missing required fields.", { status: 400 });
    }

    // Turnstile Verification (if secret configured)
    if (env.TURNSTILE_SECRET_KEY && turnstileToken) {
      try {
        const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${encodeURIComponent(env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
        });
        const verifyData: any = await verifyRes.json();
        if (!verifyData.success) {
          console.warn("Turnstile verification failed:", verifyData);
        }
      } catch (err) {
        console.error("Turnstile error:", err);
      }
    }

    const timestamp = new Date().toISOString();
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const leadPayload = {
      leadId,
      timestamp,
      name,
      phone,
      email,
      service,
      address,
      preferredTime,
      message,
    };

    // 1. Append to KV Store if configured
    if (env.LEADS_KV) {
      try {
        await env.LEADS_KV.put(leadId, JSON.stringify(leadPayload));
      } catch (kvErr) {
        console.error("KV Store error:", kvErr);
      }
    }

    // 2. Twilio SMS to Owner FIRST
    if (env.TWILIO_ACCOUNT_SID && env.TWILIO_AUTH_TOKEN && env.TWILIO_FROM_PHONE && env.OWNER_PHONE) {
      try {
        const smsBody = `🚨 NEW ROOTER-X LEAD!\nName: ${name}\nPhone: ${phone}\nService: ${service}\nTime: ${preferredTime}\nAddress: ${address}\nMsg: ${message}`;
        const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${env.TWILIO_ACCOUNT_SID}/Messages.json`;
        const twilioCreds = btoa(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`);
        
        await fetch(twilioUrl, {
          method: "POST",
          headers: {
            "Authorization": `Basic ${twilioCreds}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            From: env.TWILIO_FROM_PHONE,
            To: env.OWNER_PHONE,
            Body: smsBody,
          }),
        });
      } catch (smsErr) {
        console.error("Twilio SMS notification error:", smsErr);
      }
    }

    // 3. Web3Forms Email Notification (Direct delivery to owner's inbox)
    const web3formsKey = env.WEB3FORMS_ACCESS_KEY || "22bb3f1f-04c6-4257-9af1-b90d927b654b";
    if (web3formsKey) {
      try {
        const w3FormData = new FormData();
        w3FormData.append("access_key", web3formsKey);
        w3FormData.append("subject", `New Service Request: ${service} - ${name}`);
        w3FormData.append("from_name", "Rooter-X Plumbing Website");
        w3FormData.append("name", name);
        w3FormData.append("phone", phone);
        if (email) {
          w3FormData.append("email", email);
          w3FormData.append("replyto", email);
        }
        w3FormData.append("service", service);
        w3FormData.append("address", address);
        w3FormData.append("preferred_time", preferredTime);
        w3FormData.append("message", message);

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Origin": "https://rooter-x.com",
            "Referer": "https://rooter-x.com/",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) RooterX/1.0",
          },
          body: w3FormData,
        });
      } catch (w3Err) {
        console.error("Web3Forms error:", w3Err);
      }
    }

    // 4. Resend Email Notification (fallback if configured)
    if (env.RESEND_API_KEY) {
      try {
        const emailHtml = `
          <h2>New Rooter-X Plumbing Website Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Preferred Time:</strong> ${preferredTime}</p>
          <p><strong>Message:</strong> ${message}</p>
          <hr />
          <p><small>Submitted at ${timestamp}</small></p>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Rooter-X Plumbing Leads <onboarding@resend.dev>",
            to: ["Rooterxplumbing@gmail.com"],
            subject: `🚨 Lead: ${service} - ${name} (${phone})`,
            html: emailHtml,
          }),
        });
      } catch (emailErr) {
        console.error("Resend Email notification error:", emailErr);
      }
    }

    // Always redirect to /thank-you/ cleanly even if notification APIs fail
    return Response.redirect(new URL("/thank-you/", request.url).href, 303);
  } catch (error) {
    console.error("Lead submission exception:", error);
    // Never surface error to user
    return Response.redirect(new URL("/thank-you/", request.url).href, 303);
  }
};
