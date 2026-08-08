import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import InterestSignup from "@/components/InterestSignup";
import PaperPlane from "@/components/PaperPlane";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import StartupDirectory from "@/components/StartupDirectory";
import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Startups with Ukrainian Founders | Spilni",
  description: "Startups with Ukrainian founders, with funding stages, hiring status, founder LinkedIn profiles, and sources.",
  alternates: {
    canonical: "/",
    types: {
      "application/json": "/data/startups.json",
      "text/plain": "/llms.txt",
    },
  },
  openGraph: {
    title: "Startups with Ukrainian Founders | Spilni",
    description: "Startups with Ukrainian founders, with funding stages, hiring status, founder LinkedIn profiles, and sources.",
    url: "https://spilni.com/",
    type: "website",
    siteName: "Spilni",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spilni startup directory" }],
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
      description: "A directory of startups with Ukrainian founders.",
      inLanguage: "en",
      publisher: { "@id": "https://spilni.com/#organization" },
    },
    {
      "@type": "CollectionPage",
      "@id": "https://spilni.com/#webpage",
      url: "https://spilni.com/",
      name: "Startups with Ukrainian Founders",
      description: "A directory of startups with Ukrainian founders.",
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
      name: "Startups with Ukrainian founders",
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
            <h1>Startups with <em>Ukrainian founders.</em></h1>
            <p>
              Funding stages, hiring status, founder LinkedIn profiles, and sources.
            </p>
            <InterestSignup />
            <div className="hero-actions">
              <a className="primary-button" href="#directory">View directory</a>
            </div>
            <p className="directory-status">
              {startups.length} companies · Defense, AI, fintech, media, and deep tech · Reviewed August 8, 2026 ·{" "}
              <Link href="/methodology">Methodology →</Link>
            </p>
          </div>
          <div className="hero-side">
            <div className="hero-art" aria-hidden="true">
              <PaperPlane />
            </div>
          </div>
        </div>
      </section>

      <StartupDirectory />

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
