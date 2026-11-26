// Updated via Rooter-X Admin Portal on 2026-11-26T22:30:07.021Z
export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  order: number;
  icon: string;
  shortDescription: string;
  h1: string;
  overviewH2: string;
  paragraphs: string[];
  expanderParagraphs: string[];
  badgeRow: string[];
  signsHeading: string;
  signsIntro: string;
  signs: { label: string; description: string; relatedServiceSlug?: string }[];
  benefitsHeading: string;
  benefits: { label: string; description: string }[];
  ctaHeadline: string;
  faqs: ServiceFAQ[];
  image: string;
  galleryImages: string[];
  galleryImageClasses?: string[];
}

export const SERVICES: ServiceData[] = [
  {
    "order": 1,
    "title": "Sewer Camera inspection in Orange County,CA Rooter-X Plumbing",
    "slug": "camera-inspection",
    "icon": "Video",
    "shortDescription": "Rooter-X Plumbing provides professional sewer camera inspections in Orange County,CA. Our High- definition camera technology help identify sewer line blockages, root intrusion, pipe craks,offsets, and other underground plumbing problems.",
    "h1": "Professional Sewer Camera Inspection in Orange County,CA",
    "overviewH2": "Why Choose Rooter-X for Sewer Camera Inspections in Orange County?",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X Plumbing provides professional sewer camera inspections services throughout Orange County, CA. Our advanced video inspection equipment allow us to examine the inside of sewer lines and identify plumbing problems accurately.",
      "Our Sewer camera inspection help identify root intrusion, cracked pipes, broken sewer lines, pipe offsets, grease buildup, and blockages that can cause recurring drain problems.",
      "Whether you are experiencing slow drains, recurring sewer backups, or need a preventative inspection, our team helps homeowners, commercial properties, and HOAs understand the condition of their underground plumbing systems.",
      "Serving Fullerton and surrounding Orange county communities, Rooter-X Plumbing provides reliable sewer camera inspection services and recommendations for the next steps. Contact us for professional plumbing assitance, including 24/7 emergency service."
    ],
    "expanderParagraphs": [
      "Home buyers across Orange County rely on our pre-purchase sewer camera inspections to avoid thousands of dollars in hidden pipe repair costs prior to closing escrow.",
      "Following any drain cleaning or trenchless repair, we re-inspect the entire pipe length on camera to provide visual evidence of a fully restored flow channel."
    ],
    "signsHeading": "Common signs you need a sewer camera inspection",
    "signsIntro": "If your plumbing system exhibits persistent main line symptoms, a video camera inspection provides immediate definitive proof.",
    "signs": [
      {
        "label": "Repeated main drain backups",
        "description": "If your main sewer line backs up into shower drains multiple times a year, camera imaging identifies whether roots or broken pipe sections are causing recurrent clogs.",
        "relatedServiceSlug": "drain-cleaning"
      },
      {
        "label": "Sewer gas odor indoors or outdoors",
        "description": "Cracks or offset joints in underground waste lines allow sewer gases to vent up into crawl spaces, yards, or living areas.",
        "relatedServiceSlug": "sewer-line-spot-repairs"
      },
      {
        "label": "Soggy patches in the yard",
        "description": "Unexplained damp green patches over the sewer lateral path indicate subterranean wastewater leaks beneath turf or soil.",
        "relatedServiceSlug": "epoxy-pipe-lining"
      },
      {
        "label": "Escrow sewer inspection requirements",
        "description": "Orange County buyers and sellers perform pre-purchase camera sweeps to document pipe integrity before title transfer.",
        "relatedServiceSlug": "repipe"
      },
      {
        "label": "Gurgling toilet fixtures",
        "description": "Air trapped behind mainline blockages causes toilet water levels to bubble and gurgle whenever sinks or washing machines drain.",
        "relatedServiceSlug": "hydro-jetting"
      }
    ],
    "benefitsHeading": "Benefits of Professional HD Sewer Camera Inspection",
    "benefits": [
      {
        "label": "Advanced Camera Technology",
        "description": "Our Professional sewer inspections cameras allow us to see inside underground sewer pipes and identify plumbing problems without unnecessary excavation."
      },
      {
        "label": "Accurate Problem Detection",
        "description": "Identify root intrusion, craked pipes, pipe offsets, blockages, grease buildup, and other sewer line issues before they become bigger problems."
      },
      {
        "label": "Residential &  Commercial Service",
        "description": "We provide sewer camera inspections for homeowners, commercial properties, property managers, and HOA communities throughout Orange County."
      },
      {
        "label": "Experience Plumbing Solutions",
        "description": "Rooter-X Plumbing helps you understand your sewer line condition and provides professional recommendations for cleaning, repairs, and trenchless sewer solutions when appropriate."
      }
    ],
    "ctaHeadline": "Schedule an HD camera inspection today",
    "image": "/images/real-photos/camera-setup-lawn.jpg",
    "galleryImages": [
      "/images/real-photos/camera-setup-lawn.jpg",
      "/images/real-photos/camera-setup-street.jpg",
      "/images/real-photos/camera-tech-operation.jpg"
    ],
    "galleryImageClasses": [
      "object-cover object-center",
      "object-cover object-[center_65%]",
      "object-cover object-[center_60%]"
    ],
    "faqs": [
      {
        "question": "What is a sewer camera inspection?",
        "answer": "A sewer camera inspection uses specialized video equipment to examine the inside of your sewer line. It helps identify blockages, root intrusion, cracks, pipe damage, and other plumbing problems."
      },
      {
        "question": "How much does a sewer inspection cost?",
        "answer": "The cost depends on the property, accessibility, and scope of the inspection. Contact Rooter-X Plumbing for pricing and scheduling in Orange County."
      },
      {
        "question": "When should I schedule a sewer camera inspection?",
        "answer": "You should consider an inspection if you experience recurring drain backups, slow drains, sewage odors, or frequent sewer line blockages. Inspections are also useful before purchasing a property."
      },
      {
        "question": "Can sewer camera inspections detect tree roots?",
        "answer": "Yes. A sewer camera can help identify tree root intrusion, cracks, separated pipe connections, and other obstructions inside underground sewer lines."
      },
      {
        "question": "Does a sewer camera inspection require digging?",
        "answer": "Most standard sewer camera inspections can be performed through an existing sewer cleanout or accessible plumbing opening without digging up your property."
      },
      {
        "question": "Does Rooter-X Plumbing serve all of Orange County ?",
        "answer": "Rooter-X Plumbing provides sewer camera inspections throughout Orange County, including Fullerton and surrounding communities. Contact us to confirm service availability in your area."
      }
    ]
  },
  {
    "order": 2,
    "title": "Drain cleaning Services",
    "slug": "drain-cleaning",
    "icon": "Wrench",
    "shortDescription": "Professional drain cleaning to clear stubborn clogs, remove builup, and restore proper drainage in residential and commercial properties.",
    "h1": "Professional Drain Cleaning Services in Orange County,CA",
    "overviewH2": "Why Choose Rooter-X for Professional Drain Cleaning in Orange County?",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X Plumbing provides professional drain cleaning services throughout Orange County, CA. Our team helps homeowners and businesses resolve clogged drains, slow drainage, and recurring plumbing blockages using professional drain cleaning equipment.",
      "We provide kitchen drain cleaning, bathroom sink drain cleaning, shower and bathtub drain cleaning, and main sewer line cleaning, Our services help remove grease, soap buildup, hair, food debris, and other obstructions that interfere with proper drainage.",
      "Recurring drain clogs can indicate deeper problems inside your plumbing system. Rooter-X Plumbing uses professional drain snakes, sewer camera inspections, and hydro jetting when appropriate to identify and address the cause of drainage problems.",
      "Serving Fullerton and surrounding Orange County communities, Rooter-X Plumbing provides residential, commercial, and HOA drain cleaning solutions. Whether you have a clogged kitchen sink, backed-up shower, or main sewer line blockage, contact our team for professional plumbing assistance. We are available 24/7 for plumbing assistance."
    ],
    "expanderParagraphs": [
      "For commercial kitchens and multi-unit residential buildings, scheduled drain cleaning prevents emergency overflows that disrupt business operations or create health code violations.",
      "We install accessible cleanout fittings on older homes lacking exterior access points, making routine drain maintenance fast and efficient."
    ],
    "signsHeading": "Common signs you need drain cleaning service",
    "signsIntro": "Sluggish fixtures and standing water are early warnings of accumulating debris inside your branch and waste lines.",
    "signs": [
      {
        "label": "Water pooling around shower drains",
        "description": "Hair mats and soap scum build up inside 2-inch shower traps, restricting drainage velocity.",
        "relatedServiceSlug": "hydro-jetting"
      },
      {
        "label": "Foul organic odors in kitchen sinks",
        "description": "Decomposing food scrap particles adhere to grease deposits inside kitchen waste lines, emitting foul odors.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Multiple fixtures backing up simultaneously",
        "description": "When flushing a toilet causes water to rise in nearby tub drains, the obstruction sits inside the main sewer lateral.",
        "relatedServiceSlug": "sewer-line-spot-repairs"
      },
      {
        "label": "Slow draining kitchen sinks during disposal use",
        "description": "Fibrous food waste clings to pipe scale, narrowing internal pipe diameter over time.",
        "relatedServiceSlug": "epoxy-pipe-lining"
      },
      {
        "label": "Gurgling noises from sink traps",
        "description": "Air displaced past trapped sludge pockets creates rhythmic bubbling sounds in waste pipes.",
        "relatedServiceSlug": "leak-detection"
      }
    ],
    "benefitsHeading": "Benefits of Professional Drain Cleaning Services",
    "benefits": [
      {
        "label": "Fast & Effective Drain Cleaning",
        "description": "Our Professional drain cleaning equipment helps remove stubborn clogs and restore proper drainage in kitchen sinks, bathroom drains, showers, and sewer lines."
      },
      {
        "label": "Helps Prevent Recurring Clogs",
        "description": "We address common causes of drain blockages, including grease, hair, soap residue, food debris, and buildup that can restrict water flow."
      },
      {
        "label": "Residential & Commercial Plumbing",
        "description": "We provide drain cleaning services for homeowners, restaurants, commercial buildings, property managers, and HOA communities throughout Orange County."
      },
      {
        "label": "Professional Drain Cleaning Solutions",
        "description": "From drain snaking and sewer camera inspections to hydro jetting, Rooter-X evaluates the problem and recommends the appropriate cleaning solution for your plumbing system."
      }
    ],
    "ctaHeadline": "Get fast drain cleaning service today",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    ],
    "faqs": [
      {
        "question": "What causes drains to become clogged?",
        "answer": "Drains can become clogged due to grease, food particles, hair, soap residue, mineral buildup, foreign objects, and other debris accumulating inside the pipes."
      },
      {
        "question": "How do professional plumbers clean clogged drains?",
        "answer": "Professional plumbers use specialized equipment such as drain snakes, augers, hydro jetting systems to remove blockages and restore proper drainage. The appropriate method depends on the type and condition of the plumbing system."
      },
      {
        "question": "How much does professional drain cleaning cost?",
        "answer": "Drain Cleaning costs depend on the location of the blockage, severity of the clog, accessibility, and cleaning method required. Contact Rooter-X Plumbing for service pricing."
      },
      {
        "question": "Can recurring drain clogs indicate a sewer line problem?",
        "answer": "Yes. Recurring drain blockages can indicate deeper plumbing issues, including root intrusion, damaged pipes, grease buildup, or sewer line obstructions. A sewer camera inspection can help identify underlying problem."
      },
      {
        "question": "Do you offer emergency drain cleaning services?",
        "answer": "Yes! Rooter-X Plumbing offers 24/7 emergency plumbing services for urgent drain and sewer problems throughout its Orange County service area."
      },
      {
        "question": "What areas does Rooter-X Plumbing serve?",
        "answer": "Rooter-X Plumbing provides professional cleaning services in Fullerton and throughout Orange County, with additional service coverage in surrounding communities. Contact us to confirm availability in your area."
      }
    ]
  },
  {
    "order": 3,
    "title": "Hydro Jetting Drain Cleaning",
    "slug": "hydro-jetting",
    "icon": "Waves",
    "shortDescription": "Powerful high-pressure water jetting to remove, sludge, roots, and stubborn buildup from drain and sewer lines.",
    "h1": "Professional Hydro Jetting Services in Orange County,CA",
    "overviewH2": "Why Choose Rooter-X for Professional Hydro Jetting in Orange County?",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X Plumbing provides professional hydro jetting services throughout Orange County, CA. Hydro jetting uses high pressure water to clean the inside of drain and sewer pipes, helping remove stubborn buildup and restore proper water flow.",
      "Our hydro jetting equipment helps remove grease, sludge, soap residue, mineral build up, and tree root intrusion from suitable drain and sewer lines. This powerful cleaning method can address recurring blockages that traditional drain snaking may not fully remove.",
      "Whether you are dealing with recurring kitchen drain backups, clogged main sewer lines, or buildup in commercial plumbing systems, our team evaluates the condition of the piping before recommending hydro jetting. A camera inspection may be used to help assess the line.",
      "Rooter-X Plumbing serves residential properties, commercial buildings, and HOA communities in Fullerton and throughout Orange County. Contact us for professional hydro jetting and drain cleaning services. We are available 24/7 for plumbing emergencies."
    ],
    "expanderParagraphs": [
      "For trenchless pipe relining projects, hydro jetting serves as the vital preparation step, removing all interior debris and scale so epoxy resin bonds cleanly to original pipe walls.",
      "Hydro jetting uses zero harsh chemical additives — only clean water pressure — making it an environmentally safe maintenance procedure."
    ],
    "signsHeading": "Signs your sewer system requires hydro jetting",
    "signsIntro": "When routine drain cabling fails to prevent recurring main line backups, high-pressure water jetting is required.",
    "signs": [
      {
        "label": "Frequent recurring main sewer line blockages",
        "description": "Lines backing up every few months indicate thick grease coating or heavy root mats that mechanical cables merely punch small holes through.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Heavy grease accumulation in commercial kitchens",
        "description": "Restaurant waste lines building up fats, oils, and greases require periodic high-pressure hydraulic jetting.",
        "relatedServiceSlug": "drain-cleaning"
      },
      {
        "label": "Severe tree root penetration",
        "description": "Spinning root-cutting jet nozzles pulverize thick root systems into fine pulp and flush them out to the municipal sewer.",
        "relatedServiceSlug": "sewer-line-spot-repairs"
      },
      {
        "label": "Preparation for CIPP epoxy pipe lining",
        "description": "Internal pipe walls must be scoured down to bare material before installing inverted epoxy resin liners.",
        "relatedServiceSlug": "epoxy-pipe-lining"
      },
      {
        "label": "Slow drains across an entire property",
        "description": "Widespread sluggish drainage indicates heavy scale rust and sediment build-up inside main sewer laterals.",
        "relatedServiceSlug": "repipe"
      }
    ],
    "benefitsHeading": "Benefits of hydro jetting service",
    "benefits": [
      {
        "label": "Powerful High-Pressure Cleaning",
        "description": "Hydro jetting uses specialized high pressure water equipment to remove stubborn grease, sludge, debris, and buildup from the interior walls of suitable drain and sewer pipes."
      },
      {
        "label": "Removes Stubborn Drain Buildup",
        "description": "Breaks down accumulated grease, soap residue, mineral deposits, and other debris that can restrict water flow and contribute to recurring drain blockages."
      },
      {
        "label": "Residential & Commercial Solutions",
        "description": "We provide professional hydro jetting services for homeowners, commercial properties, restaurants, property managers, and HOA communities throughout Orange County."
      },
      {
        "label": "Through Sewer Line Cleaning",
        "description": "Our hydro jetting equipment helps clean the inside of suitable sewer lines. We assess pipe conditions and recommend the appropriate cleaning method for your plumbing system."
      }
    ],
    "image": "/images/real-photos/hydrojetting-truck-driveway-310.jpg",
    "galleryImages": [
      "/images/real-photos/hydrojetting-truck-driveway-310.jpg",
      "/images/real-photos/hydrojetting-truck-street-310.jpg",
      "/images/real-photos/hydrojetting-cleanout-operation-310.jpg"
    ],
    "galleryImageClasses": [
      "object-cover object-[center_60%]",
      "object-cover object-[center_65%]",
      "object-cover object-center"
    ],
    "faqs": [
      {
        "question": "What is hydro jetting?",
        "answer": "Hydro jetting is a professional drain cleaning method that uses high-pressure water to remove grease, sludge, debris, mineral buildup, and other obstructions from suitable drain and sewer pipes."
      },
      {
        "question": "How does a hydro jetting work?",
        "answer": "A specialized hose and nozzle are inserted into the drain or sewer line. High-pressure water is released through the nozzle to break down buildup and flush debris through the pipe."
      },
      {
        "question": "Is hydro jetting better than snaking?",
        "answer": "Hydro jetting can provide a more thorough cleaning by removing buildup along the interior pipe walls. Snaking is useful for breaking through certain blockages, while hydro jetting cleans a wider area of the pipe. The best method depends on the condition of your plumbing system."
      },
      {
        "question": "Can hydro jetting remove tree roots?",
        "answer": "Hydro jetting can remove certain roots intrusions from suitable sewer pipes. However, if roots have entered through damaged or separated pipe connections, additional sewer line repairs may be necessary."
      },
      {
        "question": "Is hydro jetting safe for older pipes?",
        "answer": "Not every pipe is suitable for hydro jetting. Older, cracked, deteriorated, or damaged pipes should be evaluated before cleaning. A sewer camera inspections can help determine whether hydro jetting is appropriate."
      },
      {
        "question": "Does Rooter-X Plumbing offer hydro jetting in Orange County?",
        "answer": "Yes- Rooter-X Plumbing provides professional hydro jetting and drain cleaning services throughout Orange County, including Fullerton and surrounding communities. Contact us to schedule service."
      }
    ]
  },
  {
    "order": 4,
    "title": "Pipe Bursting Sewer Line Replacement",
    "slug": "sewage-pipe-burst",
    "icon": "Activity",
    "shortDescription": "Replace damaged underground sewer pipes using trenchless pipe bursting technology with minimal surface disruption.",
    "h1": "Trenchless Pipe Bursting Sewer Replacement in Orange County,CA",
    "overviewH2": "Why choose Rooter-X for Trenchless pipe Bursting in Orange County?",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X Plumbing provides professional trenchless pipe bursting services throughout Orange County, CA. Pipe bursting is an advanced underground sewer replacement method used to replace damaged, deteriorated, or failing sewer pipes without requiring a traditional open trench along the entire pipeline.",
      "Our pipe bursting process uses specialized equipment to break apart the existing underground pipe while simultaneously pulling a new replacement pipe into position. This method can help restore the function of damaged sewer lines while reducing disruption to landscaping, driveways, sidewalks, and other surrounding surfaces when site conditions allow.",
      "Trenchless sewer pipe replacement may be an effective solution for properties experiencing recurring sewer backups, cracked pipes, root intrusion, corrosion, or deteriorating underground plumbing. Before recommending pipe bursting, our team evaluates the existing sewer line, pipe depth, access points, surrounding utilities, and site conditions.",
      "Rooter-X Plumbing provides underground sewer solutions for residential properties, commercial buildings, and HOA communities in Fullerton and throughout Orange County. Contact out team to discuss your sewer line replacement needs and determine whether trenchless pipe bursting is the right solution for your property."
    ],
    "expanderParagraphs": [
      "Pipe bursting requires only two small access pits — one entry pit near the foundation and one insertion pit at the property line connection — preserving expensive landscaping.",
      "Because HDPE is smooth and continuous, flow velocity increases while root penetration risk is eliminated permanently."
    ],
    "signsHeading": "When to choose sewage pipe bursting replacement",
    "signsIntro": "If your main line has suffered structural collapse or severe root damage, pipe bursting replaces old pipe without open trench excavation.",
    "signs": [
      {
        "label": "Collapsed or crushed main sewer line",
        "description": "When pipe walls fracture and collapse, cabling and jetting can no longer pass through, requiring structural pipe replacement.",
        "relatedServiceSlug": "sewer-line-spot-repairs"
      },
      {
        "label": "Severe root intrusion at multiple joints",
        "description": "Vitrified clay pipes with root intrusion at every 4-foot bell joint require continuous jointless HDPE replacement.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Extensive Orangeburg pipe deterioration",
        "description": "Bituminized fiber pipes installed mid-century suffer wall ovalization and collapse, making pipe bursting ideal.",
        "relatedServiceSlug": "epoxy-pipe-lining"
      },
      {
        "label": "Desire to protect driveways and landscaping",
        "description": "Pipe bursting eliminates open trenches across custom stone pavers, concrete driveways, and mature trees.",
        "relatedServiceSlug": "boring"
      },
      {
        "label": "Need for pipe upsizing",
        "description": "Bursting heads can expand original 4-inch lines to install larger 6-inch HDPE pipes for increased capacity.",
        "relatedServiceSlug": "repipe"
      }
    ],
    "benefitsHeading": "Benefits of Trenchless Pipe Bursting Sewer Replacement",
    "benefits": [
      {
        "label": "Minimal Surface Disruption",
        "description": "Pipe Bursting can replace underground sewer lines with less excavation than traditional open-trench replacement, helping preserve landscaping, driveways, and surroundings surfaces when site conditions allow."
      },
      {
        "label": "Complete Sewer Pipe Replacement",
        "description": "Unlike pipe lining, pipe bursting replaces the existing damaged pipe with a new pipe, providing a replacement solution for deteriorated underground sewer systems."
      },
      {
        "label": "Residential & Commercial Solutions",
        "description": "We provide trenchless sewer replacement solutions for homeowners, commercial buildings, property managers, and HOA communities throughout Orange County."
      },
      {
        "label": "Advanced Trenchless Technology",
        "description": "Our pipe bursting process uses specialized equipment to fracture the existing pipe while pulling a new replacement pipe into position, reducing the need for extensive excavation when conditions permit."
      }
    ],
    "image": "/images/real-photos/pipebursting-hdpe-layout-310.jpg",
    "galleryImages": [
      "/images/real-photos/pipebursting-hdpe-layout-310.jpg",
      "/images/real-photos/pipebursting-fusion-machine-310.jpg",
      "/images/real-photos/pipebursting-fused-seam-310.jpg"
    ],
    "galleryImageClasses": [
      "object-cover object-[center_65%]",
      "object-cover object-center",
      "object-cover object-center"
    ],
    "faqs": [
      {
        "question": "What is a pipe bursting sewer replacement?",
        "answer": "Pipe bursting is a trenchless sewer replacement method that breaks apart an existing damaged underground pipe while simultaneously pulling a new replacement pipe into its place. It can replace failing sewer lines without excavating the entire length of the pipeline."
      },
      {
        "question": "How does trenchless pipe bursting work?",
        "answer": "Specialized equipment pulls a bursting head through the existing sewer pipe. The bursting head fractures the old pipe outward while pulling a new pipe into position behind it. Access pits are typically required at designated locations."
      },
      {
        "question": "What are the benefits or pipe bursting?",
        "answer": "Pipe bursting can reduce excavation, minimize disruption to landscaping and hardscaping, and replace deteriorated underground sewer pipes with a new pipe. Suitability depends on site conditions and existing pipe configuration."
      },
      {
        "question": "Is pipe bursting better than traditional sewer replacement?",
        "answer": "Pipe bursting can be a less disruptive alternative to traditional open-trench sewer replacement. However, conventional excavation may be necessary when access, pipe alignment, surrounding utilities, or site conditions make trenchless replacement unsuitable."
      },
      {
        "question": "What is the difference between pipe bursting and pipe lining?",
        "answer": "Pipe bursting replaces the existing pipe by fracturing it and pulling a new pipe into position. Pipe lining installs a new liner inside the existing pipe to create a renewed interior surface without replacing the entire pipe."
      },
      {
        "question": "Does Rooter-X Plumbing offer pipe bursting in Orange County?",
        "answer": "Yes! Rooter-X Plumbing provides underground sewer replacement and trenchless pipe bursting solutions in Fullerton and throughout Orange County. Contact our team to discuss your property's sewer line conditions and schedule an evaluation."
      }
    ]
  },
  {
    "order": 5,
    "title": "Sewer line spot repairs",
    "slug": "sewer-line-spot-repairs",
    "icon": "Hammer",
    "shortDescription": "Professional sewer line spot repairs to fix damage, cracked, or broken sewer pipes without replacing the entire sewer line.",
    "h1": "Sewer Line Spot Repairs in Orange County, CA",
    "overviewH2": "Expert Sewer Line Spot Repair & Localized Sewer Pipe Repair",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X provides professional sewer line spot repair services to fix damaged, cracked, or leaking sewer pipes without replacing the entire sewer line. If your sewer line has a localized problem caused by root intrusion, corrosion, cracks, or pipe damage, our targeted repair solutions can help restore proper drainage and prevent further damage. We focus on identifying the problem and repairing the affected section efficiently and reliably.",
      "Our sewer line spot repair service is designed to provide homeowners with a cost-effective solution for localized sewer pipe damage. Whether you're experiencing recurring drain backups, sewer odors, or slow drainage, Rooter-X can help determine whether a spot repair is the right solution. Our goal is to restore your sewer line's functionality while helping you avoid unnecessary excavation and costly full sewer line replacement whenever possible."
    ],
    "expanderParagraphs": [],
    "signsHeading": "Signs your line needs a targeted sewer spot repair",
    "signsIntro": "Targeted spot repairs are recommended when diagnostic camera sweeps confirm localized pipe failure.",
    "signs": [
      {
        "label": "Isolated root intrusion at a single joint",
        "description": "Tree roots entering through a single cracked clay bell joint while adjacent pipe sections show no structural damage.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Localized sewer pipe belly or dip",
        "description": "A short sag in the pipe grade catching debris can be corrected by excavating and re-grading that specific section.",
        "relatedServiceSlug": "hydro-jetting"
      },
      {
        "label": "Cracked or sheared pipe joint from soil settling",
        "description": "Ground movement or seismic activity causing an isolated shearing failure in clay or cast iron lines.",
        "relatedServiceSlug": "sewage-pipe-burst"
      },
      {
        "label": "Sinkholes developing in lawns",
        "description": "Localized wastewater leaks washing away subterranean soil above a broken pipe section.",
        "relatedServiceSlug": "leak-detection"
      },
      {
        "label": "External mechanical puncture during utility digging",
        "description": "Accidental fence post installation or landscaping augers puncturing a shallow sewer lateral.",
        "relatedServiceSlug": "repipe"
      }
    ],
    "benefitsHeading": "Targeted sewer line spot repair offers several benefits for homeowners. By repairing only the damaged section of the sewer pipe, you can avoid unnecessary full sewer line replacement, reduce excavation, minimize disruption to your property, and potentially save money. This repair method can effectively address localized cracks, leaks, and root damage while helping restore proper sewer system function.",
    "benefits": [
      {
        "label": "Targeted Sewer Line Repairs",
        "description": "We focus on repairing the damaged section of your sewer line instead of replacing the entire pipe whenever possible. Our spot repair approach helps address localized sewer pipe problems efficiently."
      },
      {
        "label": "Save on Sewer Line Repairs",
        "description": "Sewer line spot repair can be a more affordable alternative to full sewer line replacement when the damage is limited to one area. We help you find the right repair solution for your property."
      },
      {
        "label": "Professional Sewer Repair Service",
        "description": "Trust Rooter-X Plumbing to help identify sewer line problems and recommend reliable repair options. We focus on quality workmanship and solutions designed to restore proper sewer flow."
      },
      {
        "label": "Reliable Drainage Solutions",
        "description": "Cracked or damaged sewer pipes can cause recurring backups, slow drains, and unpleasant odors. Our sewer line spot repair service addresses localized pipe damage to help restore proper drainage."
      }
    ],
    "ctaHeadline": "Fix localized sewer pipe damage",
    "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ],
    "faqs": [
      {
        "question": "What is sewer line spot repair?",
        "answer": "Sewer line spot repair is a plumbing repair method that fixes a specific damaged section of an underground sewer pipe without replacing the entire sewer line."
      },
      {
        "question": "When is sewer line spot repair necessary?",
        "answer": "Spot repair may be necessary when a sewer pipe has localized damage, such as cracks, leaks, root intrusion, or a broken section that is affecting proper drainage."
      },
      {
        "question": "Is sewer line spot repair cheaper than full sewer line replacement?",
        "answer": "In many cases, yes. Repairing only the damaged section can cost less than replacing the entire sewer line, depending on the location and extent of the damage."
      },
      {
        "question": "How do I know if my sewer line needs spot repair?",
        "answer": "Common warning signs include recurring drain backups, slow drains, sewage odors, gurgling sounds, and sewage-related wet spots in your yard."
      },
      {
        "question": "Does sewer line spot repair require digging?",
        "answer": "Some spot repairs require excavation to access the damaged pipe. The amount of digging depends on the pipe's depth, location, and repair method."
      },
      {
        "question": "How long does sewer line spot repair take?",
        "answer": "The repair time depends on the extent of the damage, accessibility of the sewer pipe, and the repair method used. Many localized repairs can be completed faster than a full sewer line replacement."
      },
      {
        "question": "Can tree roots damage my sewer line?",
        "answer": "Yes. Tree roots can enter small cracks or joints in sewer pipes, grow inside the line, and cause blockages, leaks, and structural damage."
      },
      {
        "question": "Why choose Rooter-X for sewer line spot repair?",
        "answer": "Rooter-X Plumbing focuses on identifying sewer line problems and providing targeted repair solutions to address damaged pipe sections. Our goal is to restore proper drainage while helping homeowners avoid unnecessary full sewer line replacement whenever possible."
      }
    ]
  },
  {
    "order": 6,
    "title": "Epoxy pipe liner (CIPP)",
    "slug": "epoxy-pipe-lining",
    "icon": "ShieldCheck",
    "shortDescription": "Restore damaged sewer pipes with trenchless epoxy pipe lining. A long-lasting solution for cracked, deteriorating, or leaking pipes without traditional excavation.",
    "h1": "Trenchless Epoxy Pipe Lining (CIPP) in Orange County, CA",
    "overviewH2": "Professional CIPP Sewer Pipe Lining & Trenchless Pipe Rehabilitation",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X provides professional epoxy pipe lining services designed to restore damaged, aging, or deteriorating pipes from the inside. Epoxy pipe lining is a trenchless pipe rehabilitation method that uses a specialized epoxy coating to create a protective new lining inside existing pipes. This process can help seal small cracks, improve pipe integrity, and extend the life of suitable plumbing pipes without the need for extensive pipe removal or excavation.",
      "If you're experiencing recurring leaks, corrosion, or plumbing problems, epoxy pipe lining may be an effective solution for your property. At Rooter-X, we focus on identifying pipe conditions and determining whether epoxy pipe restoration is the right option. Our goal is to provide reliable pipe lining solutions that minimize disruption, protect your plumbing system, and help homeowners avoid unnecessary traditional pipe replacement when possible."
    ],
    "expanderParagraphs": [
      "CIPP lining is ideal for sewer lines running beneath concrete slabs, home foundations, interior tile flooring, mature palm trees, or stone hardscapes.",
      "Prior to lining, we hydro jet internal pipe walls to bare metal or clay, ensuring flawless epoxy bonding."
    ],
    "signsHeading": "Signs your line is an ideal candidate for CIPP epoxy lining",
    "signsIntro": "When pipes suffer structural deterioration beneath permanent structures, trenchless epoxy lining provides a structural fix without demolition.",
    "signs": [
      {
        "label": "Pipes located under home foundations or interior slabs",
        "description": "Avoid jackhammering concrete subfloors inside homes by relining sewer pipes from an exterior cleanout access.",
        "relatedServiceSlug": "leak-detection"
      },
      {
        "label": "Corroded cast iron with bottom channel wear",
        "description": "Smooth out flaking rust scale and bridge eroded bottom channels in vintage residential cast iron lines.",
        "relatedServiceSlug": "hydro-jetting"
      },
      {
        "label": "Persistent root growth through clay pipe joints",
        "description": "Seals every joint along the entire pipe length in a single continuous resin sleeve.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Sewer lines under pool decks and custom hardscapes",
        "description": "Prevents breaking up expensive outdoor pavers, retaining walls, or custom stone hardscapes.",
        "relatedServiceSlug": "boring"
      },
      {
        "label": "Frequent pinhole leaks or hairline fractures",
        "description": "Structural epoxy seals all hairline cracks, pinholes, and deteriorating joint gaskets.",
        "relatedServiceSlug": "repipe"
      }
    ],
    "benefitsHeading": "Epoxy pipe lining offers a modern, trenchless solution for restoring damaged or aging pipes from the inside.",
    "benefits": [
      {
        "label": "No Major Excavation",
        "description": "Restore suitable pipes without extensive digging or removing entire pipe sections."
      },
      {
        "label": "Long-Lasting Protection",
        "description": "Epoxy lining creates a protective interior barrier that helps prevent corrosion and leaks."
      },
      {
        "label": "Cost-Effective Pipe Repair",
        "description": "Avoid unnecessary pipe replacement when epoxy lining is a suitable option."
      },
      {
        "label": "Improved Pipe Performance",
        "description": "Help restore the interior surface of aging pipes and improve plumbing system reliability."
      },
      {
        "label": "Less Property Disruption",
        "description": "Minimize damage to landscaping, flooring, walls, and surrounding areas."
      },
      {
        "label": "Reliable Pipe Restoration",
        "description": "Extend the service life of suitable existing pipes with professional epoxy pipe lining."
      }
    ],
    "ctaHeadline": "Restore pipes with trenchless CIPP epoxy lining",
    "image": "/images/real-photos/epoxy-wetout-rollout.jpg",
    "galleryImages": [
      "/images/real-photos/epoxy-wetout-rollout.jpg",
      "/images/real-photos/epoxy-robotic-cutter.jpg",
      "/images/real-photos/epoxy-inversion-pit.jpg"
    ],
    "galleryImageClasses": [
      "object-cover object-[center_30%]",
      "object-cover object-center",
      "object-cover object-[center_40%]"
    ],
    "faqs": [
      {
        "question": "What is epoxy pipe lining?",
        "answer": "Epoxy pipe lining is a trenchless pipe repair method that applies a specialized epoxy coating inside an existing pipe to create a protective new lining. It can help restore pipes without removing the entire pipe."
      },
      {
        "question": "How does epoxy pipe lining work?",
        "answer": "The process typically involves inspecting and cleaning the existing pipe, preparing its interior surface, and applying an epoxy resin lining. The epoxy is then allowed to cure and form a protective interior layer."
      },
      {
        "question": "What are the benefits of epoxy pipe lining?",
        "answer": "Epoxy pipe lining can help seal small cracks, protect against corrosion, reduce the need for extensive excavation, and extend the service life of suitable existing pipes."
      },
      {
        "question": "Is epoxy pipe lining better than replacing pipes?",
        "answer": "Epoxy pipe lining can be a great alternative when existing pipes are structurally suitable for rehabilitation. However, severely damaged, collapsed, or deteriorated pipes may require replacement."
      },
      {
        "question": "How long does epoxy pipe lining last?",
        "answer": "The lifespan depends on the epoxy product, installation quality, pipe condition, and operating conditions. A professional inspection can help determine whether lining is a suitable long-term solution."
      },
      {
        "question": "Does epoxy pipe lining require digging?",
        "answer": "Epoxy pipe lining is generally a trenchless repair method, meaning it can often be completed through existing access points without major excavation."
      },
      {
        "question": "Can epoxy pipe lining fix leaking pipes?",
        "answer": "Epoxy lining can help seal certain small cracks and leaks inside suitable pipes. However, major breaks, collapsed sections, and severe structural damage may require a different repair method."
      },
      {
        "question": "Why choose Rooter-X for epoxy pipe lining?",
        "answer": "Rooter-X focuses on providing professional pipe repair and rehabilitation solutions. We evaluate existing pipe conditions and help determine whether epoxy pipe lining is the right solution for your plumbing system."
      }
    ]
  },
  {
    "order": 7,
    "title": "Boring Services",
    "slug": "boring",
    "icon": "Compass",
    "shortDescription": "Professional underground boring services for installing underground pipes and utilities with minimal surface disruption and excavation.",
    "h1": "Professional Underground Boring Services",
    "overviewH2": "Reliable Trenchless Underground Boring Solutions",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X provides professional underground boring services for installing pipes and utility lines beneath driveways, sidewalks, landscaping, and other surfaces. Underground boring is a trenchless installation method that helps create an underground pathway while minimizing the need for traditional open-trench excavation. This approach helps reduce surface disruption and protects surrounding property during underground pipe installation.",
      "Whether you need underground boring for sewer lines, water lines, or other compatible underground utilities, Rooter-X focuses on providing reliable installation solutions based on your property's needs. Our goal is to complete underground boring projects efficiently while minimizing disruption to driveways, landscaping, and existing surfaces. We help customers find practical solutions for underground pipe installation without unnecessary excavation whenever site conditions allow."
    ],
    "expanderParagraphs": [
      "Boring eliminates public right-of-way street closure permits, heavy asphalt patching fees, and traffic disruption.",
      "Our directional drilling rigs operate with precision grade tracking to guarantee correct downward slope for gravity waste lines."
    ],
    "signsHeading": "When horizontal boring is required for plumbing projects",
    "signsIntro": "Horizontal directional boring is the premier solution for utility installations passing beneath high-value surface structures.",
    "signs": [
      {
        "label": "Sewer line replacement under concrete driveways",
        "description": "Bore directly under multi-car concrete driveways without cracking or removing decorative concrete slabs.",
        "relatedServiceSlug": "sewage-pipe-burst"
      },
      {
        "label": "New water service lines under roadways",
        "description": "Pass main water lines under municipal streets without costly asphalt cut permits or lane closures.",
        "relatedServiceSlug": "water-heater-installation"
      },
      {
        "label": "Connecting new structures to street sewer mains",
        "description": "Bore long-distance lateral runs from ADUs or detached commercial buildings to property line cleanouts.",
        "relatedServiceSlug": "new-construction"
      },
      {
        "label": "Crossing beneath mature trees and root zones",
        "description": "Protect historic tree root systems by drilling deep beneath root horizons.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Commercial utility conduit installation",
        "description": "Run dual sewer, water, or electrical conduit lines under active business parking lots.",
        "relatedServiceSlug": "epoxy-pipe-lining"
      }
    ],
    "benefitsHeading": "Benefits of horizontal directional boring",
    "benefits": [
      {
        "label": "Minimal Surface Disruption",
        "description": "Install underground pipes beneath driveways, sidewalks, and landscaping while reducing the need for extensive digging."
      },
      {
        "label": "Protect Your Property",
        "description": "Help preserve existing concrete, asphalt, landscaping, and surrounding surfaces."
      },
      {
        "label": "Efficient Installation",
        "description": "Underground boring can provide an efficient way to install sewer lines, water lines, and compatible underground utilities."
      },
      {
        "label": "Cost-Effective Solutions",
        "description": "Reduce restoration work and unnecessary excavation when site conditions allow."
      },
      {
        "label": "Reliable Underground Installation",
        "description": "Create underground pathways for pipe and utility installations using professional boring techniques."
      },
      {
        "label": "Versatile Applications",
        "description": "Underground boring can be used for various residential and commercial underground installation projects."
      }
    ],
    "ctaHeadline": "Schedule directional boring service",
    "image": "/images/real-photos/boring-pipe-pull.jpg",
    "galleryImages": [
      "/images/real-photos/boring-pipe-pull.jpg",
      "/images/real-photos/boring-entry-pit.jpg",
      "/images/real-photos/boring-pipe-tie-in.jpg"
    ],
    "faqs": [
      {
        "question": "What is underground boring?",
        "answer": "Underground boring is a trenchless construction method used to create a pathway beneath the ground for installing pipes, conduits, and utility lines without digging a continuous open trench."
      },
      {
        "question": "What are the benefits of underground boring?",
        "answer": "Underground boring helps minimize surface disruption, protect landscaping and existing concrete, reduce excavation, and provide an efficient way to install underground pipes and utilities."
      },
      {
        "question": "Can underground boring be used for sewer line installation?",
        "answer": "Yes. Underground boring can be used for certain sewer line installation projects, depending on soil conditions, pipe requirements, slope, and site accessibility."
      },
      {
        "question": "Can underground boring be done beneath driveways and sidewalks?",
        "answer": "Yes. Boring can allow pipes and utilities to be installed beneath driveways, sidewalks, and other paved surfaces while minimizing the need to remove existing concrete or asphalt."
      },
      {
        "question": "Is underground boring better than traditional trenching?",
        "answer": "Underground boring can be a good alternative when minimizing surface disruption is important. The best method depends on soil conditions, installation depth, project size, and accessibility."
      },
      {
        "question": "How long does an underground boring project take?",
        "answer": "Project timelines depend on the distance, soil conditions, installation requirements, and accessibility. A professional evaluation can help determine the expected completion time."
      },
      {
        "question": "What types of pipes can be installed using underground boring?",
        "answer": "Depending on the boring method and project requirements, underground boring can be used to install sewer pipes, water lines, conduits, and other compatible underground utilities."
      },
      {
        "question": "Why choose Rooter-X for underground boring services?",
        "answer": "Rooter-X focuses on providing practical underground installation solutions while helping minimize unnecessary excavation and surface disruption. We work to identify the right approach for each property's underground boring needs."
      }
    ]
  },
  {
    "order": 8,
    "title": "RE Pipe Service.",
    "slug": "repipe",
    "icon": "RefreshCw",
    "shortDescription": "Professional RE pipe services to address damaged, deteriorating, or aging pipes with reliable repair and replacement solutions.",
    "h1": "RE Pipe Service",
    "overviewH2": "Professional RE Pipe Repair and Replacement Solutions",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X provides professional RE pipe services to help homeowners and businesses address damaged, aging, leaking, or deteriorating pipes. Whether your plumbing system needs pipe repairs or replacement, our goal is to identify the problem and recommend a reliable solution. Proper pipe repair and replacement can help restore water flow, prevent ongoing plumbing issues, and protect your property's plumbing system from further damage.",
      "Damaged or aging pipes can lead to recurring leaks, reduced water pressure, water damage, and costly plumbing problems. Rooter-X focuses on providing practical pipe repair and replacement solutions based on the condition of your existing plumbing system. We work to help restore your pipes' functionality while minimizing unnecessary disruption to your property whenever possible."
    ],
    "expanderParagraphs": [
      "Every repipe includes full hydrostatic pressure testing, municipal permit inspections, and professional drywall patching.",
      "Switching to PEX-a or Type L copper eliminates future slab leak emergencies and improves water delivery to all shower and sink fixtures."
    ],
    "signsHeading": "Signs your home requires complete repiping",
    "signsIntro": "Pinhole leaks, discolored water, and dropping pressure indicate widespread corrosion across original supply pipes.",
    "signs": [
      {
        "label": "Rusty or discolored water from faucets",
        "description": "Internal iron oxide rust flaking off aging galvanized pipe walls and contaminating household tap water.",
        "relatedServiceSlug": "leak-detection"
      },
      {
        "label": "Low water pressure at multiple fixtures",
        "description": "Heavy mineral scale deposits restricting internal pipe diameter inside legacy galvanized lines.",
        "relatedServiceSlug": "water-heater-installation"
      },
      {
        "label": "Multiple pinhole leaks or slab leaks",
        "description": "Experiencing more than one slab leak or pinhole leak indicates systemic metal wall fatigue.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Temperature spikes when toilets flush",
        "description": "Restricted cold water supply lines causing hot water surges in showers whenever secondary fixtures open.",
        "relatedServiceSlug": "tankless-installation"
      },
      {
        "label": "Home age exceeding 40 years with original pipes",
        "description": "Galvanized steel lines typically reach end-of-life status after 40 to 50 years of service.",
        "relatedServiceSlug": "drain-cleaning"
      }
    ],
    "benefitsHeading": "Benefits of whole-house repiping",
    "benefits": [
      {
        "label": "Reliable Pipe Solutions:",
        "description": "Address damaged, aging, or deteriorating pipes with professional repair and replacement options."
      },
      {
        "label": "Prevent Further Damage",
        "description": "Repairing problematic pipes can help prevent ongoing leaks and additional plumbing damage."
      },
      {
        "label": "Improved Water Flow",
        "description": "Proper pipe repairs can help restore plumbing performance and improve water flow when pipe damage is the cause."
      },
      {
        "label": "Cost-Effective Options",
        "description": "Evaluate repair and replacement solutions to find the most practical option for your plumbing system."
      },
      {
        "label": "Protect Your Property",
        "description": "Address leaking or damaged pipes before they cause more extensive water damage."
      },
      {
        "label": "Professional Service",
        "description": "Rooter-X focuses on dependable pipe repair and replacement solutions tailored to your property's needs."
      }
    ],
    "ctaHeadline": "Upgrade home water pipes with a professional repipe",
    "image": "/images/real-photos/repipe-pex-pull.png",
    "galleryImages": [
      "/images/real-photos/repipe-pex-pull.png",
      "/images/real-photos/repipe-containment-living.png",
      "/images/real-photos/repipe-containment-garage.png"
    ],
    "galleryImageClasses": [
      "object-cover object-[center_75%]",
      "object-cover object-[center_80%]",
      "object-cover object-[center_75%]"
    ],
    "faqs": [
      {
        "question": "What is RE pipe service?",
        "answer": "RE pipe service involves addressing plumbing pipe problems through professional repair or replacement solutions, depending on the condition of the existing pipes."
      },
      {
        "question": "When should pipes be repaired or replaced?",
        "answer": "Pipes may need repair or replacement when they develop recurring leaks, cracks, corrosion, blockages, or other damage that affects plumbing performance."
      },
      {
        "question": "What are the signs of damaged pipes?",
        "answer": "Common warning signs include water leaks, reduced water pressure, discolored water, unusual plumbing noises, recurring clogs, and unexplained increases in water bills."
      },
      {
        "question": "Is pipe repair better than pipe replacement?",
        "answer": "Pipe repair may be appropriate when damage is limited to a specific section. Replacement may be necessary when pipes are severely damaged, deteriorated, or experiencing repeated problems."
      },
      {
        "question": "How long does pipe repair or replacement take?",
        "answer": "The timeline depends on the pipe condition, location, accessibility, and extent of the work required. A professional inspection can help determine the expected project duration."
      },
      {
        "question": "Can damaged pipes cause water damage?",
        "answer": "Yes. Leaking or broken pipes can cause moisture buildup, structural damage, mold growth, and damage to floors, walls, and surrounding areas."
      },
      {
        "question": "How can I prevent future pipe problems?",
        "answer": "Regular plumbing inspections, addressing leaks early, and maintaining your plumbing system can help identify potential problems before they become more serious."
      },
      {
        "question": "Why choose Rooter-X for pipe services?",
        "answer": "Rooter-X focuses on identifying plumbing pipe problems and recommending practical repair or replacement solutions. Our goal is to help restore your plumbing system's performance with dependable service."
      }
    ]
  },
  {
    "order": 9,
    "title": "Water heaters installation",
    "slug": "water-heater-installation",
    "icon": "Flame",
    "shortDescription": "Expert water heater installation services to provide your home with reliable, energy-efficient hot water solutions.",
    "h1": "Professional Water Heater Installation Services",
    "overviewH2": "Reliable Water Heater Installation and Replacement Solutions",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X provides professional water heater installation services to help homeowners enjoy reliable and consistent hot water throughout their homes. Whether you're installing a new water heater or replacing an outdated unit, choosing the right system is important for comfort, efficiency, and long-term performance. Our water heater installation solutions are designed to meet your household's hot water needs while helping ensure your new system operates safely and reliably.",
      "An aging or malfunctioning water heater can lead to inconsistent hot water, rising energy costs, leaks, and unexpected breakdowns. Rooter-X helps homeowners find practical water heater installation and replacement solutions based on their property's needs. From selecting the appropriate water heater to professional installation, our goal is to provide dependable hot water solutions that support your home's comfort and everyday needs."
    ],
    "expanderParagraphs": [
      "Installing an expansion tank protects your household plumbing valves and fixtures from thermal pressure spikes caused by closed-loop water systems.",
      "We offer same-day emergency water heater replacement across all Orange County communities."
    ],
    "signsHeading": "Signs your water heater needs replacement",
    "signsIntro": "Recognizing early warning signs of tank failure prevents catastrophic basement or garage flooding.",
    "signs": [
      {
        "label": "Water leaking around the base of the tank",
        "description": "Internal glass lining fractures allowing water to corrode through outer steel tank walls.",
        "relatedServiceSlug": "leak-detection"
      },
      {
        "label": "Water heater age exceeding 8 to 12 years",
        "description": "Standard storage tank units reach end-of-life status after 10 years of hard water thermal stress.",
        "relatedServiceSlug": "tankless-installation"
      },
      {
        "label": "Popping or rumbling sediment noises",
        "description": "Heavy mineral sediment buildup at the bottom of the tank boiling and overheating lower tank metal.",
        "relatedServiceSlug": "drain-cleaning"
      },
      {
        "label": "Rusty or metallic-smelling hot water",
        "description": "Anode rod depletion allowing interior tank corrosion to rust internal steel components.",
        "relatedServiceSlug": "repipe"
      },
      {
        "label": "Inadequate hot water volume",
        "description": "Lower heating elements failing or thick sediment layers insulating burner heat transfer.",
        "relatedServiceSlug": "camera-inspection"
      }
    ],
    "benefitsHeading": "Benefits of professional water heater installation",
    "benefits": [
      {
        "label": "Reliable Hot Water",
        "description": "Enjoy consistent hot water for showers, cleaning, cooking, and everyday household needs."
      },
      {
        "label": "Energy Efficiency",
        "description": "Upgrade to a modern water heater that may help reduce energy consumption and utility costs."
      },
      {
        "label": "Professional Installation",
        "description": "Proper installation helps your water heater operate safely and efficiently."
      },
      {
        "label": "Improved Performance",
        "description": "Replace an aging or outdated unit with a new system designed for dependable hot water."
      },
      {
        "label": "Long-Term Reliability",
        "description": "A properly selected and installed water heater can provide years of reliable service with appropriate maintenance."
      },
      {
        "label": "Solutions for Your Home",
        "description": "Find a water heater that matches your household size, hot water demand, and budget."
      }
    ],
    "ctaHeadline": "Get fast water heater installation today",
    "image": "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ],
    "faqs": [
      {
        "question": "How do I know when I need a new water heater?",
        "answer": "Common signs include inconsistent hot water, unusual noises, leaking around the tank, rusty water, and frequent repairs. An older water heater may also become less efficient over time."
      },
      {
        "question": "How long does water heater installation take?",
        "answer": "Installation time depends on the type of water heater, existing plumbing, electrical or gas connections, and any modifications required. A straightforward replacement may take several hours."
      },
      {
        "question": "What types of water heaters can be installed?",
        "answer": "Common options include traditional tank water heaters, tankless water heaters, gas water heaters, and electric water heaters. The right choice depends on your home's setup and hot water needs."
      },
      {
        "question": "Is a tankless water heater better than a traditional water heater?",
        "answer": "Tankless water heaters heat water on demand and can provide continuous hot water within their capacity. Traditional tank systems store heated water for household use. Each option has different installation costs and energy considerations."
      },
      {
        "question": "How much does water heater installation cost?",
        "answer": "The cost depends on the type and size of the unit, installation requirements, plumbing modifications, and labor. A professional estimate can help determine the total cost."
      },
      {
        "question": "How long does a water heater last?",
        "answer": "Minor issues may be repairable, but an older unit with recurring problems, leaks, or significant corrosion may be better replaced. A professional inspection can help determine the best option."
      },
      {
        "question": "Why choose Rooter-X for water heater installation?",
        "answer": "Rooter-X focuses on providing dependable water heater installation and replacement solutions. We help homeowners find systems that match their household's hot water needs and provide reliable everyday performance."
      }
    ]
  },
  {
    "order": 10,
    "title": "Tankless Water Heater Installation.",
    "slug": "tankless-installation",
    "icon": "Zap",
    "shortDescription": "Professional tankless water heater installation and replacement for energy-efficient, on-demand hot water in your home.",
    "h1": "Tankless Water Heater Installation Services",
    "overviewH2": "Professional Tankless Water Heater Installation and Replacement",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X provides professional tankless water heater installation services for homeowners looking to enjoy reliable, on-demand hot water. Unlike traditional water heaters that store hot water in a tank, tankless water heaters heat water as it flows through the system. This modern technology can provide greater energy efficiency, save space, and deliver a continuous supply of hot water within the system's capacity. Our tankless water heater installation solutions are designed to meet your household's hot water needs.",
      "If you're considering upgrading from a traditional water heater, a tankless water heater may be an excellent option for your home. Rooter-X helps homeowners explore tankless water heater replacement and installation solutions based on their plumbing system, household size, and hot water demands. From choosing the right unit to professional installation, our goal is to provide dependable hot water performance, improved energy efficiency, and long-term comfort."
    ],
    "expanderParagraphs": [],
    "signsHeading": "Why homeowners upgrade to tankless hot water",
    "signsIntro": "Switching to tankless eliminates hot water shortages while significantly lowering monthly utility costs.",
    "signs": [
      {
        "label": "Running out of hot water during back-to-back showers",
        "description": "Tankless systems heat water continuously on-demand, never running out of hot water.",
        "relatedServiceSlug": "water-heater-installation"
      },
      {
        "label": "Desire to reduce monthly gas or electric utility bills",
        "description": "Heats water only when faucets open, saving up to 40% on water heating costs.",
        "relatedServiceSlug": "repipe"
      },
      {
        "label": "Need to free up floor space in garages or closets",
        "description": "Compact wall-mounted units replace bulky 50-gallon floor tanks.",
        "relatedServiceSlug": "leak-detection"
      },
      {
        "label": "Long delays waiting for hot water at far sinks",
        "description": "Models with integrated recirculation pumps deliver instant hot water at fixtures.",
        "relatedServiceSlug": "drain-cleaning"
      },
      {
        "label": "Replacing an old tank water heater over 10 years old",
        "description": "Upgrade to 20+ year lifespan tankless technology rather than installing another short-lived tank.",
        "relatedServiceSlug": "camera-inspection"
      }
    ],
    "benefitsHeading": "Why Choose Us Cards for Rooter-X's Tankless Water Heater Installation service.",
    "benefits": [
      {
        "label": "On-Demand Hot Water",
        "description": "Enjoy hot water whenever you need it without waiting for a storage tank to refill."
      },
      {
        "label": "Energy Efficiency",
        "description": "Tankless water heaters heat water as needed, which can help reduce energy waste compared to conventional storage tank systems."
      },
      {
        "label": "Space-Saving Design",
        "description": "Enjoy a compact water heating system that takes up less space than traditional tank water heaters."
      },
      {
        "label": "Long-Term Performance",
        "description": "With proper installation and maintenance, tankless water heaters can provide years of dependable service."
      },
      {
        "label": "Reduced Standby Energy Loss",
        "description": "Heat water on demand instead of continuously keeping a large tank of water hot."
      },
      {
        "label": "Professional Installation",
        "description": "Rooter-X helps you choose and install a tankless water heater that matches your household's hot water demands."
      }
    ],
    "ctaHeadline": "Upgrade to endless hot water today",
    "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    "galleryImages": [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    ],
    "faqs": [
      {
        "question": "What is a tankless water heater?",
        "answer": "A tankless water heater is a system that heats water on demand instead of storing hot water in a traditional tank. It provides hot water as it flows through the unit."
      },
      {
        "question": "What are the benefits of installing a tankless water heater?",
        "answer": "Tankless water heaters offer several benefits, including energy efficiency, a compact design, reduced standby energy loss, and hot water on demand within the unit's capacity."
      },
      {
        "question": "How long does a tankless water heater last?",
        "answer": "With proper installation and regular maintenance, many tankless water heaters can last approximately 15–20 years, depending on the model, water quality, and usage."
      },
      {
        "question": "Is a tankless water heater more energy-efficient than a traditional water heater?",
        "answer": "Tankless water heaters can be more energy-efficient because they heat water only when needed rather than continuously maintaining a tank of hot water."
      },
      {
        "question": "Can a tankless water heater provide enough hot water for my entire home?",
        "answer": "Yes, when properly sized. The correct system depends on your household's simultaneous hot water demand, incoming water temperature, and required flow rate."
      },
      {
        "question": "How much does tankless water heater installation cost?",
        "answer": "The cost depends on the unit, installation requirements, gas or electrical capacity, venting, plumbing modifications, and labor. A professional estimate can help determine the total cost."
      }
    ]
  },
  {
    "order": 11,
    "title": "Leak detection",
    "slug": "leak-detection",
    "icon": "Locate",
    "shortDescription": "Non-invasive acoustic, thermal imaging, and electronic slab leak location for pressurized supply and waste lines.",
    "h1": "Leak Detection in Orange County, CA",
    "overviewH2": "Non-Invasive Acoustic & Thermal Electronic Subsurface Leak Location",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Hidden water leaks behind drywall or beneath concrete slab foundations cause severe structural water damage, wood rot, mold growth, and inflated water bills.",
      "We utilize non-invasive electronic leak detection technology — including ground microphones, acoustic listening discs, infrared thermal imaging cameras, and helium tracer gas detectors.",
      "Instead of tearing open walls or jackhammering concrete randomly, our technicians pinpoint subterranean leak locations within inches before making minimal surgical access cuts.",
      "Whether diagnosing copper pinhole slab leaks, subterranean main supply breaks, or hidden waste stack leaks, we locate the origin quickly to protect your structural property."
    ],
    "expanderParagraphs": [
      "Once located, we offer targeted repairs, overhead pipe bypasses, or complete PEX repiping solutions tailored to your foundation and property.",
      "We provide comprehensive insurance diagnostic reports detailing exact leak coordinates, thermal imagery, and repair recommendations."
    ],
    "signsHeading": "Signs you have a hidden water or slab leak",
    "signsIntro": "Unexplained water bill spikes and warm floor spots are key indicators of pressurized subterranean water leaks.",
    "signs": [
      {
        "label": "Unexplained spikes in monthly water utility bills",
        "description": "A continuous pinhole leak running under a slab can waste thousands of gallons of water per month.",
        "relatedServiceSlug": "repipe"
      },
      {
        "label": "Hot or warm spots on tile or carpet flooring",
        "description": "Hot water copper supply line pinholes heating up concrete slab foundations beneath flooring.",
        "relatedServiceSlug": "water-heater-installation"
      },
      {
        "label": "Sound of running water when all faucets are off",
        "description": "A constant rushing or hissing water sound behind walls indicates a pressurized pipe break.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Water meter dials spinning constantly",
        "description": "If the main water meter flow indicator turns while all household fixtures are shut off, a supply line leak exists.",
        "relatedServiceSlug": "drain-cleaning"
      },
      {
        "label": "Damp spots, mold growth, or peeling wall paint",
        "description": "Subtle moisture seeping through drywall or baseboards from leaking supply or waste lines.",
        "relatedServiceSlug": "sewer-line-spot-repairs"
      }
    ],
    "benefitsHeading": "Benefits of professional electronic leak detection",
    "benefits": [
      {
        "label": "Non-invasive electronic pinpointing",
        "description": "Locates subterranean leaks without destructive wall or concrete slab demolition."
      },
      {
        "label": "Prevents catastrophic water & mold damage",
        "description": "Stops hidden moisture before toxic mold spore colonies infect indoor air quality."
      },
      {
        "label": "Lowers monthly water bills",
        "description": "Eliminates continuous water loss from pressurized underground pinhole leaks."
      },
      {
        "label": "Infrared thermal image verification",
        "description": "Visualizes hot water migration paths and damp subfloor zones instantly."
      },
      {
        "label": "Verifiable insurance claim reports",
        "description": "Provides detailed technical diagnostic documentation for insurance policy claims."
      },
      {
        "label": "Saves thousands in trial excavation",
        "description": "Eliminates random jackhammering of concrete foundation slabs."
      }
    ],
    "ctaHeadline": "Pinpoint hidden leaks before damage spreads",
    "image": "/images/real-photos/leak-detection-technician-operation-310.jpg",
    "galleryImages": [
      "/images/real-photos/leak-detection-technician-operation-310.jpg",
      "/images/real-photos/leak-detection-equipment-kit-310.jpg"
    ],
    "galleryImageClasses": [
      "object-cover object-[center_35%]",
      "object-cover object-[center_60%]"
    ],
    "faqs": [
      {
        "question": "How does electronic leak detection work without digging?",
        "answer": "We use ground sensors and acoustic amplifiers to hear water escaping pressurized pipes under concrete, combined with thermal cameras that map temperature anomalies."
      },
      {
        "question": "What is a slab leak?",
        "answer": "A slab leak is a water leak occurring in copper or galvanized pressure pipes embedded within or beneath a building's concrete slab foundation."
      },
      {
        "question": "How accurate is acoustic leak detection?",
        "answer": "Our specialized acoustic equipment pinpoints subsurface leaks within a 6-inch radius, eliminating exploratory demolition."
      },
      {
        "question": "What should I do if I suspect a slab leak?",
        "answer": "Shut off your main water valve immediately to stop water flow and call Rooter-X Plumbing for 24/7 emergency leak detection."
      },
      {
        "question": "Does homeowners insurance cover slab leak detection and repair?",
        "answer": "Most policies cover leak detection and water damage restoration, though pipe repair specifics depend on individual insurance policies."
      },
      {
        "question": "How do you repair a slab leak once detected?",
        "answer": "We offer direct spot repair under the slab, or an overhead PEX pipe reroute through wall and attic spaces to bypass slab lines completely."
      },
      {
        "question": "Can you detect leaks in irrigation or main water supply lines?",
        "answer": "Yes, we detect leaks in main water service lines between municipal meters and home foundation entries."
      },
      {
        "question": "What is helium tracer gas leak detection?",
        "answer": "For complex micro-leaks, we inject harmless helium gas into pipes and trace escaping gas molecules through concrete slabs using sensitive detector probes."
      },
      {
        "question": "How long does a leak detection service call take?",
        "answer": "Most residential leak detection procedures take 1 to 2 hours to pinpoint the precise location of hidden leaks."
      },
      {
        "question": "How do I book emergency leak detection in Orange County?",
        "answer": "Call Rooter-X Plumbing 24/7 at (310) 363-9881 for immediate technician dispatch."
      }
    ]
  },
  {
    "order": 12,
    "title": "New construction",
    "slug": "new-construction",
    "icon": "Building2",
    "shortDescription": "Underground, rough-in, and finish plumbing contracts tailored for general contractors, commercial builds, and home builders.",
    "h1": "New Construction Plumbing in Orange County, CA",
    "overviewH2": "Underground, Rough-In & Finish Plumbing Subcontracting",
    "badgeRow": [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    "paragraphs": [
      "Rooter-X Plumbing provides complete commercial and residential new construction plumbing contracts for general contractors, custom home builders, and commercial developers.",
      "We execute all three major build phases — underground groundworks, structural frame rough-in plumbing, and high-end fixture finish installations — strictly adhering to engineering blueprints and California Plumbing Code specifications.",
      "Phase 1 Underground Groundworks covers main sewer ties, building drains, water service entries, grease interceptors, and under-slab waste line installations with strict grade verification.",
      "Phase 2 Rough-In includes framing DWV stack routing, gas branch piping, supply manifolds, and fire blocking, while Phase 3 Finish covers trim-out, custom architectural fixtures, commercial flushometer valves, and final gas/water pressure sign-offs."
    ],
    "expanderParagraphs": [
      "We maintain full CSLB licensing (#1008868), comprehensive commercial general liability insurance, worker's compensation, and performance bonding capabilities.",
      "Our project managers provide clear daily submittal updates, meet strict build milestones, and coordinate seamless inspections with city building officials."
    ],
    "signsHeading": "Our three-phase new construction plumbing scope",
    "signsIntro": "We deliver turnkey plumbing contracts engineered for project schedule compliance and architectural precision.",
    "signs": [
      {
        "label": "Phase 1: Underground & Sub-Slab Groundworks",
        "description": "Excavation, sewer main connections, under-slab waste lines, water service entries, and backfill compaction testing.",
        "relatedServiceSlug": "boring"
      },
      {
        "label": "Phase 2: Structural Framing Rough-In",
        "description": "DWV stack routing, PEX/copper supply manifolds, gas line headers, vent stacks, and pressure testing prior to drywall.",
        "relatedServiceSlug": "repipe"
      },
      {
        "label": "Phase 3: Finish Trim-Out & Fixture Installation",
        "description": "Setting toilets, architectural faucets, commercial sinks, tankless water heaters, and final city inspector sign-off.",
        "relatedServiceSlug": "tankless-installation"
      },
      {
        "label": "ADU & Detached Structure Plumbing",
        "description": "Complete utility lateral extensions, pump stations, and dedicated utility metering for Accessory Dwelling Units.",
        "relatedServiceSlug": "camera-inspection"
      },
      {
        "label": "Commercial Tenant Improvements (TI)",
        "description": "Grease traps, floor sinks, commercial restrooms, and gas manifold expansion for retail and restaurant developments.",
        "relatedServiceSlug": "hydro-jetting"
      }
    ],
    "benefitsHeading": "Why general contractors partner with Rooter-X",
    "benefits": [
      {
        "label": "CSLB Licensed #1008868, Bonded & Insured",
        "description": "Meets all commercial insurance requirements and performance bonding thresholds."
      },
      {
        "label": "Strict milestone schedule compliance",
        "description": "Keeps build timelines on track with dedicated site crews and aggressive task execution."
      },
      {
        "label": "Expert blueprint reading & CAD estimation",
        "description": "Accurate plan takeoffs, material submittals, and transparent fixed-bid proposals."
      },
      {
        "label": "Flawless city inspection pass rate",
        "description": "Thorough pre-testing of DWV water stacks and gas headers ensures first-time inspection sign-offs."
      },
      {
        "label": "Dedicated commercial project manager",
        "description": "Single point-of-contact communication for RFI responses, change orders, and job site logs."
      },
      {
        "label": "Comprehensive warranty on workmanship",
        "description": "Stands behind all installed groundworks, rough-in framing, and trim fixtures in writing."
      }
    ],
    "image": "/images/real-photos/newconstruction-framing-joists-310.jpg",
    "galleryImages": [
      "/images/real-photos/newconstruction-framing-joists-310.jpg",
      "/images/real-photos/newconstruction-foundation-pipe-sleeves-310.jpg",
      "/images/real-photos/newconstruction-tech-joist-trench-310.jpg"
    ],
    "galleryImageClasses": [
      "object-cover object-[center_60%]",
      "object-cover object-[center_65%]",
      "object-cover object-[center_30%]"
    ],
    "faqs": [
      {
        "question": "What types of new construction projects do you handle?",
        "answer": "We handle custom residential single-family homes, multi-unit residential builds, ADUs, restaurant tenant improvements, retail spaces, and light commercial construction."
      },
      {
        "question": "Do you handle all three phases: underground, rough-in, and finish?",
        "answer": "Yes, we provide full turnkey plumbing subcontracts covering underground groundworks, framing rough-in, and final fixture trim-out."
      },
      {
        "question": "Is Rooter-X Plumbing licensed, bonded, and insured for commercial jobs?",
        "answer": "Yes, we hold CSLB License #1008868, comprehensive commercial general liability insurance, and worker's compensation."
      },
      {
        "question": "How fast can you submit a bid for architectural plan takeoffs?",
        "answer": "We turn around detailed plan takeoff estimates within 3 to 5 business days of receiving PDF construction blueprints."
      },
      {
        "question": "Do you install commercial grease traps and interceptors?",
        "answer": "Yes, we design and install outdoor gravity grease interceptors and indoor hydromechanical grease traps compliant with Orange County health codes."
      },
      {
        "question": "What pipe materials do you install for new construction?",
        "answer": "We install schedule 40 ABS/PVC DWV systems, Type L copper, Uponor PEX-a expansion systems, cast iron, and HDPE utility piping."
      },
      {
        "question": "How do you handle city building inspections?",
        "answer": "Our project managers schedule and attend all municipal inspections, ensuring DWV stack water tests and gas pressure tests are ready prior to inspector arrival."
      },
      {
        "question": "Can you provide plumbing subcontracts for ADUs (Accessory Dwelling Units)?",
        "answer": "Yes, ADU plumbing is one of our specialties, including sewer lateral tie-ins, sub-metering, and independent water heater installations."
      },
      {
        "question": "Do you provide written warranties for new construction contracts?",
        "answer": "Yes, all new construction plumbing subcontracts include a comprehensive written warranty on labor and installation workmanship."
      },
      {
        "question": "How do general contractors submit plans for bidding?",
        "answer": "Email your construction PDF plans directly to Rooterxplumbing@gmail.com or call (310) 363-9881."
      }
    ]
  }
];
