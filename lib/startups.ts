export type Startup = {
  name: string;
  logo: string;
  batch: string;
  location: string;
  focus: string;
  description: string;
  website: string;
  source: string;
  founders: Array<{
    name: string;
    linkedin: string;
  }>;
};

export const startups: Startup[] = [
  {
    name: "9 Mothers",
    logo: "/logos/9-mothers.png",
    batch: "Spring 2026",
    location: "Austin, Texas",
    focus: "Defense · Counter-UAS",
    description: "Counter-drone systems and AI mission software built for modern defense operations.",
    website: "https://9mothers.com/",
    source: "https://www.ycombinator.com/companies/9-mothers-corporation",
    founders: [
      { name: "Roman Khomenko", linkedin: "https://www.linkedin.com/in/dowakin/" },
    ],
  },
  {
    name: "Sparkles",
    logo: "/logos/sparkles.png",
    batch: "Winter 2026",
    location: "San Francisco",
    focus: "AI · Developer tools",
    description: "An AI workspace that helps teams safely make changes to existing codebases.",
    website: "https://sparkles.dev/",
    source: "https://www.ycombinator.com/companies/sparkles",
    founders: [
      { name: "Daniil Bekirov", linkedin: "https://www.linkedin.com/in/aidaniilbekirov/" },
    ],
  },
  {
    name: "Prox",
    logo: "/logos/prox.png",
    batch: "Fall 2025",
    location: "San Francisco",
    focus: "AI · Technical support",
    description: "Multimodal AI support for companies that make complex physical products.",
    website: "https://useprox.com/",
    source: "https://www.ycombinator.com/companies/prox",
    founders: [
      { name: "Dima Yanovsky", linkedin: "https://www.linkedin.com/in/yanovsk/" },
      { name: "Gregory Makodzeba", linkedin: "https://www.linkedin.com/in/gregory-makodzeba/" },
    ],
  },
  {
    name: "AiSDR",
    logo: "/logos/aisdr.png",
    batch: "Summer 2023",
    location: "San Francisco · Lviv",
    focus: "AI · Sales",
    description: "AI sales agents that handle prospecting, follow-ups, and meeting booking.",
    website: "https://aisdr.com/",
    source: "https://www.ycombinator.com/companies/aisdr",
    founders: [
      { name: "Yuriy Zaremba", linkedin: "https://www.linkedin.com/in/yuriy-zaremba" },
      { name: "Oleg Zaremba", linkedin: "https://www.linkedin.com/in/oleg-zaremba" },
    ],
  },
];
