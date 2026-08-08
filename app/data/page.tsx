import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SITE_UPDATED_AT, startups } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Startup Data",
  description: "JSON records for startups, founders, funding stages, hiring status, and sources.",
  alternates: { canonical: "/data", types: { "application/json": "/data/startups.json" } },
  openGraph: { url: "/data", title: "Startup Data | Spilni", type: "website", siteName: "Spilni", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const sourceUrls = [...new Set(startups.flatMap((startup) => [
  ...startup.sources.map((source) => source.url),
  startup.stage.source,
  startup.hiring.url,
]))];
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  "@id": "https://spilni.com/data#dataset",
  name: "Startups with Ukrainian Founders",
  description: "A dataset of startups with Ukrainian founders, funding stages, hiring signals, locations, and sources.",
  url: "https://spilni.com/data",
  dateModified: SITE_UPDATED_AT,
  creator: { "@id": "https://spilni.com/#organization" },
  isBasedOn: sourceUrls,
  keywords: ["Ukrainian startups", "Ukraine technology", "startup founders", "startup funding", "defense technology", "Y Combinator"],
  variableMeasured: ["company", "founder", "funding stage", "hiring signal", "momentum", "accelerator", "location", "sector", "Ukraine connection", "source"],
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
        <p className="profile-kicker">JSON export</p>
        <h1>Startup data</h1>
        <p className="page-lede">Download the directory as JSON.</p>
        <a className="data-download" href="/data/startups.json">Download startups.json <span>↗</span></a>
        <section>
          <h2>Fields</h2>
          <p>{startups.length} records with company URLs, founders, LinkedIn profiles, funding stages, hiring status, accelerator tags, locations, Ukrainian connection notes, and sources.</p>
        </section>
        <section>
          <h2>Reviewed</h2>
          <p>August 8, 2026. <Link href="/methodology">Methodology</Link>.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
