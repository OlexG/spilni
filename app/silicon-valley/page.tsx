import type { Metadata } from "next";
import StartupCollectionPage from "@/components/StartupCollectionPage";
import { startups } from "@/lib/startups";

const companies = startups.filter((startup) => (
  startup.location.includes("San Francisco") || startup.accelerator?.name === "Y Combinator"
));

export const metadata: Metadata = {
  title: "Startups with Ukrainian Founders in Silicon Valley",
  description: "Startups with Ukrainian founders and a Bay Area base or Y Combinator connection.",
  alternates: { canonical: "/silicon-valley" },
  openGraph: { title: "Startups with Ukrainian Founders in Silicon Valley | Spilni", description: "Startups with Ukrainian founders and a Bay Area or Y Combinator connection.", url: "/silicon-valley", type: "website", siteName: "Spilni", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function SiliconValleyPage() {
  return (
    <StartupCollectionPage
      title="Startups with Ukrainian founders in Silicon Valley"
      kicker="Ecosystem index"
      description="Companies with a Bay Area base or a verified Y Combinator connection."
      definition="A Silicon Valley connection means a listed San Francisco location or verified Y Combinator participation; it does not necessarily mean the company is headquartered in the Bay Area."
      path="/silicon-valley"
      companies={companies}
    />
  );
}
