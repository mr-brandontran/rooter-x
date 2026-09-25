export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityData {
  name: string;
  slug: string;
  isTop10: boolean;
  housingEra: string;
  commonPipeMaterials: string;
  neighborhoods: string[];
  localSewerIssues: string;
  introParagraphs: string[];
  faqs: CityFAQ[];
  nearbyCitySlugs: string[];
}

export const CITIES: CityData[] = [
  {
    name: "Laguna Beach",
    slug: "laguna-beach",
    isTop10: true,
    housingEra: "1920s–1970s coastal cottages, custom hillside estates, and mid-century modern residences.",
    commonPipeMaterials: "Vitrified clay pipe (VCP), vintage cast iron, galvanized steel supply lines, and copper.",
    neighborhoods: ["Emerald Bay", "Three Arch Bay", "Top of the World", "Arch Beach Heights", "Victoria Beach", "Laguna Canyon"],
    localSewerIssues: "Hillside slope movement causing offset clay sewer joints, severe coastal root intrusion from eucalyptus and ficus trees, and steep terrain sewer lateral pressure.",
    introParagraphs: [
      "Laguna Beach presents unique sewer and drain infrastructure challenges due to its steep coastal terrain, historic 1920s-1970s architecture, and mature hillside root systems.",
      "Many coastal properties feature vitrified clay sewer laterals running along steep canyon slopes, where soil movement shifts pipe joints and permits dense tree root penetration.",
      "Rooter-X Plumbing provides specialized trenchless pipe lining, HD camera locator sweeps, and emergency drain cleaning custom-tailored for Laguna Beach homeowners and hillside estates."
    ],
    faqs: [
      {
        question: "Why are clay sewer pipes so common in Laguna Beach?",
        answer: "Most homes built between 1930 and 1970 utilized vitrified clay pipe (VCP), which is highly durable against saltwater corrosion but vulnerable to root intrusion at bell joints."
      },
      {
        question: "Can you repair sewer lines on steep Laguna Canyon hillsides?",
        answer: "Yes, our trenchless CIPP lining and pipe bursting technology restores hillside sewer lines without excavating steep terrain or retaining walls."
      },
      {
        question: "How fast can a plumber respond to emergency sewer backups in Laguna Beach?",
        answer: "We maintain 24/7 emergency dispatch with average arrival times under 45 minutes across all Laguna Beach neighborhoods."
      },
      {
        question: "Does coastal salt air damage outdoor water heaters?",
        answer: "Yes, salt air accelerates exterior cabinet corrosion. We install high-durability outdoor tankless and indoor water heaters engineered for coastal environments."
      },
      {
        question: "Do I need a city permit for sewer repairs in Laguna Beach?",
        answer: "Yes, the City of Laguna Beach requires permits and municipal sign-offs for lateral sewer repairs, which Rooter-X handles directly."
      }
    ],
    nearbyCitySlugs: ["dana-point", "newport-beach", "aliso-viejo", "laguna-niguel"]
  },
  {
    name: "Huntington Beach",
    slug: "huntington-beach",
    isTop10: true,
    housingEra: "1960s–1980s suburban tract housing, oceanfront estates, and harbour island residences.",
    commonPipeMaterials: "Cast iron waste stacks, ABS plastic laterals, galvanized steel supply lines, and Type L copper.",
    neighborhoods: ["Huntington Harbour", "Downtown HB / Main Street", "Seacliff", "Adams", "Bolsa Chica", "Yorktown"],
    localSewerIssues: "High groundwater tables near Huntington Harbour, saltwater pipe joint degradation, and heavy sand accumulation in sewer laterals.",
    introParagraphs: [
      "In Huntington Beach, coastal groundwater tables and sandy soils create distinct plumbing conditions for residential tract homes and harbour front properties.",
      "Homes built in the 1960s and 1970s across Seacliff and Huntington Harbour frequently experience cast iron pipe bottoming corrosion and sand ingress through cracked cleanout fittings.",
      "Rooter-X Plumbing delivers high-pressure hydro jetting to flush sand and heavy scale, non-invasive slab leak detection, and 24/7 drain clearing services throughout Surf City."
    ],
    faqs: [
      {
        question: "Why does sand accumulate in Huntington Beach sewer drains?",
        answer: "Coastal sandy soils penetrate cracked sewer joints or unsealed yard cleanouts, settling in low points and slowing waste flow velocity."
      },
      {
        question: "How do high groundwater tables affect slab leak repairs?",
        answer: "High water tables require non-invasive electronic acoustic detection and overhead PEX rerouting to bypass under-slab leaks permanently."
      },
      {
        question: "Do you service commercial properties along Main Street in HB?",
        answer: "Yes, we provide 24/7 commercial hydro jetting, floor drain clearing, and grease trap line servicing for downtown Huntington Beach businesses."
      },
      {
        question: "What causes cast iron sewer pipes to fail in 1960s HB homes?",
        answer: "Cast iron corrodes internally over 50 years, forming rusty scale ridges that catch toilet paper and eventually erode bottom pipe channels."
      },
      {
        question: "Are tankless water heaters suitable for Huntington Beach homes?",
        answer: "Extremely suitable. Compact wall-mounted tankless units free up garage space and resist coastal corrosion better than outdoor tanks."
      }
    ],
    nearbyCitySlugs: ["seal-beach", "fountain-valley", "costa-mesa", "newport-beach"]
  },
  {
    name: "Garden Grove",
    slug: "garden-grove",
    isTop10: true,
    housingEra: "1950s–1970s post-war suburban tract developments and ranch-style residences.",
    commonPipeMaterials: "Orangeburg bituminized fiber pipe, vitrified clay, cast iron, and galvanized water supply lines.",
    neighborhoods: ["Little Saigon", "West Garden Grove", "Eastgate", "Garden Park", "Downtown Garden Grove"],
    localSewerIssues: "Collapsing mid-century Orangeburg fiber sewer pipes, extreme hard water scaling, and dense ficus root intrusion.",
    introParagraphs: [
      "Garden Grove features extensive 1950s post-war housing stock, where original plumbing systems are reaching end-of-life thresholds simultaneously.",
      "Many West Garden Grove homes were constructed with Orangeburg sewer pipes — bituminized tar paper tubes that deform, ovalize, and collapse under ground pressure after 50 years.",
      "Rooter-X Plumbing provides trenchless pipe bursting replacement, HD camera diagnostic sweeps, and complete PEX repiping tailored for Garden Grove homeowners."
    ],
    faqs: [
      {
        question: "What is Orangeburg pipe and why is it failing in Garden Grove?",
        answer: "Orangeburg is bituminized wood fiber pipe installed in the 1950s. Over 50 years, ground moisture causes it to flatten, ovalize, and collapse, requiring replacement."
      },
      {
        question: "How does Garden Grove hard water affect water heaters?",
        answer: "High mineral content creates heavy calcium scale at the bottom of water heater tanks, reducing efficiency and causing rumbling noises."
      },
      {
        question: "Can you replace Orangeburg pipe without tearing up my lawn?",
        answer: "Yes, our trenchless pipe bursting method pulls seamless HDPE pipe through old Orangeburg lines with only two small access pits."
      },
      {
        question: "How long does a main sewer drain clearing take in Garden Grove?",
        answer: "Standard main line cable clearing takes under one hour, followed by a video camera inspection."
      },
      {
        question: "Do you offer emergency 24/7 service in Garden Grove?",
        answer: "Yes, Rooter-X operates 24 hours a day with local technicians ready for immediate dispatch."
      }
    ],
    nearbyCitySlugs: ["anaheim", "westminster", "fountain-valley", "orange"]
  },
  {
    name: "Newport Beach",
    slug: "newport-beach",
    isTop10: true,
    housingEra: "1930s coastal cottages, custom luxury oceanfront estates, and high-density bayfront residences.",
    commonPipeMaterials: "Type L copper, cast iron waste stacks, ABS plastic, and vitrified clay sewer laterals.",
    neighborhoods: ["Balboa Island", "Corona del Mar", "Newport Heights", "Lido Isle", "San Joaquin Hills", "Port Streets"],
    localSewerIssues: "Slab leaks in under-floor copper lines, tidal groundwater pressure on coastal sewer ties, and luxury home fixture demands.",
    introParagraphs: [
      "Newport Beach represents some of Southern California's most prestigious coastal real estate, demanding top-tier, highly technical plumbing expertise.",
      "From custom Corona del Mar estates to historic Balboa Island cottages, under-slab copper pinhole leaks and high-demand fixture requirements are frequent occurrences.",
      "Rooter-X Plumbing delivers non-invasive acoustic leak detection, CIPP trenchless pipe relining, tankless hot water conversions, and 24/7 emergency response throughout Newport Beach."
    ],
    faqs: [
      {
        question: "Why are copper slab leaks so common in Newport Beach homes?",
        answer: "High water pressure combined with soil friction and aggressive hard water causes internal copper pipe wall thinning and pinhole leaks under concrete slabs."
      },
      {
        question: "Can sewer pipes under Balboa Island homes be repaired trenchlessly?",
        answer: "Yes, CIPP epoxy relining repairs damaged sewer laterals under island homes without jackhammering interior tile floors or foundation slabs."
      },
      {
        question: "Do you install high-capacity tankless water heaters for large Newport estates?",
        answer: "Yes, we install multi-unit Navien and Rinnai commercial-grade tankless arrays with smart recirculation for high-demand luxury homes."
      },
      {
        question: "How quickly can you respond to a flooded basement or garage in CDM?",
        answer: "Our 24/7 emergency dispatch team arrives on-site within 30 to 45 minutes anywhere in Newport Beach."
      },
      {
        question: "Are your plumbers experienced working in high-end luxury residences?",
        answer: "Our technicians wear shoe covers, use floor protection matting, and treat high-end architectural finishes with utmost care."
      }
    ],
    nearbyCitySlugs: ["costa-mesa", "huntington-beach", "laguna-beach", "irvine"]
  },
  {
    name: "Fountain Valley",
    slug: "fountain-valley",
    isTop10: true,
    housingEra: "1960s–1970s master-planned suburban housing developments.",
    commonPipeMaterials: "Cast iron DWV stacks, vitrified clay laterals, galvanized water pipe, and copper supply lines.",
    neighborhoods: ["Green Valley", "Talbert", "Mile Square Park area", "Los Alamos", "Tiburon"],
    localSewerIssues: "Soil settling causing sewer line bellies (dips), scale buildup in 1960s cast iron stacks, and copper slab pinhole leaks.",
    introParagraphs: [
      "Fountain Valley's well-planned 1960s and 1970s neighborhoods feature mature residential infrastructure where original plumbing systems are experiencing age-related fatigue.",
      "Ground settling over 50 years has created low points (bellies) in underground sewer laterals around Mile Square Park, trapping paper and solids.",
      "Rooter-X Plumbing provides high-pressure hydro jetting, precision spot repairs, non-destructive leak location, and full-house PEX repiping across Fountain Valley."
    ],
    faqs: [
      {
        question: "What is a sewer belly and how do you fix it in Fountain Valley?",
        answer: "A belly is a sag in a sewer pipe caused by soil settling. Debris settles in the dip. We perform targeted spot repairs or re-grading to restore proper gravity slope."
      },
      {
        question: "Why is my water pressure dropping in my 1970s Fountain Valley home?",
        answer: "Galvanized steel supply pipes build up interior rust scale over 40+ years, narrowing pipe openings. A copper or PEX repipe restores full water pressure."
      },
      {
        question: "How do you detect a slab leak under carpet or hardwood?",
        answer: "We use acoustic ground microphones and thermal imaging cameras that detect water sound and heat signatures without lifting carpet or tearing up flooring."
      },
      {
        question: "Are camera inspections recommended before buying a home in Fountain Valley?",
        answer: "Highly recommended. A camera sweep reveals hidden tree root intrusion or pipe bellies before escrow closes."
      },
      {
        question: "How long does a water heater replacement take in Fountain Valley?",
        answer: "Standard tank replacement takes 2 to 3 hours, complete with double seismic strapping and expansion tank installation."
      }
    ],
    nearbyCitySlugs: ["huntington-beach", "garden-grove", "westminster", "costa-mesa"]
  },
  {
    name: "Dana Point",
    slug: "dana-point",
    isTop10: true,
    housingEra: "1970s–1990s coastal master-planned communities, ocean-view condos, and luxury harbour residences.",
    commonPipeMaterials: "ABS plastic waste lines, copper supply lines, cast iron stacks, and vitrified clay main laterals.",
    neighborhoods: ["Monarch Beach", "Dana Hills", "Capistrano Beach", "Lantern District", "Strands at Headlands"],
    localSewerIssues: "Coastal bluff soil shifting, hard water mineral scaling on water heaters, and root intrusion from coastal palms.",
    introParagraphs: [
      "Dana Point's oceanfront bluffs and harbour-side communities demand durable plumbing installations capable of withstanding coastal soil conditions and hard water mineral impact.",
      "Homes across Monarch Beach and the Lantern District often experience hard water scale inside water heaters and copper supply line pinholes.",
      "Rooter-X Plumbing specializes in tankless water heater conversions, non-invasive slab leak repairs, hydro jetting, and 24/7 emergency drain cleaning in Dana Point."
    ],
    faqs: [
      {
        question: "Why should Dana Point homeowners consider tankless water heaters?",
        answer: "Hard water scale damages tank water heaters quickly. Tankless units with isolation flush valves allow easy annual descaling, lasting over 20 years."
      },
      {
        question: "Can coastal bluff ground movement affect sewer pipes in Capistrano Beach?",
        answer: "Yes, ground movement can shear rigid sewer joints. Flexible trenchless HDPE pipe bursting provides a jointless, movement-resistant replacement."
      },
      {
        question: "Do you offer emergency plumber services on weekends in Dana Point?",
        answer: "Yes, Rooter-X operates 24/7 365 days a year with full emergency service."
      },
      {
        question: "What causes pinhole leaks in 1980s Dana Point homes?",
        answer: "High water velocity combined with chemical municipal water treatment slowly erodes internal copper pipe walls, forming micro pinhole leaks."
      },
      {
        question: "How do you clear palm tree roots from sewer lines?",
        answer: "We use high-pressure hydro jetting with spinning root-cutter nozzles to pulverize palm root masses clean back to the pipe wall."
      }
    ],
    nearbyCitySlugs: ["laguna-beach", "san-clemente", "aliso-viejo", "laguna-niguel"]
  },
  {
    name: "Seal Beach",
    slug: "seal-beach",
    isTop10: true,
    housingEra: "1940s–1970s historic beach cottages, Leisure World senior community, and waterfront homes.",
    commonPipeMaterials: "Vitrified clay, cast iron, galvanized steel water lines, and ABS plastic.",
    neighborhoods: ["Old Town Seal Beach", "Leisure World", "Hillman", "Heron Pointe", "Bridgeport"],
    localSewerIssues: "Aging cast iron waste stacks in historic beach cottages, root intrusion in clay laterals, and high coastal groundwater tables.",
    introParagraphs: [
      "Seal Beach blends historic Old Town cottage charm with established master-planned developments like Leisure World, each presenting distinct plumbing requirements.",
      "Vintage homes near the pier often rely on 70-year-old cast iron waste stacks that require delicate descaling or trenchless epoxy relining.",
      "Rooter-X Plumbing provides gentle electromechanical cabling, CIPP trenchless sewer restoration, water heater replacement, and 24/7 drain service across Seal Beach."
    ],
    faqs: [
      {
        question: "Can you repair sewer lines in historic Old Town Seal Beach without tearing up brick entryways?",
        answer: "Yes, trenchless CIPP epoxy relining restores main sewer laterals directly from cleanouts without disturbing historic brickwork or landscaping."
      },
      {
        question: "Do you provide plumbing services within Leisure World Seal Beach?",
        answer: "Yes, we service Leisure World residences, handling faucet replacements, toilet repairs, drain clearing, and water heater installs compliant with community guidelines."
      },
      {
        question: "Why does my toilet gurgle when it rains in Seal Beach?",
        answer: "High coastal water tables during heavy rains can flood main municipal sewer mains, causing air backpressure in residential traps."
      },
      {
        question: "What is the best repipe material for Seal Beach beach homes?",
        answer: "Uponor PEX-a expansion piping is ideal because it is completely immune to saltwater air corrosion and chemical pinhole leaks."
      },
      {
        question: "How quickly can you dispatch a plumber to Seal Beach?",
        answer: "Our technicians arrive within 30 to 45 minutes for emergency calls in Seal Beach."
      }
    ],
    nearbyCitySlugs: ["huntington-beach", "los-alamitos", "cypress", "westminster"]
  },
  {
    name: "San Clemente",
    slug: "san-clemente",
    isTop10: true,
    housingEra: "1920s Spanish village architecture, 1970s coastal developments, and modern hillside master-planned communities.",
    commonPipeMaterials: "Vitrified clay pipe, copper supply lines, ABS plastic waste lines, and PEX.",
    neighborhoods: ["Talega", "Forster Ranch", "Marblehead", "South El Camino Real", "Pier Bowl", "Coast District"],
    localSewerIssues: "Hillside slope soil movement, high municipal water pressure causing copper pinhole leaks, and root intrusion in older Spanish village laterals.",
    introParagraphs: [
      "San Clemente's scenic coastal hillsides and historic Spanish Village by the Sea require expert plumbing diagnostics and durable piping solutions.",
      "In hillside developments like Talega and Forster Ranch, high municipal water pressure frequently causes copper supply line pinholes, while historic Pier Bowl homes face aging clay laterals.",
      "Rooter-X Plumbing provides pressure regulator valve (PRV) installations, non-invasive slab leak detection, trenchless pipe relining, and 24/7 drain clearing in San Clemente."
    ],
    faqs: [
      {
        question: "Why is high water pressure a problem in San Clemente homes?",
        answer: "High municipal water pressure driven by gravity down steep hills can exceed 100 PSI, damaging appliance valves and causing copper pipe pinhole leaks. We install pressure regulators to keep homes safe at 60–70 PSI."
      },
      {
        question: "How do you locate slab leaks in hillside Talega homes?",
        answer: "We use acoustic leak detectors and thermal imaging cameras to pinpoint subterranean copper leaks under concrete foundations without exploratory digging."
      },
      {
        question: "Can old clay sewer lines near the Pier Bowl be relined?",
        answer: "Yes, trenchless epoxy lining installs a structural 50-year pipe sleeve inside original clay lines without disturbing historic yards."
      },
      {
        question: "Are tankless water heaters popular in San Clemente?",
        answer: "Very popular. Wall-mounted tankless units supply unlimited hot water while saving valuable garage space."
      },
      {
        question: "What is your emergency response time in San Clemente?",
        answer: "We maintain 24/7 emergency coverage with local response times averaging under 45 minutes."
      }
    ],
    nearbyCitySlugs: ["dana-point", "san-juan-capistrano", "laguna-beach", "laguna-niguel"]
  },
  {
    name: "La Habra",
    slug: "la-habra",
    isTop10: true,
    housingEra: "1950s–1970s suburban ranch-style tract housing and hillside custom residences.",
    commonPipeMaterials: "Galvanized iron water supply, Orangeburg sewer pipe, cast iron, and vitrified clay.",
    neighborhoods: ["La Habra Heights border", "West La Habra", "Central La Habra", "Country Hills"],
    localSewerIssues: "Failing 1950s Orangeburg fiber sewer lines, heavy avocado and oak root intrusion, and severe galvanized pipe rust scaling.",
    introParagraphs: [
      "La Habra's established 1950s and 1960s suburban neighborhoods feature mature citrus and oak trees alongside aging underground plumbing infrastructure.",
      "Homeowners across La Habra frequently face collapsed Orangeburg fiber sewer pipes and severely corroded galvanized iron water supply lines that choke home water pressure.",
      "Rooter-X Plumbing delivers trenchless pipe bursting, complete whole-house PEX repiping, hydro jetting, and 24/7 emergency drain clearing in La Habra."
    ],
    faqs: [
      {
        question: "Why are water pressure problems so common in older La Habra homes?",
        answer: "Original 1950s galvanized iron supply pipes corrode internally, filling with heavy rust scale that restricts water flow to faucets."
      },
      {
        question: "How do tree roots from large oak trees damage sewer lines?",
        answer: "Root tips seek moisture at pipe joints, entering microscopic cracks in clay or Orangeburg lines and growing into dense blockage mats."
      },
      {
        question: "Can pipe bursting replace failing Orangeburg pipe in La Habra?",
        answer: "Yes, trenchless pipe bursting breaks apart old Orangeburg pipe while pulling a brand-new continuous HDPE sewer line into place."
      },
      {
        question: "How long does a full home PEX repipe take in La Habra?",
        answer: "Most single-story La Habra homes are repiped in 2 days, including complete drywall patching."
      },
      {
        question: "Do you offer free estimates for sewer replacement in La Habra?",
        answer: "Yes, we provide free on-site camera evaluations and flat-rate written proposals for all sewer line replacements."
      }
    ],
    nearbyCitySlugs: ["brea", "fullerton", "buena-park", "whittier"]
  },
  {
    name: "Buena Park",
    slug: "buena-park",
    isTop10: true,
    housingEra: "1950s–1970s residential tract communities and commercial entertainment/hospitality districts.",
    commonPipeMaterials: "Cast iron DWV, vitrified clay laterals, Orangeburg, and galvanized water supply lines.",
    neighborhoods: ["Ebell Park", "Los Coyotes", "San Tract", "Downtown Buena Park", "Beach Blvd Commercial Corridor"],
    localSewerIssues: "Heavy commercial grease accumulation, aging 1950s cast iron pipe channel erosion, and hard water mineral scaling.",
    introParagraphs: [
      "Buena Park combines established mid-century residential neighborhoods with bustling commercial hospitality and entertainment corridors.",
      "Residential properties built in the 1950s and 1960s face aging cast iron waste stack decay, while commercial kitchens along Beach Boulevard require heavy-duty grease management.",
      "Rooter-X Plumbing provides commercial hydro jetting, trenchless sewer repair, residential drain snaking, water heater installation, and 24/7 emergency plumbing throughout Buena Park."
    ],
    faqs: [
      {
        question: "Do you service commercial restaurant grease lines in Buena Park?",
        answer: "Yes, we provide 24/7 commercial hydro jetting, grease trap line cleaning, and floor drain servicing for Buena Park dining facilities."
      },
      {
        question: "What causes 1950s cast iron sewer lines to crack in Buena Park?",
        answer: "Decades of sulfuric gas exposure inside waste pipes cause cast iron to flake and rust, eroding bottom channels until cracks open."
      },
      {
        question: "Can a camera inspection show if my main sewer line is crushed?",
        answer: "Yes, our HD sewer cameras record precise video footage showing offset joints, root blockages, or collapsed pipe sections."
      },
      {
        question: "How quickly can you replace a leaking water heater in Buena Park?",
        answer: "We offer same-day emergency water heater replacement, complete with seismic strapping and permit sign-off."
      },
      {
        question: "Is 24/7 emergency plumbing service available in Buena Park?",
        answer: "Yes, Rooter-X Plumbing is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["fullerton", "la-habra", "anaheim", "cypress"]
  },
  {
    name: "Aliso Viejo",
    slug: "aliso-viejo",
    isTop10: false,
    housingEra: "1980s–2000s modern master-planned suburban communities and condo developments.",
    commonPipeMaterials: "Type L copper supply lines, ABS plastic DWV, and PEX.",
    neighborhoods: ["Grand Avenue", "Pacific Ridge", "Glenwood", "Vistas", "Highlands"],
    localSewerIssues: "Copper pinhole slab leaks from aggressive water velocity, water pressure regulator failures, and hard water scale.",
    introParagraphs: [
      "Aliso Viejo's modern master-planned neighborhoods feature 1980s-2000s copper and ABS plumbing infrastructure that is now reaching peak maintenance age.",
      "High municipal water pressure combined with local water chemistry frequently triggers copper pinhole slab leaks under concrete foundations.",
      "Rooter-X Plumbing provides non-invasive electronic leak detection, overhead PEX pipe rerouting, water pressure regulator replacement, and 24/7 drain cleaning in Aliso Viejo."
    ],
    faqs: [
      {
        question: "Why do 1990s homes in Aliso Viejo develop slab leaks?",
        answer: "High municipal water pressure combined with soil movement and copper pipe quality variations creates tiny pinhole leaks under concrete foundations."
      },
      {
        question: "How do I know if my water pressure regulator is failing in Aliso Viejo?",
        answer: "If toilets run constantly, faucets bang when shut off (water hammer), or water pressure spikes above 80 PSI, your regulator needs replacement."
      },
      {
        question: "What is an overhead PEX bypass for a slab leak?",
        answer: "Instead of breaking up slab floors, we run flexible Uponor PEX-a piping up through walls and attic spaces, permanently bypassing the leaking under-slab copper line."
      },
      {
        question: "Are tankless water heaters recommended for Aliso Viejo condos?",
        answer: "Yes, wall-mounted tankless units save valuable closet space while delivering unlimited hot water."
      },
      {
        question: "How fast can Rooter-X arrive for a plumbing emergency in Aliso Viejo?",
        answer: "Our local technicians arrive within 30 to 45 minutes for 24/7 emergency dispatch."
      }
    ],
    nearbyCitySlugs: ["laguna-beach", "dana-point", "laguna-hills", "mission-viejo"]
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    isTop10: false,
    housingEra: "1920s historic downtown residences to 1950s–1970s post-war tract housing and commercial resort districts.",
    commonPipeMaterials: "Vitrified clay, Orangeburg, cast iron, galvanized steel, and copper.",
    neighborhoods: ["Anaheim Colony Historic District", "West Anaheim", "East Anaheim", "Platinum Triangle", "Resort District"],
    localSewerIssues: "Aging historic clay and cast iron sewer main connections, Orangeburg pipe collapses in West Anaheim, and heavy commercial grease lines.",
    introParagraphs: [
      "Anaheim spans diverse plumbing landscapes — from historic 1920s homes in the Colony District to 1950s post-war tract housing and major commercial resort facilities.",
      "West Anaheim properties often suffer from collapsing 1950s Orangeburg fiber sewer lines, while commercial venues require heavy-duty high-pressure hydro jetting.",
      "Rooter-X Plumbing delivers trenchless sewer pipe bursting, HD camera diagnostics, commercial hydro jetting, and 24/7 emergency drain clearing across Anaheim."
    ],
    faqs: [
      {
        question: "Can you repair sewer lines in historic Anaheim homes without damaging landscaping?",
        answer: "Yes, our trenchless CIPP lining and pipe bursting methods preserve historic gardens and hardscapes by avoiding long open trenches."
      },
      {
        question: "Why do West Anaheim homes suffer from Orangeburg pipe failure?",
        answer: "Orangeburg fiber pipes installed during 1950s residential booms deform and collapse under soil weight after 50+ years."
      },
      {
        question: "Do you service commercial properties near the Anaheim Resort District?",
        answer: "Yes, we handle 24/7 commercial hydro jetting, floor sink clearing, and main sewer line maintenance for hospitality venues."
      },
      {
        question: "How long does a main drain clearing take in Anaheim?",
        answer: "Standard main line cable clearing takes 45 to 60 minutes, complete with camera inspection verification."
      },
      {
        question: "Is emergency plumbing available 24/7 in Anaheim?",
        answer: "Yes, Rooter-X operates 24/7/365 with rapid local technician dispatch."
      }
    ],
    nearbyCitySlugs: ["anaheim-hills", "buena-park", "garden-grove", "fullerton"]
  },
  {
    name: "Anaheim Hills",
    slug: "anaheim-hills",
    isTop10: false,
    housingEra: "1970s–2000s master-planned hillside estates and custom executive homes.",
    commonPipeMaterials: "Type L copper supply lines, ABS plastic waste systems, and PEX.",
    neighborhoods: ["Deer Canyon", "Nohl Ranch", "Saddlehill", "Perceval", "Hidden Canyon"],
    localSewerIssues: "Hillside slope soil movement, extreme municipal water pressure requiring PRV valves, and copper pinhole slab leaks.",
    introParagraphs: [
      "Anaheim Hills features sprawling hillside executive residences and master-planned neighborhoods built along foothill terrain.",
      "High municipal water pressure in elevated hill zones combined with natural soil movement causes copper slab pinhole leaks and pressure regulator failures.",
      "Rooter-X Plumbing provides non-invasive acoustic leak location, pressure regulator installations, trenchless sewer repairs, and tankless hot water conversions in Anaheim Hills."
    ],
    faqs: [
      {
        question: "Why is water pressure regulation critical in Anaheim Hills?",
        answer: "Gravity water pressure from elevated foothill reservoirs can exceed 110 PSI. We install heavy-duty pressure regulators to protect home fixtures at safe 65 PSI levels."
      },
      {
        question: "How do you find copper slab leaks in custom Anaheim Hills homes?",
        answer: "We use non-invasive acoustic listening devices and thermal cameras to pinpoint subterranean leaks under custom flooring without exploratory digging."
      },
      {
        question: "Can hillside sewer pipes be relined trenchlessly?",
        answer: "Yes, trenchless epoxy relining repairs damaged sewer laterals under steep driveways and retaining walls without trenching."
      },
      {
        question: "What are the benefits of tankless water heaters in Anaheim Hills estates?",
        answer: "Tankless units provide unlimited hot water for large soaking tubs and multi-shower executive bathrooms while saving utility costs."
      },
      {
        question: "How fast can Rooter-X dispatch a plumber to Anaheim Hills?",
        answer: "Our technicians arrive within 30 to 45 minutes for 24/7 emergency service calls."
      }
    ],
    nearbyCitySlugs: ["anaheim", "yorba-linda", "orange", "tustin"]
  },
  {
    name: "Brea",
    slug: "brea",
    isTop10: false,
    housingEra: "1920s historic downtown homes, 1960s tract housing, and modern hillside master-planned developments.",
    commonPipeMaterials: "Vitrified clay, galvanized steel, copper supply lines, and ABS plastic.",
    neighborhoods: ["Downtown Brea", "Brea Olinda", "Carbon Canyon", "Country Hills", "Eagle Hills"],
    localSewerIssues: "Hillside root intrusion in Carbon Canyon, aging galvanized water supply pipes, and clay sewer joint shearing.",
    introParagraphs: [
      "Brea blends historic oil-town roots with modern master-planned hillside neighborhoods along the Carbon Canyon corridor.",
      "Older residences near Downtown Brea face corroded galvanized iron water lines, while hillside homes in Carbon Canyon battle aggressive root systems.",
      "Rooter-X Plumbing delivers whole-house PEX repiping, hydro jetting, trenchless sewer replacement, and 24/7 emergency drain cleaning in Brea."
    ],
    faqs: [
      {
        question: "Why should I replace galvanized water pipes in my older Brea home?",
        answer: "Galvanized pipes rust internally, reducing water pressure and delivering yellow rust-tinted water to faucets. A PEX repipe restores clean water flow."
      },
      {
        question: "Can you clear eucalyptus and oak tree roots from Carbon Canyon sewer lines?",
        answer: "Yes, our high-pressure hydro jetting scours away dense tree root mats clean to the pipe walls."
      },
      {
        question: "How long does a main cleanout drain cabling take in Brea?",
        answer: "Standard main line clearing takes under one hour, followed by a video camera inspection."
      },
      {
        question: "Do you install tankless water heaters in Brea homes?",
        answer: "Yes, we install Navien and Rinnai high-efficiency tankless water heaters with full gas line sizing."
      },
      {
        question: "Is 24/7 emergency plumbing service available in Brea?",
        answer: "Yes, Rooter-X is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["la-habra", "fullerton", "yorba-linda", "placentia"]
  },
  {
    name: "Costa Mesa",
    slug: "costa-mesa",
    isTop10: false,
    housingEra: "1950s–1970s suburban ranch homes, modern urban infill, and commercial retail centers.",
    commonPipeMaterials: "Cast iron DWV, vitrified clay sewer laterals, galvanized water pipe, and copper.",
    neighborhoods: ["Eastside Costa Mesa", "Mesa Verde", "Westside Costa Mesa", "South Coast Metro", "Halecrest"],
    localSewerIssues: "Flaking 1950s cast iron waste stacks, root intrusion in clay main laterals, and copper pinhole slab leaks.",
    introParagraphs: [
      "Costa Mesa features vibrant post-war residential neighborhoods alongside high-density commercial shopping and dining districts.",
      "Eastside ranch homes built in the 1950s frequently experience internal cast iron pipe flaking and copper pinhole slab leaks under concrete foundations.",
      "Rooter-X Plumbing provides non-invasive slab leak detection, CIPP trenchless sewer lining, whole-house repiping, and 24/7 drain cleaning in Costa Mesa."
    ],
    faqs: [
      {
        question: "Why do Eastside Costa Mesa homes experience slab leaks?",
        answer: "Original 1950s copper lines under concrete slabs corrode over time due to soil friction and mineral content, causing pinhole leaks."
      },
      {
        question: "Can failing cast iron sewer lines under Costa Mesa homes be relined?",
        answer: "Yes, after hydro jetting descaling, trenchless CIPP epoxy relining creates a brand-new structural pipe inside old cast iron."
      },
      {
        question: "Do you service commercial retail plumbing near South Coast Metro?",
        answer: "Yes, we handle commercial drain cleaning, hydro jetting, floor sink clearing, and water heater installations 24/7."
      },
      {
        question: "How long does a home PEX repipe take in Costa Mesa?",
        answer: "Complete home repiping takes 2 to 3 days, complete with professional drywall patching."
      },
      {
        question: "What is your emergency response time in Costa Mesa?",
        answer: "Our technicians arrive within 30 to 45 minutes for 24/7 emergency service calls."
      }
    ],
    nearbyCitySlugs: ["newport-beach", "huntington-beach", "fountain-valley", "irvine"]
  },
  {
    name: "Cypress",
    slug: "cypress",
    isTop10: false,
    housingEra: "1960s–1980s suburban master-planned tract communities.",
    commonPipeMaterials: "Cast iron DWV stacks, ABS plastic laterals, galvanized water pipe, and copper.",
    neighborhoods: ["Sorrento", "Cypress Village", "Lincoln/Valley area", "Moody", "Lincoln Park"],
    localSewerIssues: "1960s cast iron pipe channel wear, root intrusion from residential trees, and water heater sediment buildup.",
    introParagraphs: [
      "Cypress is a peaceful suburban community built primarily during the suburban housing booms of the 1960s and 1970s.",
      "Original cast iron waste stacks across Cypress neighborhoods are reaching 50+ years of service, leading to bottom channel corrosion and frequent drain clogs.",
      "Rooter-X Plumbing delivers expert hydro jetting, camera inspection sweeps, water heater replacement, and 24/7 emergency drain clearing in Cypress."
    ],
    faqs: [
      {
        question: "Why are my kitchen drains backing up in my 1960s Cypress home?",
        answer: "Decades of grease, soap scum, and internal cast iron rust scale narrow the pipe opening. Hydro jetting scours pipes back to full diameter."
      },
      {
        question: "How do I know if my water heater needs replacing in Cypress?",
        answer: "If your tank is over 10 years old, leaking from the base, making popping sediment noises, or producing rusty water, replacement is needed."
      },
      {
        question: "Can camera inspections locate root intrusion in Cypress sewer lines?",
        answer: "Yes, HD camera sweeps pinpoint root entry points and structural cracks in main sewer laterals."
      },
      {
        question: "Do you offer tankless water heater installation in Cypress?",
        answer: "Yes, we install high-efficiency Navien and Rinnai tankless systems complete with gas line upgrades."
      },
      {
        question: "Is emergency 24/7 plumbing service available in Cypress?",
        answer: "Yes, Rooter-X is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["buena-park", "la-palma", "seal-beach", "los-alamitos"]
  },
  {
    name: "Fullerton",
    slug: "fullerton",
    isTop10: false,
    housingEra: "1920s historic craftsman bungalows, mid-century ranch homes, and hillside estates.",
    commonPipeMaterials: "Vitrified clay, Orangeburg, cast iron, galvanized iron, and copper.",
    neighborhoods: ["Downtown Historic Fullerton", "Sunny Hills", "Amerige Heights", "Raymond Hills", "Hermosa Drive"],
    localSewerIssues: "Heavy root intrusion from historic oak and elm trees, Orangeburg pipe collapse, and aging galvanized water supply pipes.",
    introParagraphs: [
      "Fullerton features rich architectural heritage ranging from 1920s historic craftsman homes in Downtown to mid-century ranch homes and Sunny Hills estates.",
      "Historic tree root systems frequently invade vintage clay sewer joints, while 1950s homes suffer from collapsing Orangeburg fiber pipes.",
      "Rooter-X Plumbing delivers trenchless sewer pipe bursting, CIPP epoxy lining, whole-house PEX repiping, and 24/7 emergency drain clearing in Fullerton."
    ],
    faqs: [
      {
        question: "Can you fix sewer lines in historic Fullerton neighborhoods without digging up lawns?",
        answer: "Yes, trenchless CIPP epoxy relining restores historic clay sewer laterals from cleanout access points, preserving vintage landscaping."
      },
      {
        question: "Why is Orangeburg pipe failing in mid-century Fullerton homes?",
        answer: "Orangeburg fiber pipes installed in the 1950s ovalize and collapse under ground weight after 50 years. Pipe bursting replaces them with continuous HDPE."
      },
      {
        question: "Why is water pressure low in older Raymond Hills homes?",
        answer: "Corroded galvanized iron water supply lines restrict flow. A whole-house PEX repipe restores strong, clean water pressure."
      },
      {
        question: "How long does a main cleanout drain clearing take in Fullerton?",
        answer: "Standard main line cable clearing takes under 60 minutes, followed by a video camera inspection."
      },
      {
        question: "Is emergency plumbing available 24/7 in Fullerton?",
        answer: "Yes, Rooter-X Plumbing is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["brea", "la-habra", "anaheim", "placentia"]
  },
  {
    name: "Irvine",
    slug: "irvine",
    isTop10: false,
    housingEra: "1970s–2020s master-planned villages, high-density residential towers, and modern commercial tech parks.",
    commonPipeMaterials: "Type L copper supply lines, ABS plastic waste systems, and Uponor PEX-a.",
    neighborhoods: ["Woodbridge", "Turtle Rock", "Northwood", "Westpark", "Great Park Neighborhoods", "Orchard Hills"],
    localSewerIssues: "Slab leaks in 1970s–1990s copper lines, high municipal water pressure spikes, and HOA plumbing compliance rules.",
    introParagraphs: [
      "As one of America's premier master-planned cities, Irvine features modern residential villages governed by active Homeowner Associations (HOAs).",
      "Older villages like Woodbridge and Turtle Rock frequently experience under-slab copper pinhole leaks and water pressure regulator failures.",
      "Rooter-X Plumbing provides non-invasive electronic slab leak location, overhead PEX rerouting, HOA-compliant water heater installation, and 24/7 drain clearing in Irvine."
    ],
    faqs: [
      {
        question: "Why are copper slab leaks common in Irvine villages like Woodbridge?",
        answer: "Soil conditions combined with high water velocity in 1970s–1990s copper lines cause internal pinhole leaks under concrete slab foundations."
      },
      {
        question: "Are your plumbers familiar with Irvine HOA plumbing guidelines?",
        answer: "Yes, we work within HOA architectural rules, maintain high insurance coverage, and clean up job sites meticulously."
      },
      {
        question: "How do you bypass a slab leak without tearing up Irvine hardwood floors?",
        answer: "We install an overhead PEX reroute through wall framing and attic spaces, permanently abandoning the leaking under-slab line."
      },
      {
        question: "How do I know if my Irvine home's water pressure regulator needs replacement?",
        answer: "If water pressure exceeds 80 PSI or faucets bang loudly, the pressure regulator has failed. We install brass regulators calibrated to 65 PSI."
      },
      {
        question: "What is your emergency response time in Irvine?",
        answer: "Our technicians arrive within 30 to 45 minutes for 24/7 emergency dispatch anywhere in Irvine."
      }
    ],
    nearbyCitySlugs: ["tustin", "costa-mesa", "newport-beach", "lake-forest"]
  },
  {
    name: "La Palma",
    slug: "la-palma",
    isTop10: false,
    housingEra: "1960s–1970s suburban master-planned residential tract communities.",
    commonPipeMaterials: "Cast iron DWV stacks, ABS plastic laterals, galvanized steel, and copper.",
    neighborhoods: ["La Palma Central", "Walker", "Denniston Park", "Houston"],
    localSewerIssues: "1960s cast iron pipe internal rusting, mineral scale accumulation, and tree root penetration.",
    introParagraphs: [
      "La Palma is a compact, highly rated suburban community built during the suburban residential growth of the 1960s.",
      "Original cast iron waste stacks across La Palma homes are experiencing internal rust scale buildup, reducing drainage velocity.",
      "Rooter-X Plumbing delivers high-pressure hydro jetting, camera inspection sweeps, water heater replacement, and 24/7 emergency drain clearing in La Palma."
    ],
    faqs: [
      {
        question: "Why do main drains clog in 1960s La Palma homes?",
        answer: "Decades of internal rust scaling catch paper and waste. Hydro jetting cleans pipe walls back to original full diameter."
      },
      {
        question: "How long does a water heater installation take in La Palma?",
        answer: "Standard tank water heater replacement takes 2 to 3 hours, complete with seismic strapping and expansion tanks."
      },
      {
        question: "Can camera inspections check my main sewer line before buying a home in La Palma?",
        answer: "Yes, HD camera sweeps reveal hidden tree root intrusion or pipe cracks before escrow closes."
      },
      {
        question: "Do you install tankless water heaters in La Palma?",
        answer: "Yes, we install high-efficiency Navien and Rinnai tankless systems complete with gas line sizing."
      },
      {
        question: "Is 24/7 emergency plumbing service available in La Palma?",
        answer: "Yes, Rooter-X Plumbing is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["cypress", "buena-park", "cerritos", "anaheim"]
  },
  {
    name: "Orange",
    slug: "orange",
    isTop10: false,
    housingEra: "1880s–1930s historic Plaza district residences, 1950s post-war tract homes, and foothill custom estates.",
    commonPipeMaterials: "Vitrified clay, Orangeburg, cast iron, galvanized iron, and copper.",
    neighborhoods: ["Old Towne Orange Plaza", "Orange Foothills", "El Modena", "Orange Park Acres", "Serrano Heights"],
    localSewerIssues: "Historic clay sewer line root intrusion in Old Towne, Orangeburg collapse in 1950s tracts, and galvanized supply line corrosion.",
    introParagraphs: [
      "The City of Orange features California's largest historic residential district surrounding the Old Towne Plaza, alongside 1950s tract homes and foothill estates.",
      "Historic Old Towne homes feature 100-year-old clay sewer lines subject to heavy tree root intrusion, while 1950s homes suffer from failing Orangeburg lines.",
      "Rooter-X Plumbing provides CIPP trenchless epoxy lining, pipe bursting, whole-house PEX repiping, and 24/7 emergency drain clearing in Orange."
    ],
    faqs: [
      {
        question: "Can you repair sewer lines in historic Old Towne Orange without digging up historic brickwork?",
        answer: "Yes, trenchless CIPP epoxy relining restores historic clay sewer laterals directly from cleanouts, preserving historic landscaping and brick entryways."
      },
      {
        question: "Why is Orangeburg pipe failing in 1950s Orange homes?",
        answer: "Orangeburg fiber pipes deform and collapse after 50 years. Trenchless pipe bursting replaces them with continuous HDPE pipe."
      },
      {
        question: "Why is tap water yellow or rusty in older Orange homes?",
        answer: "Corroded galvanized iron supply pipes shed rust internally. A whole-house PEX repipe restores clean, clear water flow."
      },
      {
        question: "How long does a main cleanout drain clearing take in Orange?",
        answer: "Standard main line cable clearing takes under 60 minutes, followed by a video camera inspection."
      },
      {
        question: "Is emergency plumbing available 24/7 in Orange?",
        answer: "Yes, Rooter-X Plumbing is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["anaheim", "tustin", "garden-grove", "anaheim-hills"]
  },
  {
    name: "Santa Ana",
    slug: "santa-ana",
    isTop10: false,
    housingEra: "1920s historic bungalow neighborhoods, 1950s post-war tract housing, and high-density urban residential centers.",
    commonPipeMaterials: "Vitrified clay, cast iron, Orangeburg, galvanized iron, and ABS plastic.",
    neighborhoods: ["Floral Park", "French Park", "Downtown Santa Ana (DTSA)", "South Coast Metro", "Rivergate", "Wilshire Square"],
    localSewerIssues: "Heavy root intrusion in historic Floral Park clay laterals, collapsed Orangeburg lines, and high-density drain line grease build-up.",
    introParagraphs: [
      "As Orange County's county seat, Santa Ana spans historic 1920s neighborhoods like Floral Park, post-war tract communities, and bustling commercial districts.",
      "Historic clay sewer lines frequently suffer heavy root intrusion from mature street trees, while mid-century homes face failing Orangeburg and cast iron waste stacks.",
      "Rooter-X Plumbing provides trenchless pipe relining, pipe bursting, HD camera diagnostics, commercial hydro jetting, and 24/7 emergency drain clearing in Santa Ana."
    ],
    faqs: [
      {
        question: "Can you fix sewer lines under historic Floral Park trees without cutting roots?",
        answer: "Yes, trenchless CIPP lining restores damaged clay pipes from the inside, eliminating open trenches near historic tree root zones."
      },
      {
        question: "Why are main sewer drains backing up in 1950s Santa Ana homes?",
        answer: "Collapsing Orangeburg fiber pipe or heavy cast iron rust scale restricts waste flow. We diagnose the exact cause with camera video inspections."
      },
      {
        question: "Do you service commercial properties in Downtown Santa Ana (DTSA)?",
        answer: "Yes, we provide 24/7 commercial hydro jetting, grease interceptor line cleaning, and floor drain servicing."
      },
      {
        question: "How long does a water heater installation take in Santa Ana?",
        answer: "Standard tank replacement takes 2 to 3 hours, complete with double seismic strapping and municipal permit sign-off."
      },
      {
        question: "Is 24/7 emergency plumbing service available in Santa Ana?",
        answer: "Yes, Rooter-X Plumbing is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["tustin", "orange", "garden-grove", "costa-mesa"]
  },
  {
    name: "Tustin",
    slug: "tustin",
    isTop10: false,
    housingEra: "1910s historic downtown residences, 1960s suburban tract housing, and modern Tustin Legacy developments.",
    commonPipeMaterials: "Vitrified clay, cast iron, copper supply lines, ABS plastic, and PEX.",
    neighborhoods: ["Old Town Tustin", "Tustin Legacy", "Columbus Grove", "Peppertree", "Tustin Ranch"],
    localSewerIssues: "Root intrusion in Old Town clay laterals, slab leaks in 1970s copper lines, and high municipal water pressure.",
    introParagraphs: [
      "Tustin blends historic charm in Old Town Tustin with mid-century suburban neighborhoods and modern master-planned communities at Tustin Legacy.",
      "Homes built in the 1970s across Tustin Ranch and Peppertree face under-slab copper pinhole leaks, while Old Town properties require clay lateral root maintenance.",
      "Rooter-X Plumbing provides non-invasive acoustic leak location, PEX repiping, CIPP trenchless sewer lining, and 24/7 emergency drain clearing in Tustin."
    ],
    faqs: [
      {
        question: "Why do 1970s Tustin homes develop copper slab leaks?",
        answer: "High water velocity combined with aggressive soil friction creates tiny pinhole leaks in under-slab copper lines. We offer non-invasive acoustic location and PEX rerouting."
      },
      {
        question: "Can sewer pipes in Old Town Tustin be relined trenchlessly?",
        answer: "Yes, trenchless CIPP epoxy relining restores old clay laterals without disturbing historic landscaping or street paving."
      },
      {
        question: "Do you service new homes in Tustin Legacy?",
        answer: "Yes, we handle tankless water heater maintenance, water pressure regulator adjustments, and drain clearing for Tustin Legacy residences."
      },
      {
        question: "How fast can Rooter-X respond to a plumbing emergency in Tustin?",
        answer: "Our technicians arrive within 30 to 45 minutes for 24/7 emergency dispatch anywhere in Tustin."
      },
      {
        question: "Are your estimates upfront and flat-rate?",
        answer: "Yes, we provide clear flat-rate pricing before any work begins, with zero hidden fees."
      }
    ],
    nearbyCitySlugs: ["irvine", "santa-ana", "orange", "anaheim-hills"]
  },
  {
    name: "Westminster",
    slug: "westminster",
    isTop10: false,
    housingEra: "1950s–1970s post-war suburban tract housing developments.",
    commonPipeMaterials: "Orangeburg fiber pipe, vitrified clay, cast iron, and galvanized iron supply lines.",
    neighborhoods: ["Little Saigon district", "Westminster Village", "Midway City border", "Sol Vista"],
    localSewerIssues: "Collapsing 1950s Orangeburg fiber sewer lines, extreme mineral scaling in galvanized pipes, and root intrusion.",
    introParagraphs: [
      "Westminster features established post-war 1950s and 1960s tract housing developments alongside vibrant commercial districts.",
      "Many residential laterals across Westminster were constructed using bituminized Orangeburg fiber pipe, which collapses under ground weight after 50 years.",
      "Rooter-X Plumbing delivers trenchless pipe bursting replacement, HD camera video sweeps, whole-house PEX repiping, and 24/7 emergency drain clearing in Westminster."
    ],
    faqs: [
      {
        question: "What is Orangeburg pipe and why is it failing in Westminster?",
        answer: "Orangeburg is bituminized fiber pipe installed in the 1950s. Over 50 years, ground moisture causes it to ovalize and collapse, requiring replacement."
      },
      {
        question: "Can pipe bursting replace broken sewer lines in Westminster without trenching?",
        answer: "Yes, trenchless pipe bursting breaks apart old pipe while pulling continuous HDPE sewer pipe into place with minimal lawn excavation."
      },
      {
        question: "Why is water pressure low in my 1960s Westminster home?",
        answer: "Corroded galvanized iron supply pipes restrict water flow internally. A PEX repipe restores clean, strong water pressure."
      },
      {
        question: "How long does a main cleanout drain clearing take in Westminster?",
        answer: "Standard main line cabling takes under 60 minutes, complete with camera inspection verification."
      },
      {
        question: "Is emergency 24/7 plumbing service available in Westminster?",
        answer: "Yes, Rooter-X Plumbing is available 24/7/365 at (310) 363-9881."
      }
    ],
    nearbyCitySlugs: ["garden-grove", "fountain-valley", "huntington-beach", "seal-beach"]
  },
  {
    name: "Yorba Linda",
    slug: "yorba-linda",
    isTop10: false,
    housingEra: "1970s–2000s master-planned suburban housing, equestrian estates, and executive residences.",
    commonPipeMaterials: "Type L copper supply lines, ABS plastic waste systems, and PEX.",
    neighborhoods: ["East Lake Village", "Kerrigan Ranch", "Travis Ranch", "Vista Del Verde", "Fairlynn"],
    localSewerIssues: "High municipal water pressure spikes, copper pinhole slab leaks, and equestrian land root intrusion.",
    introParagraphs: [
      "Yorba Linda is known for its spacious executive properties, equestrian estates, and upscale master-planned communities.",
      "High municipal water pressure driven down from foothill water tanks frequently causes pressure regulator failure and copper pinhole slab leaks in East Lake Village homes.",
      "Rooter-X Plumbing provides non-invasive acoustic leak location, pressure regulator installations, trenchless sewer repairs, and tankless hot water conversions in Yorba Linda."
    ],
    faqs: [
      {
        question: "Why is water pressure regulation vital for Yorba Linda homes?",
        answer: "High gravity water pressure from foothill reservoirs can exceed 100 PSI. We install brass pressure regulators to keep household plumbing safe at 65 PSI."
      },
      {
        question: "How do you detect copper slab leaks in East Lake Village homes?",
        answer: "We use acoustic ground microphones and thermal cameras to pinpoint subterranean leaks under concrete foundations without exploratory floor damage."
      },
      {
        question: "Can high-capacity tankless water heaters supply large Yorba Linda residences?",
        answer: "Yes, we install commercial-grade Navien and Rinnai tankless systems with smart recirculation pumps for large homes."
      },
      {
        question: "How fast can Rooter-X respond to a plumbing emergency in Yorba Linda?",
        answer: "Our local technicians arrive within 30 to 45 minutes for 24/7 emergency calls."
      },
      {
        question: "Are your written quotes guaranteed before work starts?",
        answer: "Yes, we provide upfront flat-rate pricing before beginning any plumbing repair."
      }
    ],
    nearbyCitySlugs: ["anaheim-hills", "placentia", "brea", "fullerton"]
  }
];
