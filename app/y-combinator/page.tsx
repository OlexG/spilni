import type { Metadata } from "next";
import StartupCollectionPage from "@/components/StartupCollectionPage";
import { startups } from "@/lib/startups";

const companies = startups.filter((startup) => startup.accelerator?.name === "Y Combinator");

export const metadata: Metadata = {
  title: "Startups with Ukrainian Founders in Y Combinator",
  description: "Startups with Ukrainian founders and verified Y Combinator profiles.",
  alternates: { canonical: "/y-combinator" },
  openGraph: { title: "Startups with Ukrainian Founders in Y Combinator | Spilni", description: "Startups with Ukrainian founders and verified Y Combinator profiles.", url: "/y-combinator", type: "website", siteName: "Spilni", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

export default function YCombinatorPage() {
  return (
    <StartupCollectionPage
      title="Startups with Ukrainian founders in Y Combinator"
      kicker="Accelerator index"
      description="Companies in the Spilni directory with a verified Y Combinator profile."
      definition="Inclusion here means Y Combinator funded the company; it does not imply that the company is headquartered in Silicon Valley."
      path="/y-combinator"
      companies={companies}
    />
  );
}
