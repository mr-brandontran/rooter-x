export interface SymptomCard {
  title: string;
  description: string;
  serviceSlug: string;
  image: string;
}

export interface WhyChooseBlock {
  title: string;
  description: string;
}

export interface HomepageFAQ {
  question: string;
  answer: string;
}

export const SYMPTOMS: SymptomCard[] = [
  {
    title: "Slow drains",
    description: "Water pooling in shower basins or taking minutes to drain from kitchen sinks indicates accumulating grease or branch line blockages. Cable clearing restores full gravity flow.",
    serviceSlug: "drain-cleaning",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Low water pressure",
    description: "Sudden or gradual drops in water pressure across faucets stem from internal mineral rust scale in vintage galvanized pipes or failing pressure regulators. Repiping solves flow restrictions.",
    serviceSlug: "repipe",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Water stains",
    description: "Discolored damp patches on drywall, ceilings, or baseboards signal active supply line pinholes or waste stack leaks. Non-invasive acoustic location pinpoints the leak origin.",
    serviceSlug: "leak-detection",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Rising water bills",
    description: "Unexplained surges in monthly utility water bills point to hidden subterranean supply line leaks running continuously beneath concrete foundation slabs.",
    serviceSlug: "leak-detection",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Sewer odors",
    description: "Foul sewer gas smells venting into bathrooms or yards signal cracked waste pipes, dry traps, or offset main sewer line joints. Camera inspection locates structural breaches.",
    serviceSlug: "camera-inspection",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Gurgling drains",
    description: "Bubbling toilet water or glug-glug noises from sink drains occur when trapped air forces past main sewer line root blockages. High-pressure hydro jetting clears mainlines completely.",
    serviceSlug: "hydro-jetting",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80"
  }
];

export const WHY_CHOOSE_BLOCKS: WhyChooseBlock[] = [
  {
    title: "Exceptional service",
    description: "We communicate clearly at every stage, respect your property with shoe covers and floor runners, and deliver clean, professional plumbing workmanship."
  },
  {
    title: "Experienced professionals",
    description: "Our licensed technicians bring deep technical literacy to complex residential sewer diagnostics, trenchless pipe restoration, and commercial subcontracting."
  },
  {
    title: "Prompt response",
    description: "When a sewer line backs up or a pipe ruptures, our dispatch team responds fast across all Orange County communities 24 hours a day, 7 days a week."
  },
  {
    title: "Transparent pricing",
    description: "We provide detailed written flat-rate estimates before work starts. You will never encounter hidden fees or surprise bill additions."
  },
  {
    title: "Quality workmanship",
    description: "We use USA-manufactured schedule 40 fittings, Uponor PEX-a, Type L copper, and heavy-duty CIPP epoxy resins backed by solid written guarantees."
  },
  {
    title: "24/7 availability",
    description: "Plumbing emergencies do not adhere to business hours. We maintain fully equipped service trucks ready for immediate dispatch day and night."
  }
];

export const HOMEPAGE_FAQS: HomepageFAQ[] = [
  {
    question: "What is your average response time for emergency service?",
    answer: "We provide 24/7 emergency service across Orange County with average arrival times between 30 and 45 minutes of your call."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express, Discover), debit cards, electronic bank transfers, and checks upon job completion."
  },
  {
    question: "Are you licensed, bonded, and insured in California?",
    answer: "Yes, Rooter-X Plumbing holds CSLB License #1008868, maintains comprehensive general liability insurance, worker's compensation, and state contractor bonding."
  },
  {
    question: "Do you offer preventative sewer maintenance plans?",
    answer: "Yes, we provide custom annual and semi-annual hydro jetting and camera inspection schedules for commercial properties and root-prone residential sewer laterals."
  },
  {
    question: "What sets Rooter-X Plumbing apart from other local plumbers?",
    answer: "We focus on non-invasive trenchless technology, flat upfront pricing, HD video camera diagnostic proof, and licensed contractor leadership dedicated to technical integrity."
  },
  {
    question: "Do you handle commercial plumbing work?",
    answer: "Yes, we perform commercial tenant improvements, restaurant grease line hydro jetting, building main sewer maintenance, and three-phase new construction subcontracts."
  },
  {
    question: "Do you offer eco-friendly plumbing options?",
    answer: "Yes, we utilize 100% chemical-free hydro jetting, trenchless pipe relining that eliminates landfill waste, and high-efficiency tankless hot water conversions."
  },
  {
    question: "What should I do if I suspect a gas leak on my property?",
    answer: "If you smell gas (rotten egg odor), evacuate the premises immediately, call SoCalGas or 911 from a safe distance, and contact Rooter-X Plumbing for emergency gas line pressure testing and repair."
  },
  {
    question: "How do I book a service appointment or camera inspection?",
    answer: "You can book directly online using our contact form, or call us 24/7 at (714) 323-3153 for immediate scheduling."
  }
];
