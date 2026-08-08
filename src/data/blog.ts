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
    title: "Understanding Vintage Sewer Pipe Materials in Orange County Homes",
    slug: "understanding-orange-county-sewer-lines",
    date: "2026-07-15",
    author: "Rooter-X Plumbing Technical Team",
    category: "Sewer Diagnostics",
    excerpt: "A guide to vitrified clay, cast iron, and Orangeburg fiber pipe materials commonly found in 1920s–1980s Orange County residential neighborhoods.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    content: [
      "Orange County's residential architecture spans nearly a century of construction booms. Homes built in different decades feature distinct subterranean waste line pipe materials, each with unique failure modes.",
      "Vitrified Clay Pipe (VCP): Common in pre-1970s homes across Laguna Beach, Santa Ana, and Fullerton. Clay is completely immune to saltwater chemical corrosion but features rigid 4-foot bell-and-spigot joints where tree roots penetrate easily.",
      "Cast Iron Pipe: Widely installed beneath post-war 1950s–1970s tract housing in Costa Mesa, Anaheim, and Garden Grove. Cast iron deteriorates internally over 50 years through oxidation, creating rough rust scale ridges that catch solid waste.",
      "Orangeburg Fiber Pipe: Installed during mid-century material shortages. Orangeburg is made of wood pulp saturated with coal tar. After 50 years underground, ground moisture causes Orangeburg lines to ovalize and collapse under soil weight.",
      "High-definition camera inspections determine your exact pipe material, depth, and internal condition, guiding decisions between spot repairs, CIPP lining, and trenchless pipe bursting."
    ]
  },
  {
    title: "How to Identify and Resolve Slab Leaks in Southern California",
    slug: "slab-leaks-in-southern-california",
    date: "2026-06-28",
    author: "Rooter-X Plumbing Technical Team",
    category: "Leak Detection",
    excerpt: "Learn why copper supply lines buried beneath concrete foundations develop pinhole leaks and how non-invasive acoustic detection pinpoints the location.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    content: [
      "Many Southern California homes are constructed on concrete slab foundations, with pressurized copper hot and cold water supply lines routed underneath.",
      "Over time, high municipal water pressure, hard water mineral chemistry, and subtle ground vibration cause copper pipe walls to thin, forming tiny pinhole leaks beneath the slab.",
      "Key signs of a slab leak include unexplained spikes in monthly water utility bills, warm floor spots on tile or carpet, the sound of running water when all faucets are shut off, and spinning water meter dials.",
      "Non-invasive electronic leak detection uses acoustic ground microphones and thermal imaging to locate subterranean pinhole leaks within inches without jackhammering floors.",
      "Once located, property owners can choose between direct under-slab spot repairs or an overhead PEX pipe reroute through wall framing and attic spaces."
    ]
  },
  {
    title: "Tank vs. Tankless Water Heaters for Hard Water in Orange County",
    slug: "tank-vs-tankless-water-heaters-oc",
    date: "2026-05-14",
    author: "Rooter-X Plumbing Technical Team",
    category: "Water Heaters",
    excerpt: "Comparing standby storage efficiency, mineral scale buildup impact, operational lifespan, and utility rebates for local water heating upgrades.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    content: [
      "Water supply in Orange County contains elevated levels of dissolved calcium and magnesium minerals, commonly referred to as hard water.",
      "Standard tank water heaters trap mineral sediment at the bottom of the tank, creating insulating scale layers that reduce heating efficiency and cause popping rumbling noises.",
      "Tankless water heaters heat water on-demand as it flows through stainless steel heat exchangers, preventing bulk sediment accumulation while eliminating standby energy loss.",
      "Installing isolation flush valves on tankless units enables simple annual descaling with food-grade white vinegar, extending unit service life beyond 20 years.",
      "High-efficiency condensing tankless units also qualify for local gas utility energy efficiency rebates while saving up to 40% on monthly gas heating bills."
    ]
  }
];
