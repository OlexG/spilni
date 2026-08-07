import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PaperPlane from "@/components/PaperPlane";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import StartupDirectory from "@/components/StartupDirectory";
import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Ukrainian Y Combinator Startups & Founders",
  description: "Explore Ukrainian-founded Y Combinator startups, their founders, YC batches, locations, products, LinkedIn profiles, and verified sources.",
  alternates: {
    canonical: "/",
    types: {
      "application/json": "/data/startups.json",
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: "Ukrainian Y Combinator Startups & Founders | Spilni",
    description: "A sourced directory of Ukrainian-founded and Ukraine-connected YC startups.",
    url: "https://spilni.com/",
    type: "website",
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://spilni.com/#organization",
      name: "Spilni",
      alternateName: "Спільні",
      url: "https://spilni.com/",
      sameAs: ["https://github.com/OlexG/spilni"],
    },
    {
      "@type": "WebSite",
      "@id": "https://spilni.com/#website",
      url: "https://spilni.com/",
      name: "Spilni",
      alternateName: ["Спільні", "spilni.com"],
      description: "A sourced directory of Ukrainian-founded Y Combinator startups and founders.",
      inLanguage: "en",
      publisher: { "@id": "https://spilni.com/#organization" },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://spilni.com/#webpage",
      url: "https://spilni.com/",
      name: "Ukrainian Y Combinator Startups & Founders",
      description: "A sourced directory of Ukrainian-founded and Ukraine-connected Y Combinator companies.",
      isPartOf: { "@id": "https://spilni.com/#website" },
      publisher: { "@id": "https://spilni.com/#organization" },
      dateModified: DIRECTORY_REVIEWED_AT,
      lastReviewed: DIRECTORY_REVIEWED_AT,
      inLanguage: "en",
      mainEntity: { "@id": "https://spilni.com/#directory" },
    },
    {
      "@type": "ItemList",
      "@id": "https://spilni.com/#directory",
      name: "Ukrainian-founded and Ukraine-connected Y Combinator startups",
      numberOfItems: startups.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: startups.map((startup, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://spilni.com/startups/${startup.slug}`,
        item: { "@id": `https://spilni.com/startups/${startup.slug}#organization` },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <JsonLd data={homeJsonLd} />
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Ukrainian startups in <em>Silicon Valley.</em></h1>
            <p>
              A curated directory of Ukrainian-founded and Ukraine-connected Y Combinator companies,
              with verified founders, batches, locations, and source links.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#directory">View the directory</a>
            </div>
            <p className="directory-status">
              {startups.length} companies · YC Summer 2023–Spring 2026 · Reviewed August 7, 2026 ·{" "}
              <Link href="/methodology">How we verify →</Link>
            </p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <PaperPlane />
          </div>
        </div>
      </section>

      <StartupDirectory />

      <section className="submit-banner">
        <div>
          <span>Know a team we missed?</span>
          <h2>Help this map grow.</h2>
        </div>
        <a href="https://github.com/OlexG/spilni/issues/new?title=Suggest%20a%20startup">Suggest a startup <span>↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
