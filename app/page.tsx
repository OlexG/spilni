import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import InterestSignup from "@/components/InterestSignup";
import PaperPlane from "@/components/PaperPlane";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import StartupDirectory from "@/components/StartupDirectory";
import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Ukrainian Startup Directory | Spilni",
  description: "Explore Ukrainian-founded and Ukraine-connected startups, with funding stages, hiring status, founders, momentum, and verified sources.",
  alternates: {
    canonical: "/",
    types: {
      "application/json": "/data/startups.json",
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: "Ukrainian Startup Directory | Spilni",
    description: "A source-backed directory of Ukrainian-founded and Ukraine-connected startups.",
    url: "https://spilni.com/",
    type: "website",
    siteName: "Spilni",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spilni Ukrainian startup directory" }],
  },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
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
      logo: {
        "@type": "ImageObject",
        url: "https://spilni.com/icon.svg",
        width: 512,
        height: 512,
      },
      sameAs: ["https://github.com/OlexG/spilni"],
    },
    {
      "@type": "WebSite",
      "@id": "https://spilni.com/#website",
      url: "https://spilni.com/",
      name: "Spilni",
      alternateName: ["Спільні", "spilni.com"],
      description: "A source-backed directory of Ukrainian-founded and Ukraine-connected startups.",
      inLanguage: "en",
      publisher: { "@id": "https://spilni.com/#organization" },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://spilni.com/#webpage",
      url: "https://spilni.com/",
      name: "Ukrainian Startup Directory",
      description: "A source-backed directory of Ukrainian-founded and Ukraine-connected startups.",
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
      name: "Ukrainian-founded and Ukraine-connected startups",
      numberOfItems: startups.length,
      itemListOrder: "https://schema.org/ItemListUnordered",
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
            <h1><em>Ukrainian startups.</em></h1>
            <p>
              Ukrainian-founded and Ukraine-connected companies, with funding,
              hiring, founders, and verified sources.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#directory">View directory</a>
            </div>
            <p className="directory-status">
              {startups.length} companies · Defense, AI, fintech, media, and deep tech · Reviewed August 7, 2026 ·{" "}
              <Link href="/methodology">Methodology →</Link>
            </p>
          </div>
          <div className="hero-art" aria-hidden="true">
            <PaperPlane />
          </div>
        </div>
      </section>

      <StartupDirectory />

      <InterestSignup />

      <section className="submit-banner">
        <div>
          <span>Directory submissions</span>
          <h2>Missing a company?</h2>
        </div>
        <a href="https://github.com/OlexG/spilni/issues/new?title=Suggest%20a%20startup" target="_blank" rel="noreferrer">Suggest a startup <span>↗</span></a>
      </section>

      <SiteFooter />
    </main>
  );
}
