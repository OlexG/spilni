export type StartupType = "Defense" | "Commercial" | "Dual-use";
export type BayConnection = "Bay Area based" | "Silicon Valley program";

export type Startup = {
  name: string;
  monogram: string;
  type: StartupType;
  connection: BayConnection;
  location: string;
  focus: string;
  description: string;
  website: string;
  source: string;
  featured?: boolean;
};

export const startups: Startup[] = [
  {
    name: "Grammarly",
    monogram: "G",
    type: "Commercial",
    connection: "Bay Area based",
    location: "San Francisco",
    focus: "AI · Productivity",
    description: "AI communication assistance created by Ukrainian founders and scaled into a global product company.",
    website: "https://www.grammarly.com/",
    source: "https://www.grammarly.com/about",
    featured: true,
  },
  {
    name: "People.ai",
    monogram: "P",
    type: "Commercial",
    connection: "Bay Area based",
    location: "San Francisco",
    focus: "AI · Enterprise",
    description: "Revenue intelligence software founded by Ukrainian entrepreneur Oleg Rogynskyy.",
    website: "https://www.people.ai/",
    source: "https://www.people.ai/about-us",
    featured: true,
  },
  {
    name: "Petcube",
    monogram: "P",
    type: "Commercial",
    connection: "Bay Area based",
    location: "San Francisco",
    focus: "Consumer · Hardware",
    description: "Connected pet cameras and smart devices, founded in Kyiv and expanded from San Francisco.",
    website: "https://petcube.com/",
    source: "https://petcube.com/company/",
  },
  {
    name: "3DLOOK",
    monogram: "3D",
    type: "Commercial",
    connection: "Bay Area based",
    location: "Bay Area",
    focus: "Computer vision · Fashion",
    description: "Mobile body-scanning technology with Ukrainian roots for apparel, wellness, and commerce.",
    website: "https://3dlook.ai/",
    source: "https://3dlook.ai/about-us/",
  },
  {
    name: "Awesomic",
    monogram: "A",
    type: "Commercial",
    connection: "Bay Area based",
    location: "San Francisco",
    focus: "Design · Future of work",
    description: "A design subscription platform founded in Ukraine and backed by Y Combinator.",
    website: "https://www.awesomic.com/",
    source: "https://www.ycombinator.com/companies/awesomic",
  },
  {
    name: "Bayware",
    monogram: "B",
    type: "Commercial",
    connection: "Bay Area based",
    location: "San Francisco Bay Area",
    focus: "Cloud · Infrastructure",
    description: "Cloud networking infrastructure built between teams in the Bay Area and Kyiv.",
    website: "https://www.bayware.io/",
    source: "https://www.bayware.io/about-us/",
  },
  {
    name: "Swarmer",
    monogram: "S",
    type: "Defense",
    connection: "Silicon Valley program",
    location: "Palo Alto · DTSA",
    focus: "Autonomy · UAV swarms",
    description: "Collaborative autonomy software that coordinates groups of unmanned systems.",
    website: "https://www.getswarmer.com/",
    source: "https://www.sri.com/press/story/meet-the-startups-reinventing-the-defense-innovation-playbook/",
    featured: true,
  },
  {
    name: "HIMERA",
    monogram: "H",
    type: "Defense",
    connection: "Silicon Valley program",
    location: "Palo Alto · DTSA",
    focus: "Resilient communications",
    description: "Secure, interference-resistant communications for teams, sensors, and unmanned systems.",
    website: "https://himeratech.com/",
    source: "https://www.sri.com/press/story/meet-the-startups-reinventing-the-defense-innovation-playbook/",
    featured: true,
  },
  {
    name: "Farsight Vision",
    monogram: "FV",
    type: "Dual-use",
    connection: "Silicon Valley program",
    location: "Palo Alto · DTSA",
    focus: "Geospatial · Computer vision",
    description: "Turns drone imagery into high-precision terrain models for planning in difficult environments.",
    website: "https://farsightvision.com/",
    source: "https://www.sri.com/press/story/meet-the-startups-reinventing-the-defense-innovation-playbook/",
  },
  {
    name: "Moodro",
    monogram: "M",
    type: "Defense",
    connection: "Silicon Valley program",
    location: "Palo Alto · DTSA",
    focus: "Counter-UAS · Sensing",
    description: "Counter-drone systems shaped by operational needs and introduced to the Valley through DTSA.",
    website: "https://moodro.com/",
    source: "https://www.sri.com/press/story/meet-the-startups-reinventing-the-defense-innovation-playbook/",
  },
];
