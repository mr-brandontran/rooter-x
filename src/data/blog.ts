// Updated via Rooter-X Admin Portal on 2026-11-26T23:36:07.117Z
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

export const BLOG_POSTS: BlogPost[] = [
  {
    "title": "Tank vs. Tankless Water Heaters for Hard Water in Orange County",
    "slug": "tank-vs-tankless-water-heaters-oc",
    "date": "2026-05-14",
    "author": "Rooter-X Plumbing Technical Team",
    "category": "Water Heaters",
    "excerpt": "Comparing standby storage efficiency, mineral scale buildup impact, operational lifespan, and utility rebates for local water heating upgrades.",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "content": [
      "Water supply in Orange County contains elevated levels of dissolved calcium and magnesium minerals, commonly referred to as hard water.",
      "Standard tank water heaters trap mineral sediment at the bottom of the tank, creating insulating scale layers that reduce heating efficiency and cause popping rumbling noises.",
      "Tankless water heaters heat water on-demand as it flows through stainless steel heat exchangers, preventing bulk sediment accumulation while eliminating standby energy loss.",
      "Installing isolation flush valves on tankless units enables simple annual descaling with food-grade white vinegar, extending unit service life beyond 20 years.",
      "High-efficiency condensing tankless units also qualify for local gas utility energy efficiency rebates while saving up to 40% on monthly gas heating bills."
    ]
  }
];
