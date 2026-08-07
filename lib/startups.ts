export const DIRECTORY_REVIEWED_AT = "2026-08-07";

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

export type Startup = {
  slug: string;
  name: string;
  alternateNames?: string[];
  logo: string;
  batch: string;
  foundedYear: number;
  status: "Active";
  location: string;
  ukrainePresence?: string;
  focus: string;
  sectors: string[];
  description: string;
  answer: string;
  website: string;
  ycProfile: string;
  connectionLabel: "Ukrainian-founded" | "Ukraine-connected";
  inclusionReason: string;
  founders: StartupFounder[];
  sources: StartupSource[];
  lastReviewed: string;
};

export const startups: Startup[] = [
  {
    slug: "9-mothers",
    name: "9 Mothers",
    logo: "/logos/9-mothers.png",
    batch: "Spring 2026",
    foundedYear: 2024,
    status: "Active",
    location: "Austin, Texas",
    focus: "Defense · Counter-UAS",
    sectors: ["Defense", "Counter-UAS", "Robotics", "Artificial intelligence"],
    description: "Counter-drone systems and AI mission software built for modern defense operations.",
    answer: "9 Mothers is an Austin defense startup in Y Combinator’s Spring 2026 batch. Its first product, EDDA, is a compact counter-drone system designed to stop small suicide drones.",
    website: "https://9mothers.com/",
    ycProfile: "https://www.ycombinator.com/companies/9-mothers-corporation",
    connectionLabel: "Ukraine-connected",
    inclusionReason: "Co-founder Roman Khomenko has documented education and work roots in Ukraine and lists Ukrainian as a native language. The company also says its work was motivated by the Russia–Ukraine war.",
    founders: [
      {
        name: "Roman Khomenko",
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/dowakin/",
        connectionSummary: "Studied in Kharkiv, worked in Ukraine, and lists Ukrainian as a native language.",
      },
    ],
    sources: [
      {
        label: "9 Mothers company profile",
        publisher: "Y Combinator",
        url: "https://www.ycombinator.com/companies/9-mothers-corporation",
        supports: ["company", "batch", "founded year", "location", "product", "founders"],
      },
      {
        label: "Roman Khomenko profile",
        publisher: "LinkedIn",
        url: "https://www.linkedin.com/in/dowakin/",
        supports: ["Ukraine connection", "education", "language"],
      },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "sparkles",
    name: "Sparkles",
    alternateNames: ["Ai Daniil Bekirov"],
    logo: "/logos/sparkles.png",
    batch: "Winter 2026",
    foundedYear: 2025,
    status: "Active",
    location: "San Francisco",
    focus: "AI · Developer tools",
    sectors: ["Artificial intelligence", "Developer tools", "Collaboration software"],
    description: "An AI workspace that helps teams safely make changes to existing codebases.",
    answer: "Sparkles is a San Francisco developer-tools startup in Y Combinator’s Winter 2026 batch. Founder Daniil Bekirov is building an AI workspace that lets non-engineering teammates propose reviewed changes to existing codebases.",
    website: "https://sparkles.dev/",
    ycProfile: "https://www.ycombinator.com/companies/sparkles",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "Founder Daniil Bekirov self-identifies with Ukraine in his official Y Combinator founder biography.",
    founders: [
      {
        name: "Daniil Bekirov",
        alternateNames: ["Ai Daniil Bekirov"],
        role: "Founder",
        linkedin: "https://www.linkedin.com/in/aidaniilbekirov/",
        connectionSummary: "Self-identifies with Ukraine in his official YC founder biography.",
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
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "prox",
    name: "Prox",
    logo: "/logos/prox.png",
    batch: "Fall 2025",
    foundedYear: 2025,
    status: "Active",
    location: "San Francisco",
    focus: "AI · Technical support",
    sectors: ["Artificial intelligence", "Customer support", "Industrial technology"],
    description: "Multimodal AI support for companies that make complex physical products.",
    answer: "Prox is a San Francisco AI startup in Y Combinator’s Fall 2025 batch. Ukrainian founders Dima Yanovsky and Gregory Makodzeba build multimodal technical support for companies that make complex physical products.",
    website: "https://useprox.com/",
    ycProfile: "https://www.ycombinator.com/companies/prox",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "AIN identifies co-founders Dima Yanovsky and Gregory Makodzeba as Ukrainians and documents the company’s Ukrainian roots.",
    founders: [
      {
        name: "Dima Yanovsky",
        alternateNames: ["Dmytro Yanovskyi"],
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/yanovsk/",
        connectionSummary: "Identified as Ukrainian in an AIN founder interview.",
      },
      {
        name: "Gregory Makodzeba",
        alternateNames: ["Hryhoriy Makodzeba"],
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/gregory-makodzeba/",
        connectionSummary: "Identified as Ukrainian in an AIN founder interview.",
      },
    ],
    sources: [
      {
        label: "Prox company profile",
        publisher: "Y Combinator",
        url: "https://www.ycombinator.com/companies/prox",
        supports: ["company", "batch", "founded year", "location", "product", "founders"],
      },
      {
        label: "Interview with Prox co-founder Dmytro Yanovskyi",
        publisher: "AIN",
        url: "https://en.ain.ua/2026/05/26/ai-startup-with-ukrainian-roots-prox-got-funding-from-y-combinator/",
        supports: ["Ukraine connection", "founder aliases", "company background"],
      },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
  {
    slug: "aisdr",
    name: "AiSDR",
    logo: "/logos/aisdr.png",
    batch: "Summer 2023",
    foundedYear: 2023,
    status: "Active",
    location: "San Francisco",
    ukrainePresence: "Team presence in Lviv, Ukraine",
    focus: "AI · Sales",
    sectors: ["Artificial intelligence", "Sales technology", "B2B software"],
    description: "AI sales agents that handle prospecting, follow-ups, and meeting booking.",
    answer: "AiSDR is an AI sales startup in Y Combinator’s Summer 2023 batch. Ukrainian brothers Yuriy and Oleg Zaremba founded the company to automate prospecting, follow-ups, and meeting booking.",
    website: "https://aisdr.com/",
    ycProfile: "https://www.ycombinator.com/companies/aisdr",
    connectionLabel: "Ukrainian-founded",
    inclusionReason: "AIN documents AiSDR as a project founded by Ukrainian brothers Yuriy and Oleg Zaremba, with its team operating from Lviv.",
    founders: [
      {
        name: "Yuriy Zaremba",
        role: "Co-founder and CEO",
        linkedin: "https://www.linkedin.com/in/yuriy-zaremba",
        connectionSummary: "Ukrainian co-founder building AiSDR from Lviv.",
      },
      {
        name: "Oleg Zaremba",
        role: "Co-founder",
        linkedin: "https://www.linkedin.com/in/oleg-zaremba",
        connectionSummary: "Ukrainian co-founder building AiSDR from Lviv.",
      },
    ],
    sources: [
      {
        label: "AiSDR company profile",
        publisher: "Y Combinator",
        url: "https://www.ycombinator.com/companies/aisdr",
        supports: ["company", "batch", "founded year", "location", "product", "founders"],
      },
      {
        label: "Interview with AiSDR co-founder Yuriy Zaremba",
        publisher: "AIN",
        url: "https://en.ain.ua/2024/02/13/interview-with-yuriy-zaremba-from-aisdr/",
        supports: ["Ukraine connection", "Lviv presence", "company background"],
      },
    ],
    lastReviewed: DIRECTORY_REVIEWED_AT,
  },
];

export function getStartup(slug: string) {
  return startups.find((startup) => startup.slug === slug);
}
