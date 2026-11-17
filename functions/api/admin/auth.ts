interface Env {
  ADMIN_SECRET?: string;
}

const ADMIN_USER = "daniela";
const ADMIN_PASS = "adriana";

// Helper to generate a simple hash/token using Web Crypto
async function generateToken(username: string, secret: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(`${username}:${Date.now()}:${secret}`);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return btoa(`${username}:${Date.now() + 7 * 24 * 60 * 60 * 1000}:${hashHex}`);
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const body = await request.json() as { username?: string; password?: string };
    const username = (body.username || "").trim();
    const password = (body.password || "").trim();

    if (username.toLowerCase() === ADMIN_USER.toLowerCase() && password === ADMIN_PASS) {
      const secret = env.ADMIN_SECRET || "rx_rooterx_secure_secret_2026";
      const token = await generateToken(ADMIN_USER, secret);

      return new Response(
        JSON.stringify({
          success: true,
          user: ADMIN_USER,
          token,
          message: "Authentication successful",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Set-Cookie": `rx_admin_token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`,
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: false,
        message: "Invalid User ID or Password.",
      }),
      {
        status: 401,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, message: "Authentication error: " + err.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export const onRequestGet: PagesFunction<Env> = async (context) => {
  // Check auth status
  const cookie = context.request.headers.get("Cookie") || "";
  const authHeader = context.request.headers.get("Authorization") || "";
  const hasToken = cookie.includes("rx_admin_token=") || authHeader.startsWith("Bearer ");

  return new Response(
    JSON.stringify({
      authenticated: hasToken,
      user: hasToken ? ADMIN_USER : null,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
};
