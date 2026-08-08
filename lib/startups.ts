export const DIRECTORY_REVIEWED_AT = "2026-08-07";
export const SITE_UPDATED_AT = "2026-08-08";

export type StartupSource = {
  label: string;
  publisher: string;
  url: string;
  supports: string[];
};

export type StartupFounder = {
  name: string;
  alternateNames?: string[];
  role: string;
  linkedin: string;
  connectionSummary: string;
};

export type StartupAccelerator = {
  name: "Y Combinator";
  batch: string;
  profile: string;
};

export type StartupStage = {
  label: string;
  detail: string;
  source: string;
};

export type StartupHiring = {
  status: "Hiring" | "No public openings" | "Unclear";
  detail: string;
  url: string;
};

export type Startup = {
  slug: string;
  name: string;
  alternateNames?: string[];
  logo: string;
  foundedYear: number;
  status: "Active";
  location: string;
  ukrainePresence?: string;
  focus: string;
  sectors: string[];
  tags: string[];
  stage: StartupStage;
  hiring: StartupHiring;
  momentum: string;
  description: string;
  answer: string;
  website: string;
  accelerator?: StartupAccelerator;
  connectionLabel: "Ukrainian-founded" | "Ukraine-connected";
  inclusionReason: string;
  founders: StartupFounder[];
  sources: StartupSource[];
  lastReviewed: string;
};

export const startups: Startup[] = [
  {
    slug: "preply",
    name: "Preply",
    logo: "/logos/preply.png",
    foundedYear: 2012,
    status: "Active",
    location: "New York · Barcelona · London",
    ukrainePresence: "Engineering and company roots in Kyiv",
    focus: "Edtech · Language learning",
    sectors: ["Education", "Marketplace", "Artificial intelligence"],
    tags: ["Unicorn", "$150M Series D", "Global"],
    stage: { label: "Series D", detail: "$150M Series D at a $1.2B valuation, announced in January 2026.", source: "https://www.prnewswire.com/news-releases/preply-raises-150-million-to-shape-the-future-of-education-through-human-led-ai-enhanced-learning-302665890.html" },
    hiring: { status: "Hiring", detail: "Current roles across Kyiv, Barcelona, London, and New York.", url: "https://www.linkedin.com/company/preply/jobs" },
    momentum: "$150M Series D at a $1.2B valuation in January 2026; EBITDA-positive with learners and tutors across 180 countries.",
    description: "A global marketplace for live, AI-enhanced language learning with human tutors.",
    answer: "Preply is a Ukrainian-founded language-learning marketplace that became a unicorn in January 2026 after raising a $150 million Series D led by WestCap at a $1.2 billion valuation.",
    website: "https://preply.com/",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Preply’s official history traces the company to founders from Kyiv and an early product and team built in Ukraine. The company maintains a Kyiv engineering presence while operating globally.",
    founders: [
      { name: "Kirill Bigai", alternateNames: ["Kyrylo Bigai"], role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/kirillbigai", connectionSummary: "Ukrainian founder who grew up in Kyiv." },
      { name: "Dmytro Voloshyn", role: "Co-founder and CTO", linkedin: "https://www.linkedin.com/in/dmytrovoloshyn", connectionSummary: "Ukrainian co-founder who helped build Preply’s early team in Kyiv." },
    ],
    sources: [
      { label: "Preply company history", publisher: "Preply", url: "https://preply.com/en/about-us", supports: ["founders", "Ukraine connection", "company history", "global presence"] },
      { label: "Preply raises $150M and becomes a unicorn", publisher: "Preply", url: "https://preply.com/en/blog/preply-raises-150-million-to-shape-the-future-of-education-through-human-led-ai-enhanced-learning/", supports: ["funding", "valuation", "momentum", "product"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "uforce",
    name: "UFORCE",
    logo: "/logos/uforce.png",
    foundedYear: 2025,
    status: "Active",
    location: "London · Washington, D.C. · Ukraine",
    ukrainePresence: "Battlefield-proven Ukrainian systems and engineering",
    focus: "Defense · Autonomous systems",
    sectors: ["Defense", "Autonomy", "Drones", "Robotics"],
    tags: ["Defense", "$1B valuation", "UK–Ukraine"],
    stage: { label: "Stage undisclosed", detail: "$50M venture round at an approximately $1B valuation; no conventional round label was disclosed.", source: "https://www.bloomberg.com/news/articles/2026-03-05/ukraine-battlefield-tech-firm-uforce-nears-1-billion-valuation" },
    hiring: { status: "No public openings", detail: "No roles were posted on the company’s public LinkedIn jobs page when checked.", url: "https://www.linkedin.com/company/uforce-global/jobs" },
    momentum: "$50M raised at an approximately $1B valuation in March 2026, with systems used across more than 150,000 combat missions.",
    description: "Combat-proven autonomous systems spanning sea, air, land, and counter-UAS missions.",
    answer: "UFORCE is a Ukrainian-founded, London-headquartered defense company that raised $50 million at an approximately $1 billion valuation in 2026 to scale combat-proven autonomous systems for Ukraine and allied militaries.",
    website: "https://www.uforce.com/",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "UFORCE combines Ukrainian battlefield systems and operators with Western manufacturing, capital, and go-to-market leadership. Its board includes former UK Defence Secretary Sir Ben Wallace.",
    founders: [
      { name: "Oleg Rogynskyy", alternateNames: ["Oleh Rohynskyi"], role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/olegrogynskyy", connectionSummary: "Ukrainian-born Silicon Valley entrepreneur and recipient of Ukraine’s Order of Merit." },
      { name: "Oleksiy Honcharuk", role: "Co-founder and Board Chairman", linkedin: "https://www.linkedin.com/in/oleksiy-honcharuk-766776332", connectionSummary: "Former Prime Minister of Ukraine and adviser to Ukraine’s Unmanned Systems Forces." },
    ],
    sources: [
      { label: "UFORCE company and leadership", publisher: "UFORCE", url: "https://www.uforce.com/company", supports: ["company", "founders", "Ukraine connection", "Western ties", "products"] },
      { label: "UFORCE nears $1B valuation", publisher: "Bloomberg", url: "https://www.bloomberg.com/news/articles/2026-03-05/ukraine-battlefield-tech-firm-uforce-nears-1-billion-valuation", supports: ["funding", "valuation", "momentum"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "quo",
    name: "Quo",
    alternateNames: ["OpenPhone"],
    logo: "/logos/quo.png",
    foundedYear: 2018,
    status: "Active",
    location: "San Francisco",
    focus: "AI · Business communications",
    sectors: ["Artificial intelligence", "SaaS", "Telecommunications"],
    tags: ["YC S18", "$105M financing", "AI"],
    stage: { label: "Growth financing", detail: "$96M customer-value financing plus $9M in equity, announced in September 2025.", source: "https://www.prnewswire.com/news-releases/openphone-becomes-quo-new-name-updated-products-and-105-million-in-growth-financing-mark-major-inflection-point-for-ai-driven-front-office-solution-302562915.html" },
    hiring: { status: "Hiring", detail: "The official careers page is accepting applications for open roles.", url: "https://www.quo.com/careers" },
    momentum: "$105M in growth financing in September 2025 alongside the OpenPhone-to-Quo rebrand and expansion of its Sona AI agent.",
    description: "An AI-powered business phone and front-office platform for small and growing companies.",
    answer: "Quo, formerly OpenPhone, is a San Francisco communications platform co-founded by Ukrainian-Canadian entrepreneur Daryna Kulya. It announced $105 million in growth financing in September 2025.",
    website: "https://www.quo.com/",
    accelerator: { name: "Y Combinator", batch: "Summer 2018", profile: "https://www.ycombinator.com/companies/openphone" },
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Quo’s official founder biography identifies co-founder Daryna Kulya as Ukrainian-Canadian. The company grew from Canadian roots into a San Francisco platform serving global small businesses.",
    founders: [
      { name: "Daryna Kulya", role: "Co-founder", linkedin: "https://www.linkedin.com/in/darynakulya", connectionSummary: "Ukrainian-Canadian co-founder whose official biography describes Kyiv as home." },
      { name: "Mahyar Raissi", role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/mahyarr", connectionSummary: "Co-founded Quo with Daryna Kulya and scaled it in the U.S. market." },
    ],
    sources: [
      { label: "OpenPhone becomes Quo and raises $105M", publisher: "Quo", url: "https://www.quo.com/blog/next-chapter/", supports: ["funding", "momentum", "name change", "product"] },
      { label: "Quo company profile", publisher: "Y Combinator", url: "https://www.ycombinator.com/companies/openphone", supports: ["company", "batch", "founders", "location", "status"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "swarmer",
    name: "Swarmer",
    logo: "/logos/swarmer.webp",
    foundedYear: 2023,
    status: "Active",
    location: "Austin · Kyiv",
    ukrainePresence: "Software deployed with nearly 50 Ukrainian units",
    focus: "Defense · Drone swarms",
    sectors: ["Defense", "Autonomy", "Artificial intelligence", "Drones"],
    tags: ["Defense", "$15M Series A", "US-backed"],
    stage: { label: "Public · post-Series A", detail: "$15M Series A followed by a 2026 U.S. public-market listing.", source: "https://www.sec.gov/Archives/edgar/data/2092574/000110465926072392/tmb-20260331xs1.htm" },
    hiring: { status: "Hiring", detail: "Multiple current roles across Kyiv, Lviv, Warsaw, and remote.", url: "https://jobs.dou.ua/companies/swarmer/vacancies/" },
    momentum: "$15M U.S.-led Series A in September 2025; software has supported more than 100,000 battlefield missions.",
    description: "Collaborative autonomy software that coordinates large groups of unmanned systems.",
    answer: "Swarmer is a Ukrainian-born defense technology company whose drone-swarm software has supported more than 100,000 combat missions. It raised a $15 million U.S.-led Series A in 2025.",
    website: "https://getswarmer.com/",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Swarmer’s official history says it was founded in response to Ukrainian battlefield needs. Its software entered combat operations in 2024 and was shaped by continuous deployment with Ukrainian units.",
    founders: [
      { name: "Serhii Kupriienko", role: "Co-founder and Global CEO", linkedin: "https://www.linkedin.com/in/serhii-kupriienko-80383a27", connectionSummary: "Ukraine-based co-founder who led AI and computer-vision teams before Swarmer." },
      { name: "Alex Fink", role: "Co-founder and U.S. CEO", linkedin: "https://www.linkedin.com/in/temuchin43", connectionSummary: "U.S.-based co-founder scaling Swarmer with Western defense partners." },
    ],
    sources: [
      { label: "Swarmer history and leadership", publisher: "Swarmer", url: "https://getswarmer.com/about/", supports: ["founders", "Ukraine connection", "missions", "deployment", "company history"] },
      { label: "Swarmer announces $15M Series A", publisher: "Swarmer", url: "https://www.linkedin.com/posts/getswarmer_swarmer-ukraines-leading-drone-autonomy-activity-7373649376113684480-zcXl", supports: ["funding", "investors", "momentum"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "holywater",
    name: "HOLYWATER",
    logo: "/logos/holywater.png",
    foundedYear: 2020,
    status: "Active",
    location: "Kyiv · Los Angeles",
    ukrainePresence: "Founded and headquartered in Kyiv",
    focus: "Media · AI entertainment",
    sectors: ["Media", "Artificial intelligence", "Consumer", "Entertainment"],
    tags: ["$22M Series A", "Fox partner", "85M users"],
    stage: { label: "Series A", detail: "$22M Series A led by Horizon Capital, announced in January 2026.", source: "https://www.holywater.tech/blog/holywater-raises-record-22-million-to-turn-microdramas-into-mainstream-entertainment-in-the-u-s" },
    hiring: { status: "Hiring", detail: "Current roles across product, engineering, content, finance, and growth.", url: "https://jobs.dou.ua/companies/holy-water/vacancies/" },
    momentum: "$22M Series A in January 2026 after doubling 2025 revenue, reaching 85M users, and signing a 200-series agreement with Fox Entertainment.",
    description: "A mobile-first entertainment platform for vertical series, books, and AI-generated streaming.",
    answer: "HOLYWATER is a Kyiv-founded entertainment technology company that raised a $22 million Series A in 2026 after doubling revenue and expanding its U.S. microdrama partnerships.",
    website: "https://holywater.tech/",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "HOLYWATER describes itself as born in Ukraine and maintains its headquarters in Kyiv while building for U.S. and global entertainment markets.",
    founders: [
      { name: "Bogdan Nesvit", role: "Co-founder and Co-CEO", linkedin: "https://www.linkedin.com/in/bogdannesvit", connectionSummary: "Ukrainian co-founder leading HOLYWATER’s global media strategy." },
      { name: "Anatolii Kasianov", role: "Co-founder and Co-CEO", linkedin: "https://www.linkedin.com/in/anatolii-kasianov", connectionSummary: "Ukrainian technical co-founder who built the company’s early product stack." },
    ],
    sources: [
      { label: "HOLYWATER raises $22M", publisher: "HOLYWATER", url: "https://www.holywater.tech/blog/holywater-raises-record-22-million-to-turn-microdramas-into-mainstream-entertainment-in-the-u-s", supports: ["funding", "momentum", "founders", "U.S. expansion"] },
      { label: "HOLYWATER funding and growth", publisher: "Axios", url: "https://www.axios.com/2026/01/15/holywater-microdrama-app-funding", supports: ["Ukraine connection", "funding", "market", "product"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "farsight-vision",
    name: "Farsight Vision",
    logo: "/logos/farsight-vision.png",
    foundedYear: 2023,
    status: "Active",
    location: "Lviv · Tallinn",
    ukrainePresence: "Used by more than 100 Ukrainian defense units",
    focus: "Defense · Geospatial intelligence",
    sectors: ["Defense", "Geospatial", "Drones", "Artificial intelligence"],
    tags: ["Defense", "€7.2M seed", "Estonia–Ukraine"],
    stage: { label: "Seed", detail: "€7.2M seed round led by Final Frontier and joined by Axon and SmartCap.", source: "https://finalfrontier.vc/newsroom/11022026" },
    hiring: { status: "Hiring", detail: "The company maintains an active public vacancies portal.", url: "https://farsightvision.hurma.work/public-vacancies?lang=en" },
    momentum: "€7.2M seed in February 2026 led by Final Frontier, with participation from Axon and Estonia’s SmartCap Defence Fund, after adding 1,500 accounts in 2025.",
    description: "Geospatial intelligence software for drone teams operating in GPS-denied environments.",
    answer: "Farsight Vision is a Ukrainian-Estonian defense startup whose mapping and navigation software is used by more than 100 Ukrainian units. It raised a €7.2 million seed round in 2026.",
    website: "https://fsv.global/en",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Farsight Vision was launched by Ukrainian founders, operates from Lviv and Tallinn, and builds directly with Ukrainian defense and security units.",
    founders: [
      { name: "Viktoriia Yaremchuk", role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/viktoriia-yaremchuk-3ba80116", connectionSummary: "Ukrainian co-founder leading the company from its Lviv and Tallinn bases." },
      { name: "Volodymyr Nepiuk", role: "Co-founder and CTO", linkedin: "https://www.linkedin.com/in/vnepyuk", connectionSummary: "Ukrainian technical co-founder building battlefield geospatial tools." },
    ],
    sources: [
      { label: "Farsight Vision company story", publisher: "Farsight Vision", url: "https://fsv.global/en/about-us", supports: ["founders", "Ukraine connection", "locations", "product", "users"] },
      { label: "Farsight Vision raises €7.2M", publisher: "Final Frontier", url: "https://finalfrontier.vc/newsroom/11022026", supports: ["funding", "Western investors", "momentum"] },
    ],
    lastReviewed: SITE_UPDATED_AT,
  },
  {
    slug: "carmoola",
    name: "Carmoola",
    logo: "/logos/carmoola.png",
    foundedYear: 2021,
    status: "Active",
    location: "London",
    focus: "Fintech · Car finance",
    sectors: ["Fintech", "Consumer finance", "Automotive"],
    tags: ["£300M facility", "UK fintech", "Fast growth"],
    stage: { label: "Series A", detail: "Latest named equity stage is Series A; later capital includes large asset-backed debt facilities.", source: "https://www.carmoola.co.uk/blog/carmoola-series-a" },
    hiring: { status: "Hiring", detail: "Recent public hiring signals include customer operations and growth roles in London.", url: "https://www.linkedin.com/company/carmoola/jobs" },
    momentum: "£300M asset-backed debt facility in June 2025, tripling lending capacity as customer numbers doubled year over year.",
    description: "A mobile-first direct lender that simplifies and accelerates UK car financing.",
    answer: "Carmoola is a half-British, half-Ukrainian car-finance platform that secured a £300 million asset-backed debt facility in 2025 to scale across the UK.",
    website: "https://www.carmoola.co.uk/",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Carmoola was co-founded by Ukrainian engineering leaders Roman Sumnikov and Igor Gordiichuk alongside British founders Aidan and Amy Rushby.",
    founders: [
      { name: "Aidan Rushby", role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/aidanrushby", connectionSummary: "British co-founder who built Carmoola with a British-Ukrainian founding team." },
      { name: "Amy Rushby", role: "Co-founder", linkedin: "https://www.linkedin.com/in/amyrushby735", connectionSummary: "British co-founder of Carmoola’s cross-border founding team." },
      { name: "Roman Sumnikov", role: "Co-founder", linkedin: "https://www.linkedin.com/in/rsumnikov", connectionSummary: "Ukrainian engineering co-founder." },
      { name: "Igor Gordiichuk", role: "Co-founder", linkedin: "https://www.linkedin.com/in/igor-gordiichuk", connectionSummary: "Ukrainian engineering co-founder." },
    ],
    sources: [
      { label: "Carmoola secures £300M facility", publisher: "Carmoola", url: "https://www.carmoola.co.uk/news/carmoola-secures-300m-abs-debt-facility", supports: ["financing", "momentum", "Western ties", "growth"] },
      { label: "Carmoola team and milestones", publisher: "Carmoola", url: "https://www.carmoola.co.uk/about-us", supports: ["founders", "company history", "traction", "location"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "earth-ai",
    name: "EARTH AI",
    logo: "/logos/earth-ai.png",
    foundedYear: 2017,
    status: "Active",
    location: "San Mateo · Australia",
    focus: "AI · Critical minerals",
    sectors: ["Artificial intelligence", "Mining", "Climate", "Industrial technology"],
    tags: ["YC S19", "$20M Series B", "Critical minerals"],
    stage: { label: "Series B", detail: "$20M Series B for AI-driven mineral exploration, announced in January 2025.", source: "https://www.prnewswire.com/news-releases/earth-ai-closes-oversubscribed-round-raising-20m-for-ai-driven-mineral-exploration-302360289.html" },
    hiring: { status: "Hiring", detail: "Current signals include AI engineering, geochemistry, and field roles in Australia.", url: "https://au.seek.com/Earth-AI-jobs/in-All-Sydney-NSW" },
    momentum: "$20M Series B in January 2025 followed by multiple discoveries of critical-mineral deposits in Australia.",
    description: "AI-driven mineral exploration and low-disturbance drilling for critical metal deposits.",
    answer: "EARTH AI is an Australian-U.S. critical-minerals company founded by Ukrainian geologist Roman Teslyuk. It raised a $20 million Series B and announced multiple mineral discoveries in 2025.",
    website: "https://earth-ai.com/",
    accelerator: { name: "Y Combinator", batch: "Summer 2019", profile: "https://www.ycombinator.com/companies/earth-ai" },
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Founder Roman Teslyuk studied geology in Lviv, worked in Ukraine, and represented Ukraine in national and international geology competitions before building EARTH AI abroad.",
    founders: [
      { name: "Roman Teslyuk", role: "Founder and CEO", linkedin: "https://www.linkedin.com/in/roman-teslyuk-a344881a", connectionSummary: "Ukrainian geologist educated at Ivan Franko National University of Lviv." },
    ],
    sources: [
      { label: "EARTH AI raises $20M", publisher: "EARTH AI", url: "https://www.prnewswire.com/news-releases/earth-ai-closes-oversubscribed-round-raising-20m-for-ai-driven-mineral-exploration-302360289.html", supports: ["funding", "momentum", "technology", "founder"] },
      { label: "EARTH AI company profile", publisher: "Y Combinator", url: "https://www.ycombinator.com/companies/earth-ai", supports: ["company", "batch", "founder", "location", "traction"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "infisical",
    name: "Infisical",
    logo: "/logos/infisical.png",
    foundedYear: 2022,
    status: "Active",
    location: "San Francisco",
    focus: "Security · Developer infrastructure",
    sectors: ["Cybersecurity", "Developer tools", "Open source", "Enterprise software"],
    tags: ["YC W23", "$16M Series A", "Open source"],
    stage: { label: "Series A", detail: "$16M Series A led by Elad Gil, announced in June 2025.", source: "https://www.prnewswire.com/news-releases/infisical-secures-16m-series-a-to-redefine-enterprise-secrets-identity-and-access-management-302475063.html" },
    hiring: { status: "Hiring", detail: "The official careers page lists current opportunities.", url: "https://infisical.com/careers" },
    momentum: "$16M Series A in June 2025 after reaching cash-flow positivity and enterprise adoption.",
    description: "Open-source security infrastructure for secrets, certificates, and privileged access.",
    answer: "Infisical is a San Francisco security-infrastructure company co-founded by Ukrainian entrepreneur Vlad Matsiiako. It raised a $16 million Series A in 2025 after becoming cash-flow positive.",
    website: "https://infisical.com/",
    accelerator: { name: "Y Combinator", batch: "Winter 2023", profile: "https://www.ycombinator.com/companies/infisical" },
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Co-founder and CEO Vlad Matsiiako publicly identifies as Ukrainian and is building Infisical from Silicon Valley with a global founding team.",
    founders: [
      { name: "Vlad Matsiiako", role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/vmatsiiako", connectionSummary: "Ukrainian co-founder building security infrastructure in Silicon Valley." },
      { name: "Tony Dang", role: "Co-founder", linkedin: "https://www.linkedin.com/in/tony-d-a104a6125", connectionSummary: "Co-founded Infisical with Vlad Matsiiako and Maidul Islam." },
      { name: "Maidul Islam", role: "Co-founder", linkedin: "https://www.linkedin.com/in/maidul98", connectionSummary: "Co-founded Infisical’s open-source security platform." },
    ],
    sources: [
      { label: "Infisical raises $16M Series A", publisher: "Infisical", url: "https://infisical.com/blog/series-a", supports: ["funding", "momentum", "cash-flow status", "customers"] },
      { label: "Infisical company profile", publisher: "Y Combinator", url: "https://www.ycombinator.com/companies/infisical", supports: ["company", "batch", "founders", "location", "team size"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "the-fourth-law",
    name: "The Fourth Law",
    logo: "/logos/the-fourth-law.png",
    foundedYear: 2023,
    status: "Active",
    location: "Kyiv",
    ukrainePresence: "Battle-proven with more than 70 Ukrainian combat units",
    focus: "Defense · Autonomous targeting",
    sectors: ["Defense", "Autonomy", "Computer vision", "Drones"],
    tags: ["Defense", "NATO-codified", "Axon-backed"],
    stage: { label: "Strategic round", detail: "Axon-backed strategic investment; amount and conventional venture stage were not disclosed.", source: "https://thefourthlaw.ai/" },
    hiring: { status: "Hiring", detail: "The company lists dozens of current technical and operational roles.", url: "https://jobs.dou.ua/companies/thefourthlaw-ai/vacancies/" },
    momentum: "Strategic Axon investment in 2026; NATO-codified autonomy modules deployed across more than 70 Ukrainian combat units.",
    description: "Autonomy modules and terminal guidance for drones operating through jamming and signal loss.",
    answer: "The Fourth Law is a Ukrainian defense startup building NATO-codified autonomous guidance systems used by more than 70 Ukrainian combat units and backed by U.S. public-safety company Axon.",
    website: "https://thefourthlaw.ai/",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "The company was founded in Ukraine by Yaroslav Azhnyuk to solve frontline autonomy needs and develops its systems through a continuous feedback loop with Ukrainian military units.",
    founders: [
      { name: "Yaroslav Azhnyuk", role: "Founder and CEO", linkedin: "https://www.linkedin.com/in/yaroslavazhnyuk", connectionSummary: "Ukrainian serial entrepreneur building autonomous defense systems in Kyiv." },
    ],
    sources: [
      { label: "The Fourth Law company profile", publisher: "The Fourth Law", url: "https://www.linkedin.com/company/thefourthlaw", supports: ["founder", "Ukraine connection", "deployments", "NATO codification", "partners"] },
      { label: "The Fourth Law secures strategic investment", publisher: "Yaroslav Azhnyuk", url: "https://www.linkedin.com/posts/yaroslavazhnyuk_great-news-the-fourth-law-has-secured-an-activity-7429098101505748992-MiIU", supports: ["investment", "Axon partnership", "U.S. expansion", "momentum"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "frontline-robotics",
    name: "Frontline Robotics",
    logo: "/logos/frontline-robotics.png",
    foundedYear: 2023,
    status: "Active",
    location: "Ukraine · Germany",
    ukrainePresence: "Systems used by more than 60 Ukrainian units",
    focus: "Defense · Robotic systems",
    sectors: ["Defense", "Robotics", "Drones", "Manufacturing"],
    tags: ["Defense", "NATO-codified", "German production"],
    stage: { label: "Seed", detail: "$800K seed round followed by a strategic investment from Quantum Systems.", source: "https://quantum-systems.com/us/news/quantum-systems-and-frontline-strategic-investment/" },
    hiring: { status: "Hiring", detail: "The official company career page lists current roles.", url: "https://www.frontline-robotics.tech/career" },
    momentum: "Quantum Systems investment followed by a German government-backed production joint venture targeting more than 10,000 systems annually.",
    description: "Battlefield-proven robotic and unmanned systems co-produced in Ukraine and Germany.",
    answer: "Frontline Robotics is a Ukrainian defense company whose NATO-codified systems are used by more than 60 units. It formed a German production venture with Quantum Systems in 2026.",
    website: "https://www.frontline-robotics.tech/en",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Frontline Robotics develops systems in direct response to Ukrainian battlefield needs and is transferring combat-proven designs into allied European production.",
    founders: [
      { name: "Yevhenii Tretiak", role: "Founder and CEO", linkedin: "https://www.linkedin.com/in/yevhenii-tretiak-943a67ab", connectionSummary: "Ukrainian founder scaling battlefield robotics through a German manufacturing partnership." },
    ],
    sources: [
      { label: "Quantum Systems invests in Frontline Robotics", publisher: "Quantum Systems", url: "https://quantum-systems.com/us/wp-content/uploads/2025/08/20250716_PR_QS_Frontline-Strategic-Investment_EN.pdf", supports: ["investment", "founder", "Ukraine connection", "products"] },
      { label: "German-Ukrainian production joint venture", publisher: "Quantum Systems", url: "https://quantum-systems.com/wp-content/uploads/2026/02/260213_PR_QFI_Zelenskyy_Final_ENG.pdf", supports: ["Western ties", "production", "capacity", "momentum"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "haiqu",
    name: "Haiqu",
    logo: "/logos/haiqu.png",
    foundedYear: 2023,
    status: "Active",
    location: "New York · London · Lviv · Waterloo",
    ukrainePresence: "Team and office presence in Lviv",
    focus: "Quantum computing · Infrastructure",
    sectors: ["Quantum computing", "Developer tools", "Deep tech"],
    tags: ["$11M seed", "Deep tech", "US–Ukraine"],
    stage: { label: "Seed", detail: "$11M seed round led by Primary Venture Partners, announced in January 2026.", source: "https://0e190a550a8c4c8c4b93-fcd009c875a5577fd4fe2f5b7e3bf4eb.ssl.cf2.rackcdn.com/EINPresswire-882655745-haiqu-raises-11-million-in-seed-round-to-enable-near-term-quantum-use-cases-with-new-operating-system-1.pdf" },
    hiring: { status: "Hiring", detail: "Recent public roles include product marketing for its quantum software platform.", url: "https://www.linkedin.com/company/haiquai/jobs" },
    momentum: "$11M seed in January 2026 led by Primary Venture Partners, with backing from Toyota Ventures and other Western investors.",
    description: "A hardware-aware operating system that makes quantum experiments repeatable and practical.",
    answer: "Haiqu is a U.S.-Ukrainian quantum software company with a team in Lviv. It raised an $11 million seed round in 2026 to bring its quantum operating system to market.",
    website: "https://haiqu.ai/",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Haiqu was co-founded by Ukrainian deep-tech entrepreneur Mykola Maksymenko, maintains a Lviv presence, and is publicly recognized as a U.S.-Ukrainian company.",
    founders: [
      { name: "Mykola Maksymenko", role: "Co-founder and CTO", linkedin: "https://www.linkedin.com/in/mykola-maksymenko-4448a839/", connectionSummary: "Ukrainian quantum researcher and technology-management leader with roots in Lviv." },
      { name: "Richard Givhan", role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/richard-givhan/", connectionSummary: "U.S. co-founder scaling Haiqu’s quantum software globally." },
    ],
    sources: [
      { label: "Haiqu raises $11M seed round", publisher: "Haiqu", url: "https://haiqu.ai/insights", supports: ["funding", "investors", "momentum", "product"] },
      { label: "Haiqu team and locations", publisher: "Haiqu", url: "https://haiqu.ai/team", supports: ["founders", "locations", "Lviv presence", "company"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "9-mothers",
    name: "9 Mothers",
    logo: "/logos/9-mothers.png",
    foundedYear: 2024,
    status: "Active",
    location: "Austin, Texas",
    focus: "Defense · Counter-UAS",
    sectors: ["Defense", "Counter-UAS", "Robotics", "Artificial intelligence"],
    tags: ["YC Spring 2026", "Defense", "$1.6M sales"],
    stage: { label: "Pre-seed · YC", detail: "Early institutional stage following Y Combinator’s Spring 2026 batch.", source: "https://www.ycombinator.com/companies/9-mothers-corporation" },
    hiring: { status: "Hiring", detail: "Current Austin roles span perception, robotics, hardware, and embedded systems.", url: "https://9mothers.com/careers" },
    momentum: "$1.6M in reported sales and delivery work for the U.S. Department of War before completing YC’s Spring 2026 batch.",
    description: "Counter-drone systems and AI mission software built for modern defense operations.",
    answer: "9 Mothers is an Austin counter-drone startup with $1.6 million in reported sales and U.S. defense delivery experience. Co-founder Roman Khomenko has documented roots in Ukraine.",
    website: "https://9mothers.com/",
    accelerator: { name: "Y Combinator", batch: "Spring 2026", profile: "https://www.ycombinator.com/companies/9-mothers-corporation" },
    connectionLabel: "Ukraine-connected",
    inclusionReason: "Co-founder Roman Khomenko has documented education and work roots in Ukraine and lists Ukrainian as a native language. The company says its counter-drone mission was motivated by the Russia–Ukraine war.",
    founders: [
      { name: "Roman Khomenko", role: "Co-founder", linkedin: "https://www.linkedin.com/in/dowakin/", connectionSummary: "Studied in Kharkiv, worked in Ukraine, and lists Ukrainian as a native language." },
      { name: "Russell Smith", role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/russgsmith", connectionSummary: "Austin-based co-founder leading 9 Mothers." },
      { name: "Bogdan Pyzh", role: "Co-founder", linkedin: "https://www.linkedin.com/in/bogdan-pyzh-b5b77388", connectionSummary: "Austin-based co-founder building 9 Mothers’ counter-drone systems." },
    ],
    sources: [
      { label: "9 Mothers company profile", publisher: "Y Combinator", url: "https://www.ycombinator.com/companies/9-mothers-corporation", supports: ["company", "batch", "sales", "location", "product", "founder"] },
      { label: "Roman Khomenko profile", publisher: "LinkedIn", url: "https://www.linkedin.com/in/dowakin/", supports: ["Ukraine connection", "education", "language"] },
    ],
    lastReviewed: SITE_UPDATED_AT,
  },
  {
    slug: "prox",
    name: "Prox",
    logo: "/logos/prox.png",
    foundedYear: 2025,
    status: "Active",
    location: "San Francisco",
    focus: "AI · Technical support",
    sectors: ["Artificial intelligence", "Customer support", "Industrial technology"],
    tags: ["YC Fall 2025", "AI", "Bloomberg Beta"],
    stage: { label: "Pre-seed · YC", detail: "Early-stage backing from YC, Bloomberg Beta, Burst Capital, and operators from major AI companies; amount undisclosed.", source: "https://useprox.com/" },
    hiring: { status: "Hiring", detail: "Current roles include engineering, go-to-market, operations, and creative production.", url: "https://www.ycombinator.com/companies/prox/jobs" },
    momentum: "Fresh 2026 backing from Bloomberg Beta, Burst VC, Weights & Biases, and operators from OpenAI and Microsoft.",
    description: "Multimodal AI support for companies that make complex physical products.",
    answer: "Prox is a Ukrainian-founded AI support company backed in 2026 by Bloomberg Beta, Burst VC, Weights & Biases, and operators from OpenAI and Microsoft.",
    website: "https://useprox.com/",
    accelerator: { name: "Y Combinator", batch: "Fall 2025", profile: "https://www.ycombinator.com/companies/prox" },
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "AIN identifies co-founders Dima Yanovsky and Gregory Makodzeba as Ukrainians and documents the company’s Ukrainian roots.",
    founders: [
      { name: "Dima Yanovsky", alternateNames: ["Dmytro Yanovskyi"], role: "Co-founder", linkedin: "https://www.linkedin.com/in/yanovsk/", connectionSummary: "Identified as Ukrainian in an AIN founder interview." },
      { name: "Gregory Makodzeba", alternateNames: ["Hryhoriy Makodzeba"], role: "Co-founder", linkedin: "https://www.linkedin.com/in/gregory-makodzeba/", connectionSummary: "Identified as Ukrainian in an AIN founder interview." },
    ],
    sources: [
      { label: "Prox company profile", publisher: "Y Combinator", url: "https://www.ycombinator.com/companies/prox", supports: ["company", "batch", "location", "product", "founders"] },
      { label: "Interview with Prox co-founder Dmytro Yanovskyi", publisher: "AIN", url: "https://en.ain.ua/2026/05/26/ai-startup-with-ukrainian-roots-prox-got-funding-from-y-combinator/", supports: ["Ukraine connection", "funding", "Western investors", "founder aliases"] },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "aisdr",
    name: "AiSDR",
    logo: "/logos/aisdr.png",
    foundedYear: 2023,
    status: "Active",
    location: "San Francisco · Lviv",
    ukrainePresence: "Team presence in Lviv, Ukraine",
    focus: "AI · Sales",
    sectors: ["Artificial intelligence", "Sales technology", "B2B software"],
    tags: ["YC S23", "AI sales", "Lviv team"],
    stage: { label: "Seed", detail: "$3M seed round in September 2023; a later 2026 financing signal has no confirmed public stage.", source: "https://jobs.dou.ua/companies/aisdr-inc/" },
    hiring: { status: "No public openings", detail: "The latest public vacancy found was inactive when checked.", url: "https://jobs.dou.ua/companies/aisdr-inc/" },
    momentum: "Reported $2M in 2024 revenue and a new financing event in April 2026 while continuing to build from Lviv and San Francisco.",
    description: "AI sales agents that handle prospecting, follow-ups, and meeting booking.",
    answer: "AiSDR is an AI sales company founded by Ukrainian brothers Yuriy and Oleg Zaremba. It reported $2 million in 2024 revenue and a new financing event in 2026.",
    website: "https://aisdr.com/",
    accelerator: { name: "Y Combinator", batch: "Summer 2023", profile: "https://www.ycombinator.com/companies/aisdr" },
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "AIN documents AiSDR as a project founded by Ukrainian brothers Yuriy and Oleg Zaremba, with its team operating from Lviv.",
    founders: [
      { name: "Yuriy Zaremba", role: "Co-founder and CEO", linkedin: "https://www.linkedin.com/in/yuriy-zaremba", connectionSummary: "Ukrainian co-founder building AiSDR from Lviv." },
      { name: "Oleg Zaremba", role: "Co-founder", linkedin: "https://www.linkedin.com/in/oleg-zaremba", connectionSummary: "Ukrainian co-founder building AiSDR from Lviv." },
    ],
    sources: [
      { label: "AiSDR company profile", publisher: "Y Combinator", url: "https://www.ycombinator.com/companies/aisdr", supports: ["company", "batch", "location", "product", "founders"] },
      { label: "Interview with AiSDR co-founder Yuriy Zaremba", publisher: "AIN", url: "https://en.ain.ua/2024/02/13/interview-with-yuriy-zaremba-from-aisdr/", supports: ["Ukraine connection", "Lviv presence", "company background", "funding"] },
      { label: "AiSDR 2024 year in review", publisher: "AiSDR", url: "https://aisdr.com/blog/aisdr-2024-year-in-review/", supports: ["revenue growth", "team growth", "product momentum"] },
      { label: "AiSDR funding and revenue profile", publisher: "CB Insights", url: "https://www.cbinsights.com/company/aisdr/financials", supports: ["2024 revenue", "2026 financing signal"] },
    ],
    lastReviewed: SITE_UPDATED_AT,
  },
  {
    slug: "sparkles",
    name: "Sparkles",
    logo: "/logos/sparkles.png",
    foundedYear: 2025,
    status: "Active",
    location: "San Francisco",
    focus: "AI · Developer tools",
    sectors: ["Artificial intelligence", "Developer tools", "Collaboration software"],
    tags: ["YC Winter 2026", "AI", "Developer tools"],
    stage: { label: "Seed", detail: "$3.5M raised from YC, Moonfire Ventures, and technology operators and angels.", source: "https://www.ycombinator.com/companies/sparkles/jobs" },
    hiring: { status: "Hiring", detail: "Hiring a founding product engineer in San Francisco.", url: "https://www.ycombinator.com/companies/sparkles/jobs" },
    momentum: "Selected for Y Combinator’s Winter 2026 batch and launched an AI workspace for safely proposing changes to existing codebases.",
    description: "An AI workspace that helps teams safely make changes to existing codebases.",
    answer: "Sparkles is a San Francisco developer-tools startup founded by Ukrainian entrepreneur Daniil Bekirov. The company joined Y Combinator’s Winter 2026 batch with an AI workspace for reviewed codebase changes.",
    website: "https://sparkles.dev/",
    accelerator: { name: "Y Combinator", batch: "Winter 2026", profile: "https://www.ycombinator.com/companies/sparkles" },
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Founder Daniil Bekirov self-identifies with Ukraine in his official Y Combinator founder biography.",
    founders: [
      {
        name: "Ai Daniil Bekirov",
        alternateNames: ["Daniil Bekirov"],
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/aidaniilbekirov",
        connectionSummary: "Self-identifies with Ukraine in his official Y Combinator founder biography.",
      },
    ],
    sources: [
      {
        label: "Sparkles company and founder profile",
        publisher: "Y Combinator",
        url: "https://www.ycombinator.com/companies/sparkles",
        supports: ["company", "batch", "founded year", "location", "product", "founder", "Ukraine connection"],
      },
    ],
    lastReviewed: SITE_UPDATED_AT,
  },
];

export function getStartup(slug: string) {
  return startups.find((startup) => startup.slug === slug);
}
