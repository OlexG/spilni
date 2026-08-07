import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PaperPlane from "@/components/PaperPlane";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import StartupDirectory from "@/components/StartupDirectory";
import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Hot Ukrainian Startups & Founders",
  description: "Explore high-momentum Ukrainian-founded and Ukraine-connected startups, their founders, Western ties, funding, LinkedIn profiles, and verified sources.",
  alternates: {
    canonical: "/",
    types: {
      "application/json": "/data/startups.json",
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: "Hot Ukrainian Startups & Founders | Spilni",
    description: "A sourced directory of high-momentum Ukrainian startups with global and Western ties.",
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
      description: "A sourced directory of high-momentum Ukrainian-founded and Ukraine-connected startups and founders.",
      inLanguage: "en",
      publisher: { "@id": "https://spilni.com/#organization" },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://spilni.com/#webpage",
      url: "https://spilni.com/",
      name: "Hot Ukrainian Startups & Founders",
      description: "A sourced directory of high-momentum Ukrainian startups with global and Western ties.",
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
      name: "High-momentum Ukrainian-founded and Ukraine-connected startups",
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
            <h1>Ukrainian startups going <em>global.</em></h1>
            <p>
              A curated directory of high-momentum Ukrainian startups with verified founders,
              Western ties, recent traction, funding, and source links.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#directory">View the directory</a>
            </div>
            <p className="directory-status">
              {startups.length} companies · Defense, AI, fintech, media, and deep tech · Reviewed August 7, 2026 ·{" "}
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
