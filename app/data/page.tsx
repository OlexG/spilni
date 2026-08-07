import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Open Startup Directory Data",
  description: "Machine-readable JSON data for Spilni’s sourced directory of Ukrainian Y Combinator startups and founders.",
  alternates: { canonical: "/data", types: { "application/json": "/data/startups.json" } },
  openGraph: { url: "/data", title: "Open Startup Directory Data | Spilni", type: "website" },
};

const sourceUrls = [...new Set(startups.flatMap((startup) => startup.sources.map((source) => source.url)))];
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": "https://spilni.com/data#dataset",
  name: "Ukrainian Y Combinator Startups and Founders",
  description: "A curated dataset of Ukrainian-founded and Ukraine-connected Y Combinator companies, founders, batches, locations, and supporting sources.",
  url: "https://spilni.com/data",
  dateModified: DIRECTORY_REVIEWED_AT,
  creator: { "@id": "https://spilni.com/#organization" },
  isBasedOn: sourceUrls,
  variableMeasured: ["company", "founder", "YC batch", "location", "sector", "Ukraine connection", "source"],
  distribution: {
    "@type": "DataDownload",
    encodingFormat: "application/json",
    contentUrl: "https://spilni.com/data/startups.json",
  },
};

export default function DataPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <article className="content-shell text-page">
        <p className="profile-kicker">Machine-readable directory</p>
        <h1>Open startup data</h1>
        <p className="page-lede">The same sourced records shown on Spilni are available as clean JSON for researchers, journalists, search engines, and AI systems.</p>
        <a className="data-download" href="/data/startups.json">Download startups.json <span>↗</span></a>
        <section>
          <h2>What is included</h2>
          <p>{startups.length} company records with stable URLs, founder names and LinkedIn profiles, YC batches, locations, Ukrainian connection notes, and claim-level source links.</p>
        </section>
        <section>
          <h2>Review status</h2>
          <p>Last reviewed August 7, 2026. Read the <Link href="/methodology">inclusion and verification methodology</Link> before reusing the data.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
