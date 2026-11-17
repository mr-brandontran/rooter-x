interface Env {
  ADMIN_SECRET?: string;
  GITHUB_TOKEN?: string;
  GITHUB_REPO?: string;
}

const DEFAULT_REPO = "mr-brandontran/rooter-x";

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  try {
    const cookie = request.headers.get("Cookie") || "";
    const authHeader = request.headers.get("Authorization") || "";
    if (!cookie.includes("rx_admin_token=") && !authHeader.startsWith("Bearer ")) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    const payload = await request.json() as {
      fileName: string;
      base64Data: string; // base64 without prefix
      contentType?: string;
    };

    if (!payload.fileName || !payload.base64Data) {
      return new Response(JSON.stringify({ error: "Missing file name or data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Clean file name
    const sanitizedName = payload.fileName
      .toLowerCase()
      .replace(/[^a-z0-9.-]/g, "-")
      .replace(/-+/g, "-");
    const targetPath = `public/images/real-photos/${Date.now()}-${sanitizedName}`;
    const publicUrl = `/${targetPath.replace("public/", "")}`;

    const token = env.GITHUB_TOKEN;
    const repo = env.GITHUB_REPO || DEFAULT_REPO;

    if (token) {
      const putUrl = `https://api.github.com/repos/${repo}/contents/${targetPath}`;
      const res = await fetch(putUrl, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`,
          "User-Agent": "Rooter-X-Admin-Portal",
          "Accept": "application/vnd.github.v3+json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: `Admin upload image: ${sanitizedName}`,
          content: payload.base64Data,
          branch: "main",
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Failed to commit image to GitHub: ${errText}`);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        url: publicUrl,
        message: "Image uploaded successfully",
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err: any) {
    return new Response(
      JSON.stringify({ success: false, error: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};
