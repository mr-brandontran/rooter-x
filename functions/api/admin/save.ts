interface Env {
  ADMIN_SECRET?: string;
  GITHUB_TOKEN?: string;
  GITHUB_REPO?: string; // defaults to "mr-brandontran/rooter-x"
  CLOUDFLARE_DEPLOY_HOOK?: string;
  CONTENT_KV?: any;
}

const DEFAULT_REPO = "mr-brandontran/rooter-x";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const authHeader = request.headers.get("Authorization") || "";
    const cookie = request.headers.get("Cookie") || "";
    if (!cookie.includes("rx_admin_token=") && !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const payload = await request.json() as {
      type: "service" | "blog" | "business" | "deploy";
      data?: any;
      slug?: string;
      message?: string;
    };

    const repo = env.GITHUB_REPO || DEFAULT_REPO;
    const token = env.GITHUB_TOKEN;

    // Handle deploy trigger directly
    if (payload.type === "deploy") {
      if (env.CLOUDFLARE_DEPLOY_HOOK) {
        const deployRes = await fetch(env.CLOUDFLARE_DEPLOY_HOOK, { method: "POST" });
        return new Response(
          JSON.stringify({
            success: true,
            message: "Cloudflare build triggered successfully! Changes will be live in ~60 seconds.",
            status: deployRes.status,
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      } else {
        return new Response(
          JSON.stringify({
            success: true,
            message: "Changes saved. (To enable instant 1-click live publishing, add CLOUDFLARE_DEPLOY_HOOK to Cloudflare Pages environment variables).",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // If GitHub Token is provided, commit the file directly via GitHub Contents API
    if (token) {
      let filePath = "";
      let commitMessage = "";
      let newFileContent = "";

      if (payload.type === "service") {
        filePath = "src/data/services.ts";
        commitMessage = `Admin update: service ${payload.data?.slug || "data"}`;
        newFileContent = `// Updated via Rooter-X Admin Portal on ${new Date().toISOString()}\n` +
          `export interface ServiceFAQ {\n  question: string;\n  answer: string;\n}\n\n` +
          `export interface ServiceData {\n  title: string;\n  slug: string;\n  order: number;\n  icon: string;\n  shortDescription: string;\n  h1: string;\n  overviewH2: string;\n  paragraphs: string[];\n  expanderParagraphs: string[];\n  badgeRow: string[];\n  signsHeading: string;\n  signsIntro: string;\n  signs: { label: string; description: string; relatedServiceSlug?: string }[];\n  benefitsHeading: string;\n  benefits: { label: string; description: string }[];\n  ctaHeadline: string;\n  faqs: ServiceFAQ[];\n  image: string;\n  galleryImages: string[];\n  galleryImageClasses?: string[];\n}\n\n` +
          `export const SERVICES: ServiceData[] = ${JSON.stringify(payload.data, null, 2)};\n`;
      } else if (payload.type === "blog") {
        filePath = "src/data/blog.ts";
        commitMessage = `Admin update: blog posts`;
        newFileContent = `// Updated via Rooter-X Admin Portal on ${new Date().toISOString()}\n` +
          `export interface BlogPost {\n  title: string;\n  slug: string;\n  date: string;\n  excerpt: string;\n  author: string;\n  category: string;\n  content: string[];\n  image: string;\n}\n\n` +
          `export const BLOG_POSTS: BlogPost[] = ${JSON.stringify(payload.data, null, 2)};\n`;
      } else if (payload.type === "business") {
        filePath = "src/config/business.ts";
        commitMessage = `Admin update: business info`;
        newFileContent = `// Updated via Rooter-X Admin Portal on ${new Date().toISOString()}\n` +
          `export const BUSINESS = ${JSON.stringify(payload.data, null, 2)};\n`;
      }

      if (filePath) {
        // 1. Get current file sha
        const getUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;
        const fileRes = await fetch(getUrl, {
          headers: {
            "Authorization": `Bearer ${token}`,
            "User-Agent": "Rooter-X-Admin-Portal",
            "Accept": "application/vnd.github.v3+json",
          },
        });

        let sha = "";
        if (fileRes.ok) {
          const fileData = await fileRes.json() as { sha: string };
          sha = fileData.sha;
        }

        // 2. Commit update
        const putRes = await fetch(getUrl, {
          method: "PUT",
          headers: {
            "Authorization": `Bearer ${token}`,
            "User-Agent": "Rooter-X-Admin-Portal",
            "Accept": "application/vnd.github.v3+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: commitMessage,
            content: btoa(unescape(encodeURIComponent(newFileContent))),
            sha: sha || undefined,
            branch: "main",
          }),
        });

        if (!putRes.ok) {
          const errText = await putRes.text();
          throw new Error(`GitHub commit error (${putRes.status}): ${errText}`);
        }

        // If deploy hook is set, trigger it too!
        if (env.CLOUDFLARE_DEPLOY_HOOK) {
          await fetch(env.CLOUDFLARE_DEPLOY_HOOK, { method: "POST" });
        }

        return new Response(
          JSON.stringify({
            success: true,
            committed: true,
            message: "Changes saved and committed to GitHub! Live site is automatically building.",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // Optional KV fallback
    if (env.CONTENT_KV) {
      await env.CONTENT_KV.put(`draft_${payload.type}`, JSON.stringify(payload.data));
    }

    return new Response(
      JSON.stringify({
        success: true,
        committed: false,
        message: "Changes saved in session. Connect GITHUB_TOKEN in Cloudflare Pages to commit directly to GitHub automatically.",
        data: payload.data,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
