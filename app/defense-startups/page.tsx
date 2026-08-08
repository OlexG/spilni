import type { Metadata } from "next";
import StartupCollectionPage from "@/components/StartupCollectionPage";
import { startups } from "@/lib/startups";

const companies = startups.filter((startup) => startup.sectors.includes("Defense"));

export const metadata: Metadata = {
  title: "Defense Startups with Ukrainian Founders",
  description: "Defense and dual-use startups with Ukrainian founders, including autonomy, drones, counter-UAS, and geospatial intelligence.",
  alternates: { canonical: "/defense-startups" },
  openGraph: { title: "Defense Startups with Ukrainian Founders | Spilni", description: "Defense and dual-use startups with Ukrainian founders.", url: "/defense-startups", type: "website", siteName: "Spilni", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function DefenseStartupsPage() {
  return (
    <StartupCollectionPage
      title="Defense startups with Ukrainian founders"
      kicker="Sector index"
      description="Teams building autonomous systems, counter-drone technology, geospatial intelligence, and other defense capabilities."
      definition="Companies appear here when their public product and sector evidence includes defense technology; Ukraine connection and momentum are verified separately."
      path="/defense-startups"
      companies={companies}
    />
  );
}
