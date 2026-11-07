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
    order: 1,
    title: "Camera inspection",
    slug: "camera-inspection",
    icon: "Video",
    shortDescription: "High-definition sewer video inspection identifying root intrusion, offsets, cracks, and bellies without digging.",
    h1: "Camera Inspection in Orange County, CA",
    overviewH2: "High-Resolution Optical Sewer Line Diagnostics",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Our self-leveling HD sewer cameras push through lines from 2 to 12 inches in diameter, recording high-definition video of your lateral line all the way to the city main junction.",
      "We locate the precise distance and depth of structural defects including root intrusion, offset clay joints, pipe sagging (bellies), cracked cast iron, and scale buildup.",
      "Instead of guessing where a blockage originates or blindly snaking a line, high-resolution optical video shows the exact interior condition of your sewer system before any trenching or hydro jetting begins.",
      "Every camera inspection includes line tracing with a 512Hz transmitter, pinpointing the surface location of pipe damage within inches to eliminate unnecessary lawn or hardscape excavation."
    ],
    expanderParagraphs: [
      "Home buyers across Orange County rely on our pre-purchase sewer camera inspections to avoid thousands of dollars in hidden pipe repair costs prior to closing escrow.",
      "Following any drain cleaning or trenchless repair, we re-inspect the entire pipe length on camera to provide visual evidence of a fully restored flow channel."
    ],
    signsHeading: "Common signs you need a sewer camera inspection",
    signsIntro: "If your plumbing system exhibits persistent main line symptoms, a video camera inspection provides immediate definitive proof.",
    signs: [
      {
        label: "Repeated main drain backups",
        description: "If your main sewer line backs up into shower drains multiple times a year, camera imaging identifies whether roots or broken pipe sections are causing recurrent clogs.",
        relatedServiceSlug: "drain-cleaning"
      },
      {
        label: "Sewer gas odor indoors or outdoors",
        description: "Cracks or offset joints in underground waste lines allow sewer gases to vent up into crawl spaces, yards, or living areas.",
        relatedServiceSlug: "sewer-line-spot-repairs"
      },
      {
        label: "Soggy patches in the yard",
        description: "Unexplained damp green patches over the sewer lateral path indicate subterranean wastewater leaks beneath turf or soil.",
        relatedServiceSlug: "epoxy-pipe-lining"
      },
      {
        label: "Escrow sewer inspection requirements",
        description: "Orange County buyers and sellers perform pre-purchase camera sweeps to document pipe integrity before title transfer.",
        relatedServiceSlug: "repipe"
      },
      {
        label: "Gurgling toilet fixtures",
        description: "Air trapped behind mainline blockages causes toilet water levels to bubble and gurgle whenever sinks or washing machines drain.",
        relatedServiceSlug: "hydro-jetting"
      }
    ],
    benefitsHeading: "Benefits of HD camera inspection",
    benefits: [
      {
        label: "Pinpoint accuracy",
        description: "Sonde transmitters register precise depth and surface coordinates above subterranean defects."
      },
      {
        label: "Prevents unnecessary excavation",
        description: "Know exactly which 3-foot section requires repair rather than tearing up entire driveways."
      },
      {
        label: "Video proof for insurance & escrows",
        description: "Digital video recordings provide verifiable proof for home purchases and insurance claim documentation."
      },
      {
        label: "Reveals hidden pipe materials",
        description: "Identifies transition joints between vintage cast iron, Orangeburg, clay tile, and modern ABS plastic."
      },
      {
        label: "Verifies hydro jetting results",
        description: "Confirms that grease, heavy scale, and root mats were completely scoured from internal pipe walls."
      },
      {
        label: "Saves thousands in diagnostic labor",
        description: "Eliminates exploratory trenching by diagnosing interior pipe conditions within minutes."
      }
    ],
    ctaHeadline: "Schedule an HD camera inspection today",
    image: "/images/real-photos/camera-setup-lawn.jpg",
    galleryImages: [
      "/images/real-photos/camera-setup-lawn.jpg",
      "/images/real-photos/camera-setup-street.jpg",
      "/images/real-photos/camera-tech-operation.jpg"
    ],
    galleryImageClasses: [
      "object-cover object-center",
      "object-cover object-[center_65%]",
      "object-cover object-[center_60%]"
    ],
    faqs: [
      {
        question: "How deep can your sewer camera inspect?",
        answer: "Our push-rod and crawler camera systems inspect lines up to 200 feet long and penetrate down to 30 feet deep underground."
      },
      {
        question: "Can a camera clear a blocked drain?",
        answer: "No, a camera is a diagnostic tool used to view conditions. Once the blockage location and type are identified, we use hydro jetting or snaking to clear it."
      },
      {
        question: "Will I get a copy of the camera inspection video?",
        answer: "Yes, every customer receives a digital video recording of the inspection along with a detailed written diagnostic report."
      },
      {
        question: "Can a camera see through standing water or sludge?",
        answer: "If a line is completely full of opaque black water, we first clear or jet the line to allow clear visual inspection of pipe walls."
      },
      {
        question: "How long does a sewer camera inspection take?",
        answer: "A standard residential main line camera inspection takes between 45 minutes and 1 font-mono hour from setup to review."
      },
      {
        question: "Does camera inspection work on small 2-inch drain lines?",
        answer: "Yes, we use micro-cameras specifically designed for kitchen sink lines, laundry standpipes, and shower drains."
      },
      {
        question: "Can camera inspection locate underground pipe paths?",
        answer: "Yes, our camera heads emit a 512Hz radio signal that our surface receiver tracks to map the exact underground lateral path."
      },
      {
        question: "Why should home buyers get a sewer camera inspection?",
        answer: "Standard home inspections do not inspect inside underground sewer pipes. A sewer camera sweep reveals hidden tree roots or collapsed pipes before escrow closes."
      },
      {
        question: "What pipe materials can be inspected?",
        answer: "We inspect vitrified clay pipe (VCP), cast iron, ABS plastic, PVC, corrugated pipe, Orangeburg, and copper waste lines."
      },
      {
        question: "How soon can you perform a camera inspection?",
        answer: "We provide same-day service across Orange County, available 24 hours a day, 7 days a week."
      }
    ]
  },
  {
    order: 2,
    title: "Drain cleaning",
    slug: "drain-cleaning",
    icon: "Wrench",
    shortDescription: "Professional mechanical cabling and drain clearing for kitchen sinks, shower traps, toilets, and main cleanouts.",
    h1: "Drain Cleaning in Orange County, CA",
    overviewH2: "Commercial & Residential Drain Clearing Solutions",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Stubborn household clogs resist chemical pour-over treatments and hardware store snakes. Our heavy-duty motorized cabling machines restore normal gravity flow to kitchen sinks, lavatories, floor drains, and main cleanouts.",
      "We select specialized cutting heads — including expanding grease cutters and heavy-wire root blades — to shear away sludge build-up, hair mats, soap scum, and invasive root tendrils without damaging structural pipe walls.",
      "Kitchen drains suffer from accumulated grease, food solids, and starch deposits, while bathroom lines fill with hair and mineral scale. We clear every line down to full internal diameter.",
      "Every main sewer drain clearing service is paired with an optical camera verification to confirm that the entire waste line is obstruction-free from house cleanout to municipal connection."
    ],
    expanderParagraphs: [
      "For commercial kitchens and multi-unit residential buildings, scheduled drain cleaning prevents emergency overflows that disrupt business operations or create health code violations.",
      "We install accessible cleanout fittings on older homes lacking exterior access points, making routine drain maintenance fast and efficient."
    ],
    signsHeading: "Common signs you need drain cleaning service",
    signsIntro: "Sluggish fixtures and standing water are early warnings of accumulating debris inside your branch and waste lines.",
    signs: [
      {
        label: "Water pooling around shower drains",
        description: "Hair mats and soap scum build up inside 2-inch shower traps, restricting drainage velocity.",
        relatedServiceSlug: "hydro-jetting"
      },
      {
        label: "Foul organic odors in kitchen sinks",
        description: "Decomposing food scrap particles adhere to grease deposits inside kitchen waste lines, emitting foul odors.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Multiple fixtures backing up simultaneously",
        description: "When flushing a toilet causes water to rise in nearby tub drains, the obstruction sits inside the main sewer lateral.",
        relatedServiceSlug: "sewer-line-spot-repairs"
      },
      {
        label: "Slow draining kitchen sinks during disposal use",
        description: "Fibrous food waste clings to pipe scale, narrowing internal pipe diameter over time.",
        relatedServiceSlug: "epoxy-pipe-lining"
      },
      {
        label: "Gurgling noises from sink traps",
        description: "Air displaced past trapped sludge pockets creates rhythmic bubbling sounds in waste pipes.",
        relatedServiceSlug: "leak-detection"
      }
    ],
    benefitsHeading: "Benefits of professional drain cleaning",
    benefits: [
      {
        label: "Restores maximum drain velocity",
        description: "Clears internal pipe constrictions so waste water empties instantly without pooling."
      },
      {
        label: "Eliminates foul drain odors",
        description: "Removes rotting organic sludge, hair, and grease coats clinging to pipe interiors."
      },
      {
        label: "Protects pipes from caustic chemicals",
        description: "Mechanical clearing avoids corrosive chemical store products that etch cast iron and weaken PVC joints."
      },
      {
        label: "Prevents emergency sewage overflows",
        description: "Routine maintenance clears partial obstructions before they transform into full main line overflows."
      },
      {
        label: "Identifies early pipe deterioration",
        description: "Enables technicians to inspect pipe walls during cabling and recommend permanent line repairs."
      },
      {
        label: "Protects home subfloors and cabinetry",
        description: "Prevents standing water overflows that rot bathroom vanity bases and subfloor plywood."
      }
    ],
    ctaHeadline: "Get fast drain cleaning service today",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "Are chemical drain openers safe for vintage plumbing?",
        answer: "No, liquid chemical drain cleaners contain harsh acid or lye compounds that corrode vintage cast iron pipes and melt PVC adhesives. Mechanical cabling or hydro jetting is safe for all pipe materials."
      },
      {
        question: "How often should main sewer lines be cleaned?",
        answer: "Homes with mature trees near main sewer laterals should undergo preventative main drain clearing or hydro jetting every 12 to 18 months."
      },
      {
        question: "What is the difference between drain snaking and hydro jetting?",
        answer: "Snaking cuts a hole through solid obstructions using a steel cable, whereas hydro jetting uses 4,000 PSI water streams to wash away all grease, scale, and root debris from internal pipe walls."
      },
      {
        question: "Can tree roots break through sewer pipes?",
        answer: "Yes, tree root tips seek out moisture at pipe joints, penetrating tiny cracks in vitrified clay or cast iron lines and expanding into dense blockage mats inside the pipe."
      },
      {
        question: "What causes kitchen sinks to clog repeatedly?",
        answer: "Fats, oils, grease (FOG), coffee grounds, and starchy vegetables adhere to internal pipe scale, creating sticky build-up that traps incoming food particles."
      },
      {
        question: "Do you clean commercial restaurant grease lines?",
        answer: "Yes, we specialize in commercial grease interceptor line cleaning, floor drain servicing, and kitchen branch line jetting across Orange County."
      },
      {
        question: "Why does my toilet bubble when the washing machine drains?",
        answer: "This indicates a partial blockage in your main sewer stack or lateral line. High volume discharge from laundry machines pushes air past the restriction into toilet traps."
      },
      {
        question: "How long does standard drain clearing take?",
        answer: "Most single-fixture or main cleanout drain clearing jobs take between 30 and 60 minutes to complete."
      },
      {
        question: "What happens if a drain cable cannot pass through?",
        answer: "If a cable encounters a collapsed pipe, severe offset joint, or solid concrete intrusion, we perform a video camera inspection to locate the physical barrier."
      },
      {
        question: "Is emergency 24/7 drain service available?",
        answer: "Yes, Rooter-X operates 24/7 with fully equipped trucks ready for immediate dispatch across all Orange County cities."
      }
    ]
  },
  {
    order: 3,
    title: "Hydro jetting",
    slug: "hydro-jetting",
    icon: "Waves",
    shortDescription: "High-pressure 4,000 PSI water blasting scouring grease, heavy scale, and root infestations back to bare pipe walls.",
    h1: "Hydro Jetting in Orange County, CA",
    overviewH2: "High-Pressure Hydraulic Sewer Wall Restoration",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Hydro jetting utilizes high-pressure water streams operating up to 4,000 PSI at 12 gallons per minute to scour internal sewer line surfaces. While drain cables bore holes through clogs, hydro jetting restores full interior pipe diameter.",
      "Specialized rotating nozzles project rearward high-velocity water jets that propel the hose down sewer lines, shearing off heavy grease coats, mineral scale, hardened sludge, and thick root curtains.",
      "Hydro jetting is essential for commercial food service lines accumulating heavy fats and oils, as well as residential main sewer lines prone to heavy tree root intrusion.",
      "We perform mandatory pre-jetting camera inspections to evaluate pipe structural stability before applying high-pressure water streams, ensuring safe and effective cleaning."
    ],
    expanderParagraphs: [
      "For trenchless pipe relining projects, hydro jetting serves as the vital preparation step, removing all interior debris and scale so epoxy resin bonds cleanly to original pipe walls.",
      "Hydro jetting uses zero harsh chemical additives — only clean water pressure — making it an environmentally safe maintenance procedure."
    ],
    signsHeading: "Signs your sewer system requires hydro jetting",
    signsIntro: "When routine drain cabling fails to prevent recurring main line backups, high-pressure water jetting is required.",
    signs: [
      {
        label: "Frequent recurring main sewer line blockages",
        description: "Lines backing up every few months indicate thick grease coating or heavy root mats that mechanical cables merely punch small holes through.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Heavy grease accumulation in commercial kitchens",
        description: "Restaurant waste lines building up fats, oils, and greases require periodic high-pressure hydraulic jetting.",
        relatedServiceSlug: "drain-cleaning"
      },
      {
        label: "Severe tree root penetration",
        description: "Spinning root-cutting jet nozzles pulverize thick root systems into fine pulp and flush them out to the municipal sewer.",
        relatedServiceSlug: "sewer-line-spot-repairs"
      },
      {
        label: "Preparation for CIPP epoxy pipe lining",
        description: "Internal pipe walls must be scoured down to bare material before installing inverted epoxy resin liners.",
        relatedServiceSlug: "epoxy-pipe-lining"
      },
      {
        label: "Slow drains across an entire property",
        description: "Widespread sluggish drainage indicates heavy scale rust and sediment build-up inside main sewer laterals.",
        relatedServiceSlug: "repipe"
      }
    ],
    benefitsHeading: "Benefits of hydro jetting service",
    benefits: [
      {
        label: "Cleans pipe walls 360 degrees",
        description: "Removes 100% of grease, sludge, and scale rather than cutting a single passage hole."
      },
      {
        label: "Long-lasting blockage prevention",
        description: "Scoured smooth pipe walls prevent fresh debris from catching and forming new clogs."
      },
      {
        label: "Pulverizes stubborn root systems",
        description: "High-pressure water jets cut root masses clean at the pipe joint entry points."
      },
      {
        label: "100% chemical-free operation",
        description: "Uses pure high-velocity water streams without environmental contaminants or harsh acids."
      },
      {
        label: "Essential prep for trenchless lining",
        description: "Ensures flawless epoxy adhesion for sewer lining restoration projects."
      },
      {
        label: "Cost-effective long-term maintenance",
        description: "Extends time between drain maintenance calls compared to mechanical cabling."
      }
    ],
    image: "/images/real-photos/hydrojetting-truck-driveway-310.jpg",
    galleryImages: [
      "/images/real-photos/hydrojetting-truck-driveway-310.jpg",
      "/images/real-photos/hydrojetting-truck-street-310.jpg",
      "/images/real-photos/hydrojetting-cleanout-operation-310.jpg"
    ],
    galleryImageClasses: [
      "object-cover object-[center_60%]",
      "object-cover object-[center_65%]",
      "object-cover object-center"
    ],
    faqs: [
      {
        question: "Can hydro jetting damage older pipes?",
        answer: "Before hydro jetting, we perform a video camera inspection. If pipes are severely broken or structurally collapsed, pressure is adjusted or alternative repair methods are recommended."
      },
      {
        question: "What PSI pressure is used for hydro jetting?",
        answer: "We calibrate pressure from 1,500 PSI up to 4,000 PSI depending on pipe diameter, pipe material, and the severity of grease or root obstruction."
      },
      {
        question: "How long do the results of hydro jetting last?",
        answer: "Because hydro jetting removes all internal pipe residue, lines typically remain clear for 2 to 5 years under normal usage conditions."
      },
      {
        question: "Is hydro jetting effective against commercial grease clogs?",
        answer: "Yes, hydro jetting is the single most effective method for melting and emulsifying heavy grease deposits in commercial kitchen drain lines."
      },
      {
        question: "How long does a hydro jetting service take?",
        answer: "A standard residential main line hydro jetting procedure takes approximately 1.5 to 2 hours including initial and final camera inspections."
      },
      {
        question: "Does hydro jetting clean out sand and gravel?",
        answer: "Yes, rear-facing jet nozzles wash out heavy sand, gravel, construction debris, and sediment from low points in sewer lines."
      },
      {
        question: "Do you inspect the pipe after jetting?",
        answer: "Always. We conduct a post-jetting HD video inspection to confirm that internal pipe walls are clean and intact."
      },
      {
        question: "Can hydro jetting replace trenchless pipe repair?",
        answer: "Hydro jetting cleans pipes; it does not fix structural cracks or physical collapse. However, jetting is a necessary preliminary step before pipe lining."
      },
      {
        question: "What size sewer pipes can be hydro jetted?",
        answer: "We hydro jet drain lines ranging from 2-inch residential branch lines up to 12-inch commercial mainline laterals."
      },
      {
        question: "How do I schedule hydro jetting service in Orange County?",
        answer: "Call Rooter-X Plumbing at (310) 363-9881 for 24/7 immediate scheduling or emergency service."
      }
    ]
  },
  {
    order: 4,
    title: "Sewage pipe burst",
    slug: "sewage-pipe-burst",
    icon: "Activity",
    shortDescription: "Trenchless pipe replacement pulling seamless new HDPE pipe through collapsed old lines without excavating yards.",
    h1: "Sewage Pipe Bursting in Orange County, CA",
    overviewH2: "Trenchless Main Line Structural Pipe Replacement",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Pipe bursting is a trenchless replacement method that installs a continuous High-Density Polyethylene (HDPE) pipe directly through broken or collapsed existing sewer lines.",
      "A hydraulic pulling unit draws a hardened steel conical bursting head through the host pipe, fracturing original clay, cast iron, or Orangeburg lines while expanding the surrounding soil cavity.",
      "Behind the bursting head, a continuous fusion-welded HDPE sewer pipe is pulled into place instantly, matching or expanding original pipe capacity without trenching across lawns, driveways, or hardscapes.",
      "Continuous HDPE pipe eliminates all pipe joints, providing a leak-proof root-proof sewer lateral engineered to last over 50 years."
    ],
    expanderParagraphs: [
      "Pipe bursting requires only two small access pits — one entry pit near the foundation and one insertion pit at the property line connection — preserving expensive landscaping.",
      "Because HDPE is smooth and continuous, flow velocity increases while root penetration risk is eliminated permanently."
    ],
    signsHeading: "When to choose sewage pipe bursting replacement",
    signsIntro: "If your main line has suffered structural collapse or severe root damage, pipe bursting replaces old pipe without open trench excavation.",
    signs: [
      {
        label: "Collapsed or crushed main sewer line",
        description: "When pipe walls fracture and collapse, cabling and jetting can no longer pass through, requiring structural pipe replacement.",
        relatedServiceSlug: "sewer-line-spot-repairs"
      },
      {
        label: "Severe root intrusion at multiple joints",
        description: "Vitrified clay pipes with root intrusion at every 4-foot bell joint require continuous jointless HDPE replacement.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Extensive Orangeburg pipe deterioration",
        description: "Bituminized fiber pipes installed mid-century suffer wall ovalization and collapse, making pipe bursting ideal.",
        relatedServiceSlug: "epoxy-pipe-lining"
      },
      {
        label: "Desire to protect driveways and landscaping",
        description: "Pipe bursting eliminates open trenches across custom stone pavers, concrete driveways, and mature trees.",
        relatedServiceSlug: "boring"
      },
      {
        label: "Need for pipe upsizing",
        description: "Bursting heads can expand original 4-inch lines to install larger 6-inch HDPE pipes for increased capacity.",
        relatedServiceSlug: "repipe"
      }
    ],
    benefitsHeading: "Benefits of trenchless pipe bursting",
    benefits: [
      {
        label: "Zero trenching across hardscapes",
        description: "Preserves custom landscaping, concrete driveways, and outdoor living structures."
      },
      {
        label: "Continuous jointless HDPE pipe",
        description: "Eliminates pipe bell joints where tree root tips enter waste systems."
      },
      {
        label: "50+ year operational lifespan",
        description: "Fused HDPE material is impervious to root intrusion, chemical corrosion, and soil shifts."
      },
      {
        label: "Capacity expansion capability",
        description: "Enables upsizing 4-inch sewer laterals to 6-inch lines during installation."
      },
      {
        label: "Faster completion time",
        description: "Most residential pipe bursting installations are completed in a single working day."
      },
      {
        label: "Saves total restoration costs",
        description: "Avoids costly concrete demo, repaving, and landscape re-planting expenses."
      }
    ],
    image: "/images/real-photos/pipebursting-hdpe-layout-310.jpg",
    galleryImages: [
      "/images/real-photos/pipebursting-hdpe-layout-310.jpg",
      "/images/real-photos/pipebursting-fusion-machine-310.jpg",
      "/images/real-photos/pipebursting-fused-seam-310.jpg"
    ],
    galleryImageClasses: [
      "object-cover object-[center_65%]",
      "object-cover object-center",
      "object-cover object-center"
    ],
    faqs: [
      {
        question: "How does trenchless pipe bursting work?",
        answer: "A hydraulic wire puller pulls a conical expansion head through old damaged pipe, breaking the original pipe outward while pulling a new continuous HDPE pipe into place."
      },
      {
        question: "How many holes need to be dug for pipe bursting?",
        answer: "Pipe bursting requires only two access pits: one launching pit near the house cleanout and one receiving pit near the property line or city tie-in."
      },
      {
        question: "Is HDPE pipe durable for main sewer lines?",
        answer: "Yes, High-Density Polyethylene (HDPE) features seamless heat-fused joints and is rated for a service life exceeding 50 to 100 years."
      },
      {
        question: "Can pipe bursting increase pipe diameter size?",
        answer: "Yes, pipe bursting can upsize sewer lines, such as replacing a 4-inch clay pipe with a 6-inch HDPE main line."
      },
      {
        question: "How long does a pipe bursting project take?",
        answer: "Residential pipe bursting is typically completed in 1 day, minimizing water service downtime for homeowners."
      },
      {
        question: "Will pipe bursting damage surrounding underground utilities?",
        answer: "Before bursting, we locate all gas, electrical, and water utilities using subsurface electronic locators to ensure safe clearance."
      },
      {
        question: "What happens to the old pipe pieces underground?",
        answer: "The old pipe fragments are pressed outward into the surrounding soil mass, forming a protective exterior envelope around the new HDPE pipe."
      },
      {
        question: "Is pipe bursting permitted in Orange County cities?",
        answer: "Yes, trenchless HDPE pipe bursting is fully approved under the California Plumbing Code and local municipal sanitation districts."
      },
      {
        question: "Can pipe bursting replace broken cast iron under driveways?",
        answer: "Yes, pipe bursting is ideal for replacing corroded cast iron under driveways without breaking up concrete slabs."
      },
      {
        question: "How do I get a quote for pipe bursting replacement?",
        answer: "Contact Rooter-X Plumbing at (310) 363-9881 for a camera inspection and upfront trenchless replacement proposal."
      }
    ]
  },
  {
    order: 5,
    title: "Sewer line spot repairs",
    slug: "sewer-line-spot-repairs",
    icon: "Hammer",
    shortDescription: "Targeted point repair solutions fixing isolated pipe breaks, offset joints, or root holes without replacing entire laterals.",
    h1: "Sewer Line Spot Repairs in Orange County, CA",
    overviewH2: "Main Sewer Spot Repair",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "When a section of your main sewer line is damaged, a complete sewer replacement may not always be necessary. Rooter-X Plumbing provides targeted main sewer spot repairs to address localized damage while minimizing unnecessary excavation.",
      "A spot repair involves locating the damaged section of the sewer line, exposing the affected area, removing the damaged portion, and installing new sewer piping."
    ],
    expanderParagraphs: [],
    signsHeading: "Signs your line needs a targeted sewer spot repair",
    signsIntro: "Targeted spot repairs are recommended when diagnostic camera sweeps confirm localized pipe failure.",
    signs: [
      {
        label: "Isolated root intrusion at a single joint",
        description: "Tree roots entering through a single cracked clay bell joint while adjacent pipe sections show no structural damage.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Localized sewer pipe belly or dip",
        description: "A short sag in the pipe grade catching debris can be corrected by excavating and re-grading that specific section.",
        relatedServiceSlug: "hydro-jetting"
      },
      {
        label: "Cracked or sheared pipe joint from soil settling",
        description: "Ground movement or seismic activity causing an isolated shearing failure in clay or cast iron lines.",
        relatedServiceSlug: "sewage-pipe-burst"
      },
      {
        label: "Sinkholes developing in lawns",
        description: "Localized wastewater leaks washing away subterranean soil above a broken pipe section.",
        relatedServiceSlug: "leak-detection"
      },
      {
        label: "External mechanical puncture during utility digging",
        description: "Accidental fence post installation or landscaping augers puncturing a shallow sewer lateral.",
        relatedServiceSlug: "repipe"
      }
    ],
    benefitsHeading: "Benefits of targeted spot repair",
    benefits: [
      {
        label: "Significantly lowers repair costs",
        description: "Fixes damaged sections without incurring full line replacement expenses."
      },
      {
        label: "Minimizes yard excavation size",
        description: "Limits digging to a small 3-by-4 foot pit directly over damaged pipe coordinates."
      },
      {
        label: "Protects sound pipe infrastructure",
        description: "Preserves existing structural pipe sections that remain in good working condition."
      },
      {
        label: "Fast turnaround time",
        description: "Most point repairs are excavated, repaired, inspected, and backfilled within hours."
      },
      {
        label: "Adds exterior cleanout access",
        description: "Installs ground-level cleanout risers for easy future pipe maintenance access."
      },
      {
        label: "Restores localized pipe slope",
        description: "Corrects minor dips and bellies to ensure proper gravity wastewater velocity."
      }
    ],
    ctaHeadline: "Fix localized sewer pipe damage",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "How do you know if a spot repair is sufficient versus full replacement?",
        answer: "We perform a full-length video camera sweep. If 80% of the pipe is structural and only one section is broken, spot repair is recommended. If the entire pipe is crumbling, replacement is advised."
      },
      {
        question: "How do you connect new plastic pipe to old clay or cast iron?",
        answer: "We use stainless steel shielded rubber couplings (Mission or Fernco couplings) rated for direct burial, creating root-proof transitions."
      },
      {
        question: "How long does a sewer spot repair take to complete?",
        answer: "Most targeted spot repairs take between 4 and 6 hours from initial excavation to backfill and compaction."
      },
      {
        question: "Will you install a cleanout during a spot repair?",
        answer: "Yes, we always recommend bringing a two-way cleanout riser to ground level whenever excavating for a spot repair."
      },
      {
        question: "Can spot repairs be done under concrete driveways?",
        answer: "Yes, we can perform core-drilled spot repairs or evaluate trenchless spot lining depending on depth and location."
      },
      {
        question: "How accurate is electronic pipe locating?",
        answer: "Our 512Hz electronic locators locate subsurface pipe position within 2 inches of horizontal accuracy and exact depth."
      },
      {
        question: "Does spot repair stop root intrusion permanently?",
        answer: "The repaired section is sealed permanently with heavy PVC/ABS and shielded bands. Adjacent un-repaired clay joints should be monitored periodically."
      },
      {
        question: "Do spot repairs require city permits in Orange County?",
        answer: "Yes, sewer repairs require plumbing permits and municipal inspector sign-off, which Rooter-X handles directly."
      },
      {
        question: "What causes single pipe joints to shift or break?",
        answer: "Soil settlement, ground moisture changes, tree root expansion pressure, or seismic vibrations cause rigid joints to shear."
      },
      {
        question: "How do I schedule a spot repair evaluation?",
        answer: "Call Rooter-X Plumbing at (310) 363-9881 for camera diagnostic pinpointing and flat-rate repair pricing."
      }
    ]
  },
  {
    order: 6,
    title: "Epoxy pipe liner (CIPP)",
    slug: "epoxy-pipe-lining",
    icon: "ShieldCheck",
    shortDescription: "Cured-in-place trenchless pipe restoration creating a jointless structural epoxy pipe inside your existing damaged sewer.",
    h1: "Epoxy Pipe Lining (CIPP) in Orange County, CA",
    overviewH2: "Trenchless Cured-in-Place Structural Sewer Restoration",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Cured-In-Place Pipe (CIPP) epoxy lining creates a structural brand-new pipe inside your existing damaged sewer line without excavating trenches across your property.",
      "We saturate a flexible felt liner sleeve with high-grade structural epoxy resin, invert it into the sewer line using compressed air, and inflate an internal bladder to press the epoxy firmly against internal host pipe walls.",
      "Once cured via ambient temperature or steam, the epoxy hardens into a smooth, jointless structural pipe wall that seals cracks, bridges missing pipe sections, and blocks tree root entry permanently.",
      "Epoxy pipe lining restores damaged vitrified clay, cast iron, and plastic waste pipes, providing a 50-year structural lifespan with minimal flow diameter reduction."
    ],
    expanderParagraphs: [
      "CIPP lining is ideal for sewer lines running beneath concrete slabs, home foundations, interior tile flooring, mature palm trees, or stone hardscapes.",
      "Prior to lining, we hydro jet internal pipe walls to bare metal or clay, ensuring flawless epoxy bonding."
    ],
    signsHeading: "Signs your line is an ideal candidate for CIPP epoxy lining",
    signsIntro: "When pipes suffer structural deterioration beneath permanent structures, trenchless epoxy lining provides a structural fix without demolition.",
    signs: [
      {
        label: "Pipes located under home foundations or interior slabs",
        description: "Avoid jackhammering concrete subfloors inside homes by relining sewer pipes from an exterior cleanout access.",
        relatedServiceSlug: "leak-detection"
      },
      {
        label: "Corroded cast iron with bottom channel wear",
        description: "Smooth out flaking rust scale and bridge eroded bottom channels in vintage residential cast iron lines.",
        relatedServiceSlug: "hydro-jetting"
      },
      {
        label: "Persistent root growth through clay pipe joints",
        description: "Seals every joint along the entire pipe length in a single continuous resin sleeve.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Sewer lines under pool decks and custom hardscapes",
        description: "Prevents breaking up expensive outdoor pavers, retaining walls, or custom stone hardscapes.",
        relatedServiceSlug: "boring"
      },
      {
        label: "Frequent pinhole leaks or hairline fractures",
        description: "Structural epoxy seals all hairline cracks, pinholes, and deteriorating joint gaskets.",
        relatedServiceSlug: "repipe"
      }
    ],
    benefitsHeading: "Benefits of CIPP epoxy pipe relining",
    benefits: [
      {
        label: "100% trenchless structural restoration",
        description: "No trenching through lawns, driveways, flowerbeds, or interior slab floors."
      },
      {
        label: "50-year structural design life",
        description: "Epoxy resin sleeve resists chemical corrosion, root penetration, and ground stress."
      },
      {
        label: "Jointless continuous inner shell",
        description: "Eliminates all bell-and-spigot seams where root systems penetrate sewer laterals."
      },
      {
        label: "Improves flow hydraulic velocity",
        description: "Ultra-smooth interior epoxy finish reduces friction loss and prevents waste buildup."
      },
      {
        label: "Protects interior home flooring",
        description: "Avoids tearing up indoor hardwood, marble, or tile floors above slab sewer lines."
      },
      {
        label: "Single-day installation process",
        description: "Relining installation and curing are completed in a single day with minimal disruption."
      }
    ],
    ctaHeadline: "Restore pipes with trenchless CIPP epoxy lining",
    image: "/images/real-photos/epoxy-wetout-rollout.jpg",
    galleryImages: [
      "/images/real-photos/epoxy-wetout-rollout.jpg",
      "/images/real-photos/epoxy-robotic-cutter.jpg",
      "/images/real-photos/epoxy-inversion-pit.jpg"
    ],
    galleryImageClasses: [
      "object-cover object-[center_30%]",
      "object-cover object-center",
      "object-cover object-[center_40%]"
    ],
    faqs: [
      {
        question: "What is CIPP epoxy pipe lining?",
        answer: "CIPP (Cured-In-Place Pipe) is a trenchless restoration method where an epoxy-saturated felt tube is inverted into an existing sewer line and cured to form a new structural pipe inside the old one."
      },
      {
        question: "How long does CIPP epoxy lining last?",
        answer: "Structural epoxy liners are engineered to meet ASTM structural standards with an operational lifespan exceeding 50 years."
      },
      {
        question: "Does epoxy lining reduce interior pipe diameter?",
        answer: "The liner thickness is only 3mm to 4mm, which reduces diameter minutely while significantly increasing flow velocity due to its smooth surface."
      },
      {
        question: "Can epoxy lining be installed if a pipe is completely collapsed?",
        answer: "If a pipe has completely collapsed or lost its host pipe shape, pipe bursting or point repair is required first. Lining requires an open path to invert."
      },
      {
        question: "How long does the epoxy curing process take?",
        answer: "Ambient curing takes 3 to 4 hours, while hot-water or steam-assisted curing cures the epoxy in under 2 hours."
      },
      {
        question: "Will tree roots ever penetrate an epoxy lined sewer pipe?",
        answer: "No, CIPP lining creates a continuous, jointless epoxy cylinder that tree roots cannot penetrate."
      },
      {
        question: "Can branch lines be reopened after lining a main pipe?",
        answer: "Yes, we use robotic reinstatement cutters to precisely reopen branch connections from inside the newly lined main pipe."
      },
      {
        question: "Is CIPP lining safe for residential wastewater lines?",
        answer: "Yes, structural epoxy resins are fully cured, non-toxic, and resistant to domestic wastewater chemicals."
      },
      {
        question: "How do you prep a pipe for epoxy lining?",
        answer: "We perform mechanical descaling and hydro jetting to clean original pipe walls down to clean, bare substrate."
      },
      {
        question: "How do I determine if my sewer line can be lined?",
        answer: "Contact Rooter-X Plumbing at (310) 363-9881 for an HD camera inspection sweep to verify lining eligibility."
      }
    ]
  },
  {
    order: 7,
    title: "Boring",
    slug: "boring",
    icon: "Compass",
    shortDescription: "Directional underground horizontal boring installing utilities and sewer pipes under roadways and hardscapes.",
    h1: "Horizontal Directional Boring in Orange County, CA",
    overviewH2: "Subsurface Horizontal Directional Drilling & Utility Trenchless Boring",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Horizontal Directional Boring (HDD) enables the installation of new underground sewer pipes, water mains, and conduits without digging surface trenches across streets, sidewalks, or landscaped grounds.",
      "Using steerable drill heads guided by surface radio transmitters, we bore precise subterranean pathways beneath driveways, commercial parking lots, mature trees, and public right-of-ways.",
      "Once the pilot bore is complete, back-reamers enlarge the pathway and pull seamless HDPE or schedule 80 PVC pipes back through the borehole.",
      "Directional boring is ideal for installing new sewer laterals, commercial water services, or running utility lines beneath established Orange County properties."
    ],
    expanderParagraphs: [
      "Boring eliminates public right-of-way street closure permits, heavy asphalt patching fees, and traffic disruption.",
      "Our directional drilling rigs operate with precision grade tracking to guarantee correct downward slope for gravity waste lines."
    ],
    signsHeading: "When horizontal boring is required for plumbing projects",
    signsIntro: "Horizontal directional boring is the premier solution for utility installations passing beneath high-value surface structures.",
    signs: [
      {
        label: "Sewer line replacement under concrete driveways",
        description: "Bore directly under multi-car concrete driveways without cracking or removing decorative concrete slabs.",
        relatedServiceSlug: "sewage-pipe-burst"
      },
      {
        label: "New water service lines under roadways",
        description: "Pass main water lines under municipal streets without costly asphalt cut permits or lane closures.",
        relatedServiceSlug: "water-heater-installation"
      },
      {
        label: "Connecting new structures to street sewer mains",
        description: "Bore long-distance lateral runs from ADUs or detached commercial buildings to property line cleanouts.",
        relatedServiceSlug: "new-construction"
      },
      {
        label: "Crossing beneath mature trees and root zones",
        description: "Protect historic tree root systems by drilling deep beneath root horizons.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Commercial utility conduit installation",
        description: "Run dual sewer, water, or electrical conduit lines under active business parking lots.",
        relatedServiceSlug: "epoxy-pipe-lining"
      }
    ],
    benefitsHeading: "Benefits of horizontal directional boring",
    benefits: [
      {
        label: "Zero surface hardscape destruction",
        description: "Leaves driveways, sidewalks, manicured lawns, and street asphalt undisturbed."
      },
      {
        label: "Sub-inch steering precision",
        description: "Transmitter sonde telemetry guides drill head pitch and depth to maintain precise pipe slope."
      },
      {
        label: "Avoids costly repaving and street restoration",
        description: "Eliminates expensive city asphalt grinding, trench backfill compaction, and repaving fees."
      },
      {
        label: "Reduces project timeline",
        description: "Drilling and pipe pulling are completed rapidly compared to long open-trench digging."
      },
      {
        label: "Protects underground root ecosystems",
        description: "Bores beneath tree root zones without severing major structural tree roots."
      },
      {
        label: "Ideal for long-distance utility runs",
        description: "Bores continuous distances up to 300+ feet in a single automated drilling pull."
      }
    ],
    ctaHeadline: "Schedule directional boring service",
    image: "/images/real-photos/boring-pipe-pull.jpg",
    galleryImages: [
      "/images/real-photos/boring-pipe-pull.jpg",
      "/images/real-photos/boring-entry-pit.jpg",
      "/images/real-photos/boring-pipe-tie-in.jpg"
    ],
    faqs: [
      {
        question: "What is horizontal directional boring (HDD)?",
        answer: "Horizontal directional boring is a trenchless drilling method that uses a steerable surface rig to bore an underground path and pull continuous pipe through without disturbing the ground above."
      },
      {
        question: "How do you steer an underground drill head?",
        answer: "The drill head contains a radio transmitter (sonde) that sends depth, pitch, and rotational alignment data to a surface locator operator tracking the drill bit path."
      },
      {
        question: "Can directional boring maintain proper pitch for gravity sewer lines?",
        answer: "Yes, using high-precision pitch sensors, we maintain strict 1/4-inch per foot downward slope required for gravity sewer lines."
      },
      {
        question: "What ground conditions can be bored through?",
        answer: "We bore through clay, sand, dirt, compacted soil, and soft shale using specialized bentonite drilling fluid to stabilize bore paths."
      },
      {
        question: "What size pipes can be installed with directional boring?",
        answer: "We bore pathways for 2-inch to 8-inch pipes, pulling HDPE, PVC, copper, and flexible conduit lines."
      },
      {
        question: "Does boring require permits in Orange County cities?",
        answer: "Yes, underground utility boring requires municipal permits and Underground Service Alert (USA 811) utility clearance before drilling."
      },
      {
        question: "How deep does directional boring go?",
        answer: "Boring depth typically ranges from 3 feet to 12 feet deep, depending on utility clearance requirements and existing pipe connections."
      },
      {
        question: "How far can a single directional bore reach?",
        answer: "Residential and commercial boring rigs easily complete continuous bores from 30 feet up to 300 feet in length."
      },
      {
        question: "Is directional boring more expensive than trenching?",
        answer: "While equipment setup costs are higher, boring saves money overall by eliminating concrete removal, asphalt repaving, and land restoration."
      },
      {
        question: "How do I request a site evaluation for boring?",
        answer: "Call Rooter-X Plumbing at (310) 363-9881 to speak with our directional boring specialists."
      }
    ]
  },
  {
    order: 8,
    title: "Repipe",
    slug: "repipe",
    icon: "RefreshCw",
    shortDescription: "Complete whole-house copper or PEX water supply repiping and DWV sewer re-piping solutions.",
    h1: "Repiping in Orange County, CA",
    overviewH2: "Whole-House Water Supply & DWV Sewer Repiping Specialists",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Aging galvanized iron water lines installed in mid-century Orange County homes suffer internal mineral scaling, pipe wall thinning, pinhole slab leaks, and rusty water flow.",
      "We specialize in complete whole-home repiping using USA-manufactured Type L copper or Uponor PEX-a expansion piping systems, restoring clean water pressure throughout your home.",
      "Our repiping teams carefully plan wall penetrations, install high-flow manifold systems, and replace old shut-off valves, supply stops, and flex lines with top-quality brass fittings.",
      "We also perform complete Drain-Waste-Vent (DWV) repiping, replacing flaking cast iron stack lines with heavy-duty schedule 40 ABS or PVC waste systems."
    ],
    expanderParagraphs: [
      "Every repipe includes full hydrostatic pressure testing, municipal permit inspections, and professional drywall patching.",
      "Switching to PEX-a or Type L copper eliminates future slab leak emergencies and improves water delivery to all shower and sink fixtures."
    ],
    signsHeading: "Signs your home requires complete repiping",
    signsIntro: "Pinhole leaks, discolored water, and dropping pressure indicate widespread corrosion across original supply pipes.",
    signs: [
      {
        label: "Rusty or discolored water from faucets",
        description: "Internal iron oxide rust flaking off aging galvanized pipe walls and contaminating household tap water.",
        relatedServiceSlug: "leak-detection"
      },
      {
        label: "Low water pressure at multiple fixtures",
        description: "Heavy mineral scale deposits restricting internal pipe diameter inside legacy galvanized lines.",
        relatedServiceSlug: "water-heater-installation"
      },
      {
        label: "Multiple pinhole leaks or slab leaks",
        description: "Experiencing more than one slab leak or pinhole leak indicates systemic metal wall fatigue.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Temperature spikes when toilets flush",
        description: "Restricted cold water supply lines causing hot water surges in showers whenever secondary fixtures open.",
        relatedServiceSlug: "tankless-installation"
      },
      {
        label: "Home age exceeding 40 years with original pipes",
        description: "Galvanized steel lines typically reach end-of-life status after 40 to 50 years of service.",
        relatedServiceSlug: "drain-cleaning"
      }
    ],
    benefitsHeading: "Benefits of whole-house repiping",
    benefits: [
      {
        label: "Restores strong consistent water pressure",
        description: "Delivers full volume flow to showers, tubs, sinks, and washing machines simultaneously."
      },
      {
        label: "Clean odor-free drinking water",
        description: "Eliminates internal pipe rust flakes, metallic taste, and yellow tap water discoloration."
      },
      {
        label: "Eliminates risk of catastrophic slab leaks",
        description: "Replaces corroded under-slab pipes with durable, modern PEX or copper supply lines."
      },
      {
        label: "Increases property resale value",
        description: "Documented modern repiping provides buyers confidence and simplifies real estate escrows."
      },
      {
        label: "Lifespan exceeding 50 years",
        description: "Type L copper and Uponor PEX-a systems carry decades-long material warranties."
      },
      {
        label: "Lower home insurance premiums",
        description: "Eliminates high-risk vintage galvanized plumbing that insurers penalize."
      }
    ],
    ctaHeadline: "Upgrade home water pipes with a professional repipe",
    image: "/images/real-photos/repipe-pex-pull.png",
    galleryImages: [
      "/images/real-photos/repipe-pex-pull.png",
      "/images/real-photos/repipe-containment-living.png",
      "/images/real-photos/repipe-containment-garage.png"
    ],
    galleryImageClasses: [
      "object-cover object-[center_75%]",
      "object-cover object-[center_80%]",
      "object-cover object-[center_75%]"
    ],
    faqs: [
      {
        question: "What is better for an Orange County repipe: Copper or PEX?",
        answer: "Both are excellent choices. Type L copper is traditional, rigid, and highly durable. Uponor PEX-a is flexible, freeze-resistant, resists hard water scale, and requires fewer wall penetrations."
      },
      {
        question: "How long does a whole-house repipe take?",
        answer: "A standard single-family home repipe takes 2 to 3 days for pipe installation, plus 1 to 2 days for drywall patching and city permit sign-off."
      },
      {
        question: "Will my water be turned off during the entire repipe?",
        answer: "No, water service is typically shut off only during working day hours (8 AM to 4 PM) and restored at the end of each workday."
      },
      {
        question: "Do you repair the drywall after cutting access holes?",
        answer: "Yes, our repipe service includes complete professional drywall patching, texturing, and preparing surfaces for paint."
      },
      {
        question: "What is a slab leak and why does it require repiping?",
        answer: "A slab leak is a leak in copper or galvanized pipe running beneath concrete slab foundations. Repiping overhead through attic spaces bypasses broken slab lines permanently."
      },
      {
        question: "Do repipes require city permits and inspections?",
        answer: "Yes, all whole-house repiping projects require municipal plumbing permits and city building inspector sign-offs."
      },
      {
        question: "How much does a whole-home repipe increase water pressure?",
        answer: "Repiping restores full original municipal water main pressure by removing interior rust scale constrictions."
      },
      {
        question: "Can you repipe waste and drain lines (DWV) at the same time?",
        answer: "Yes, we frequently perform dual supply and DWV waste line repipes during major remodel projects."
      },
      {
        question: "Are new shut-off valves included with a repipe?",
        answer: "Yes, every repipe includes brand-new quarter-turn ball valves under all sinks, toilets, washing machines, and main water entries."
      },
      {
        question: "How do I request an in-home repipe estimate?",
        answer: "Call Rooter-X Plumbing at (310) 363-9881 for an expert on-site evaluation and detailed proposal."
      }
    ]
  },
  {
    order: 9,
    title: "Water heaters installation",
    slug: "water-heater-installation",
    icon: "Flame",
    shortDescription: "High-efficiency tank water heater replacement, seismic strapping, expansion tanks, and code-compliant installations.",
    h1: "Water Heater Installation in Orange County, CA",
    overviewH2: "Standard & Commercial Tank Water Heater Replacement",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Whether your current tank water heater is leaking from the base, producing rusty hot water, or failing to supply sufficient hot water, Rooter-X installs top-tier natural gas and electric tank water heaters.",
      "We install professional-grade Bradford White and Rheem water heaters equipped with heavy-duty glass-lined tanks, brass drain valves, and advanced low-NOx burner assemblies.",
      "Every replacement installation strictly complies with California Plumbing Code requirements, including double seismic strapping, thermal expansion tanks, copper flex connectors, full-port gas shut-offs, and temperature-pressure relief (TPR) discharge piping.",
      "We dispose of old water heaters responsibly, perform gas leak safety sweeps, and handle local city permit sign-offs."
    ],
    expanderParagraphs: [
      "Installing an expansion tank protects your household plumbing valves and fixtures from thermal pressure spikes caused by closed-loop water systems.",
      "We offer same-day emergency water heater replacement across all Orange County communities."
    ],
    signsHeading: "Signs your water heater needs replacement",
    signsIntro: "Recognizing early warning signs of tank failure prevents catastrophic basement or garage flooding.",
    signs: [
      {
        label: "Water leaking around the base of the tank",
        description: "Internal glass lining fractures allowing water to corrode through outer steel tank walls.",
        relatedServiceSlug: "leak-detection"
      },
      {
        label: "Water heater age exceeding 8 to 12 years",
        description: "Standard storage tank units reach end-of-life status after 10 years of hard water thermal stress.",
        relatedServiceSlug: "tankless-installation"
      },
      {
        label: "Popping or rumbling sediment noises",
        description: "Heavy mineral sediment buildup at the bottom of the tank boiling and overheating lower tank metal.",
        relatedServiceSlug: "drain-cleaning"
      },
      {
        label: "Rusty or metallic-smelling hot water",
        description: "Anode rod depletion allowing interior tank corrosion to rust internal steel components.",
        relatedServiceSlug: "repipe"
      },
      {
        label: "Inadequate hot water volume",
        description: "Lower heating elements failing or thick sediment layers insulating burner heat transfer.",
        relatedServiceSlug: "camera-inspection"
      }
    ],
    benefitsHeading: "Benefits of professional water heater installation",
    benefits: [
      {
        label: "100% California code compliance",
        description: "Includes seismic strapping, expansion tanks, TPR valves, and low-NOx gas venting."
      },
      {
        label: "Lower monthly energy bills",
        description: "High-EF insulation jackets minimize standby heat loss compared to older water heaters."
      },
      {
        label: "Reliable hot water recovery rate",
        description: "Delivers fast hot water recovery for continuous household bathing and laundry demands."
      },
      {
        label: "Full manufacturer warranty coverage",
        description: "Professional installation preserves 6-year to 10-year factory tank and parts warranties."
      },
      {
        label: "Protection from catastrophic tank bursts",
        description: "Replaces dangerous corroded tanks before bottom seam rupture floods home floors."
      },
      {
        label: "Same-day emergency installation",
        description: "Restores hot water service within hours of dispatch anywhere in Orange County."
      }
    ],
    ctaHeadline: "Get fast water heater installation today",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "How long does a standard tank water heater last?",
        answer: "In Orange County, standard tank water heaters last between 8 and 12 years due to regional hard water mineral content."
      },
      {
        question: "What size water heater tank does my home need?",
        answer: "Homes with 1 to 2 occupants require a 40-gallon tank; homes with 3 to 5 occupants require a 50-gallon tank; larger homes require 75-gallon or tankless systems."
      },
      {
        question: "Why is an expansion tank required by California code?",
        answer: "Thermal expansion tanks absorb water volume expansion created when water heats up in a closed plumbing system, preventing excessive pressure on pipe valves."
      },
      {
        question: "What is seismic strapping and why is it mandatory?",
        answer: "California law requires two heavy steel straps anchored to wall studs to prevent water heaters from tipping and breaking gas lines during earthquakes."
      },
      {
        question: "Do you replace electric and natural gas water heaters?",
        answer: "Yes, we install high-efficiency natural gas, propane, and electric storage tank water heaters."
      },
      {
        question: "What causes rumbling noises in a water heater?",
        answer: "Rumbling is caused by mineral sediment accumulation at the bottom of the tank. As water traps beneath sediment and boils, it creates popping rumbling sounds."
      },
      {
        question: "How long does water heater installation take?",
        answer: "A standard tank water heater replacement takes approximately 2 to 4 hours from initial drain-down to final testing."
      },
      {
        question: "Do you haul away the old water heater?",
        answer: "Yes, our installation service includes complete removal, haul-away, and eco-friendly recycling of your old water heater unit."
      },
      {
        question: "What is a TPR valve?",
        answer: "The Temperature and Pressure Relief (TPR) valve is a safety device that automatically opens to release excessive pressure or temperature, preventing tank explosions."
      },
      {
        question: "How do I schedule water heater replacement?",
        answer: "Call Rooter-X Plumbing at (310) 363-9881 for emergency replacement or upfront installation quotes."
      }
    ]
  },
  {
    order: 10,
    title: "Tankless installation",
    slug: "tankless-installation",
    icon: "Zap",
    shortDescription: "Endless on-demand hot water solutions, gas line sizing, condensate drains, and high-efficiency tankless units.",
    h1: "Tankless Water Heater Installation in Orange County, CA",
    overviewH2: "Tankless Water Heater Installation & Replacement",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Enjoy reliable hot water, improved energy efficiency, and a space-saving design with a professionally installed tankless water heater from Rooter-X Plumbing.",
      "Unlike traditional tank-style water heaters that continuously store and heat a limited amount of water, tankless systems heat water on demand. This can provide a continuous supply of hot water while eliminating the need for a large storage tank."
    ],
    expanderParagraphs: [],
    signsHeading: "Why homeowners upgrade to tankless hot water",
    signsIntro: "Switching to tankless eliminates hot water shortages while significantly lowering monthly utility costs.",
    signs: [
      {
        label: "Running out of hot water during back-to-back showers",
        description: "Tankless systems heat water continuously on-demand, never running out of hot water.",
        relatedServiceSlug: "water-heater-installation"
      },
      {
        label: "Desire to reduce monthly gas or electric utility bills",
        description: "Heats water only when faucets open, saving up to 40% on water heating costs.",
        relatedServiceSlug: "repipe"
      },
      {
        label: "Need to free up floor space in garages or closets",
        description: "Compact wall-mounted units replace bulky 50-gallon floor tanks.",
        relatedServiceSlug: "leak-detection"
      },
      {
        label: "Long delays waiting for hot water at far sinks",
        description: "Models with integrated recirculation pumps deliver instant hot water at fixtures.",
        relatedServiceSlug: "drain-cleaning"
      },
      {
        label: "Replacing an old tank water heater over 10 years old",
        description: "Upgrade to 20+ year lifespan tankless technology rather than installing another short-lived tank.",
        relatedServiceSlug: "camera-inspection"
      }
    ],
    benefitsHeading: "Why Choose a Tankless Water Heater?",
    benefits: [
      {
        label: "On-demand hot water",
        description: "Hot water is produced when you need it."
      },
      {
        label: "Energy efficiency",
        description: "The system doesn’t continuously heat a stored tank of water."
      },
      {
        label: "Space-saving design",
        description: "Compact units can free up valuable garage or utility-room space."
      },
      {
        label: "Continuous hot water",
        description: "Properly sized systems can supply hot water for extended periods."
      },
      {
        label: "Long-term solution",
        description: "With proper maintenance, tankless systems can provide years of service."
      },
      {
        label: "Reduced standby heat loss",
        description: "Water isn’t sitting in a tank being reheated throughout the day."
      }
    ],
    ctaHeadline: "Upgrade to endless hot water today",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "How does a tankless water heater work?",
        answer: "When a hot water faucet opens, cold water flows into the unit. Gas burners ignite instantly, heating the water as it passes through heat exchanger coils to deliver continuous hot water."
      },
      {
        question: "Does a tankless water heater require gas line upgrading?",
        answer: "Tankless units require high BTU gas input (up to 199,000 BTU). We evaluate existing gas supply lines and upgrade to 3/4-inch gas lines when necessary."
      },
      {
        question: "How often do tankless water heaters need maintenance?",
        answer: "In hard water areas like Orange County, tankless water heaters should be flushed with white vinegar once every 12 months using installed isolation valves."
      },
      {
        question: "Can a tankless unit handle multiple showers running at once?",
        answer: "Yes, high-output 1 font-mono to 11 GPM tankless units easily supply hot water to 3 to 4 bathroom fixtures simultaneously."
      },
      {
        question: "What is a condensing tankless water heater?",
        answer: "Condensing tankless units utilize a secondary stainless steel heat exchanger to extract extra heat from exhaust gases, achieving up to 96% thermal efficiency."
      },
      {
        question: "Can a tankless water heater be mounted on an outdoor wall?",
        answer: "Yes, outdoor tankless models feature built-in freeze protection heating elements and eliminate indoor venting requirements."
      },
      {
        question: "How long does tankless water heater installation take?",
        answer: "Converting from a tank to a tankless water heater typically takes 4 to 8 hours depending on gas line routing and vent paths."
      },
      {
        question: "Do tankless water heaters qualify for Southern California Gas rebates?",
        answer: "Yes, ENERGY STAR certified condensing tankless models qualify for generous local gas utility rebates."
      },
      {
        question: "What is an isolation valve flush kit?",
        answer: "Isolation valves allow technicians to isolate the tankless unit and circulate descaling fluid through the heat exchanger without disconnecting household plumbing."
      },
      {
        question: "How do I get an estimate for tankless installation?",
        answer: "Call Rooter-X Plumbing at (310) 363-9881 for an expert on-site sizing evaluation and upfront quote."
      }
    ]
  },
  {
    order: 11,
    title: "Leak detection",
    slug: "leak-detection",
    icon: "Locate",
    shortDescription: "Non-invasive acoustic, thermal imaging, and electronic slab leak location for pressurized supply and waste lines.",
    h1: "Leak Detection in Orange County, CA",
    overviewH2: "Non-Invasive Acoustic & Thermal Electronic Subsurface Leak Location",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Hidden water leaks behind drywall or beneath concrete slab foundations cause severe structural water damage, wood rot, mold growth, and inflated water bills.",
      "We utilize non-invasive electronic leak detection technology — including ground microphones, acoustic listening discs, infrared thermal imaging cameras, and helium tracer gas detectors.",
      "Instead of tearing open walls or jackhammering concrete randomly, our technicians pinpoint subterranean leak locations within inches before making minimal surgical access cuts.",
      "Whether diagnosing copper pinhole slab leaks, subterranean main supply breaks, or hidden waste stack leaks, we locate the origin quickly to protect your structural property."
    ],
    expanderParagraphs: [
      "Once located, we offer targeted repairs, overhead pipe bypasses, or complete PEX repiping solutions tailored to your foundation and property.",
      "We provide comprehensive insurance diagnostic reports detailing exact leak coordinates, thermal imagery, and repair recommendations."
    ],
    signsHeading: "Signs you have a hidden water or slab leak",
    signsIntro: "Unexplained water bill spikes and warm floor spots are key indicators of pressurized subterranean water leaks.",
    signs: [
      {
        label: "Unexplained spikes in monthly water utility bills",
        description: "A continuous pinhole leak running under a slab can waste thousands of gallons of water per month.",
        relatedServiceSlug: "repipe"
      },
      {
        label: "Hot or warm spots on tile or carpet flooring",
        description: "Hot water copper supply line pinholes heating up concrete slab foundations beneath flooring.",
        relatedServiceSlug: "water-heater-installation"
      },
      {
        label: "Sound of running water when all faucets are off",
        description: "A constant rushing or hissing water sound behind walls indicates a pressurized pipe break.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Water meter dials spinning constantly",
        description: "If the main water meter flow indicator turns while all household fixtures are shut off, a supply line leak exists.",
        relatedServiceSlug: "drain-cleaning"
      },
      {
        label: "Damp spots, mold growth, or peeling wall paint",
        description: "Subtle moisture seeping through drywall or baseboards from leaking supply or waste lines.",
        relatedServiceSlug: "sewer-line-spot-repairs"
      }
    ],
    benefitsHeading: "Benefits of professional electronic leak detection",
    benefits: [
      {
        label: "Non-invasive electronic pinpointing",
        description: "Locates subterranean leaks without destructive wall or concrete slab demolition."
      },
      {
        label: "Prevents catastrophic water & mold damage",
        description: "Stops hidden moisture before toxic mold spore colonies infect indoor air quality."
      },
      {
        label: "Lowers monthly water bills",
        description: "Eliminates continuous water loss from pressurized underground pinhole leaks."
      },
      {
        label: "Infrared thermal image verification",
        description: "Visualizes hot water migration paths and damp subfloor zones instantly."
      },
      {
        label: "Verifiable insurance claim reports",
        description: "Provides detailed technical diagnostic documentation for insurance policy claims."
      },
      {
        label: "Saves thousands in trial excavation",
        description: "Eliminates random jackhammering of concrete foundation slabs."
      }
    ],
    ctaHeadline: "Pinpoint hidden leaks before damage spreads",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
    ],
    faqs: [
      {
        question: "How does electronic leak detection work without digging?",
        answer: "We use ground sensors and acoustic amplifiers to hear water escaping pressurized pipes under concrete, combined with thermal cameras that map temperature anomalies."
      },
      {
        question: "What is a slab leak?",
        answer: "A slab leak is a water leak occurring in copper or galvanized pressure pipes embedded within or beneath a building's concrete slab foundation."
      },
      {
        question: "How accurate is acoustic leak detection?",
        answer: "Our specialized acoustic equipment pinpoints subsurface leaks within a 6-inch radius, eliminating exploratory demolition."
      },
      {
        question: "What should I do if I suspect a slab leak?",
        answer: "Shut off your main water valve immediately to stop water flow and call Rooter-X Plumbing for 24/7 emergency leak detection."
      },
      {
        question: "Does homeowners insurance cover slab leak detection and repair?",
        answer: "Most policies cover leak detection and water damage restoration, though pipe repair specifics depend on individual insurance policies."
      },
      {
        question: "How do you repair a slab leak once detected?",
        answer: "We offer direct spot repair under the slab, or an overhead PEX pipe reroute through wall and attic spaces to bypass slab lines completely."
      },
      {
        question: "Can you detect leaks in irrigation or main water supply lines?",
        answer: "Yes, we detect leaks in main water service lines between municipal meters and home foundation entries."
      },
      {
        question: "What is helium tracer gas leak detection?",
        answer: "For complex micro-leaks, we inject harmless helium gas into pipes and trace escaping gas molecules through concrete slabs using sensitive detector probes."
      },
      {
        question: "How long does a leak detection service call take?",
        answer: "Most residential leak detection procedures take 1 to 2 hours to pinpoint the precise location of hidden leaks."
      },
      {
        question: "How do I book emergency leak detection in Orange County?",
        answer: "Call Rooter-X Plumbing 24/7 at (310) 363-9881 for immediate technician dispatch."
      }
    ]
  },
  {
    order: 12,
    title: "New construction",
    slug: "new-construction",
    icon: "Building2",
    shortDescription: "Underground, rough-in, and finish plumbing contracts tailored for general contractors, commercial builds, and home builders.",
    h1: "New Construction Plumbing in Orange County, CA",
    overviewH2: "Underground, Rough-In & Finish Plumbing Subcontracting",
    badgeRow: [
      "Accurate diagnosis",
      "Preventative maintenance",
      "Advanced technology",
      "Certified technicians",
      "24/7 emergency service"
    ],
    paragraphs: [
      "Rooter-X Plumbing provides complete commercial and residential new construction plumbing contracts for general contractors, custom home builders, and commercial developers.",
      "We execute all three major build phases — underground groundworks, structural frame rough-in plumbing, and high-end fixture finish installations — strictly adhering to engineering blueprints and California Plumbing Code specifications.",
      "Phase 1 Underground Groundworks covers main sewer ties, building drains, water service entries, grease interceptors, and under-slab waste line installations with strict grade verification.",
      "Phase 2 Rough-In includes framing DWV stack routing, gas branch piping, supply manifolds, and fire blocking, while Phase 3 Finish covers trim-out, custom architectural fixtures, commercial flushometer valves, and final gas/water pressure sign-offs."
    ],
    expanderParagraphs: [
      "We maintain full CSLB licensing (#1008868), comprehensive commercial general liability insurance, worker's compensation, and performance bonding capabilities.",
      "Our project managers provide clear daily submittal updates, meet strict build milestones, and coordinate seamless inspections with city building officials."
    ],
    signsHeading: "Our three-phase new construction plumbing scope",
    signsIntro: "We deliver turnkey plumbing contracts engineered for project schedule compliance and architectural precision.",
    signs: [
      {
        label: "Phase 1: Underground & Sub-Slab Groundworks",
        description: "Excavation, sewer main connections, under-slab waste lines, water service entries, and backfill compaction testing.",
        relatedServiceSlug: "boring"
      },
      {
        label: "Phase 2: Structural Framing Rough-In",
        description: "DWV stack routing, PEX/copper supply manifolds, gas line headers, vent stacks, and pressure testing prior to drywall.",
        relatedServiceSlug: "repipe"
      },
      {
        label: "Phase 3: Finish Trim-Out & Fixture Installation",
        description: "Setting toilets, architectural faucets, commercial sinks, tankless water heaters, and final city inspector sign-off.",
        relatedServiceSlug: "tankless-installation"
      },
      {
        label: "ADU & Detached Structure Plumbing",
        description: "Complete utility lateral extensions, pump stations, and dedicated utility metering for Accessory Dwelling Units.",
        relatedServiceSlug: "camera-inspection"
      },
      {
        label: "Commercial Tenant Improvements (TI)",
        description: "Grease traps, floor sinks, commercial restrooms, and gas manifold expansion for retail and restaurant developments.",
        relatedServiceSlug: "hydro-jetting"
      }
    ],
    benefitsHeading: "Why general contractors partner with Rooter-X",
    benefits: [
      {
        label: "CSLB Licensed #1008868, Bonded & Insured",
        description: "Meets all commercial insurance requirements and performance bonding thresholds."
      },
      {
        label: "Strict milestone schedule compliance",
        description: "Keeps build timelines on track with dedicated site crews and aggressive task execution."
      },
      {
        label: "Expert blueprint reading & CAD estimation",
        description: "Accurate plan takeoffs, material submittals, and transparent fixed-bid proposals."
      },
      {
        label: "Flawless city inspection pass rate",
        description: "Thorough pre-testing of DWV water stacks and gas headers ensures first-time inspection sign-offs."
      },
      {
        label: "Dedicated commercial project manager",
        description: "Single point-of-contact communication for RFI responses, change orders, and job site logs."
      },
      {
        label: "Comprehensive warranty on workmanship",
        description: "Stands behind all installed groundworks, rough-in framing, and trim fixtures in writing."
      }
    ],
    image: "/images/real-photos/newconstruction-framing-joists-310.jpg",
    galleryImages: [
      "/images/real-photos/newconstruction-framing-joists-310.jpg",
      "/images/real-photos/newconstruction-foundation-pipe-sleeves-310.jpg",
      "/images/real-photos/newconstruction-tech-joist-trench-310.jpg"
    ],
    galleryImageClasses: [
      "object-cover object-[center_60%]",
      "object-cover object-[center_65%]",
      "object-cover object-[center_30%]"
    ],
    faqs: [
      {
        question: "What types of new construction projects do you handle?",
        answer: "We handle custom residential single-family homes, multi-unit residential builds, ADUs, restaurant tenant improvements, retail spaces, and light commercial construction."
      },
      {
        question: "Do you handle all three phases: underground, rough-in, and finish?",
        answer: "Yes, we provide full turnkey plumbing subcontracts covering underground groundworks, framing rough-in, and final fixture trim-out."
      },
      {
        question: "Is Rooter-X Plumbing licensed, bonded, and insured for commercial jobs?",
        answer: "Yes, we hold CSLB License #1008868, comprehensive commercial general liability insurance, and worker's compensation."
      },
      {
        question: "How fast can you submit a bid for architectural plan takeoffs?",
        answer: "We turn around detailed plan takeoff estimates within 3 to 5 business days of receiving PDF construction blueprints."
      },
      {
        question: "Do you install commercial grease traps and interceptors?",
        answer: "Yes, we design and install outdoor gravity grease interceptors and indoor hydromechanical grease traps compliant with Orange County health codes."
      },
      {
        question: "What pipe materials do you install for new construction?",
        answer: "We install schedule 40 ABS/PVC DWV systems, Type L copper, Uponor PEX-a expansion systems, cast iron, and HDPE utility piping."
      },
      {
        question: "How do you handle city building inspections?",
        answer: "Our project managers schedule and attend all municipal inspections, ensuring DWV stack water tests and gas pressure tests are ready prior to inspector arrival."
      },
      {
        question: "Can you provide plumbing subcontracts for ADUs (Accessory Dwelling Units)?",
        answer: "Yes, ADU plumbing is one of our specialties, including sewer lateral tie-ins, sub-metering, and independent water heater installations."
      },
      {
        question: "Do you provide written warranties for new construction contracts?",
        answer: "Yes, all new construction plumbing subcontracts include a comprehensive written warranty on labor and installation workmanship."
      },
      {
        question: "How do general contractors submit plans for bidding?",
        answer: "Email your construction PDF plans directly to Rooterxplumbing@gmail.com or call (310) 363-9881."
      }
    ]
  }
];
