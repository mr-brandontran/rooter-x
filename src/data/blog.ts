// Updated via Rooter-X Admin Portal on 2026-11-26T23:36:12.190Z
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  content: string[];
  image: string;
}

export const BLOG_POSTS: BlogPost[] = [];
