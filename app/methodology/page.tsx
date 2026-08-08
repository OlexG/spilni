import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SITE_UPDATED_AT } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Directory Methodology",
  description: "Inclusion, sourcing, funding-stage, and hiring-status rules for the Spilni directory.",
  alternates: { canonical: "/methodology" },
  openGraph: { url: "/methodology", title: "Directory Methodology | Spilni", type: "article", siteName: "Spilni", images: ["/opengraph-image"] },
  twitter: { card: "summary_large_image", images: ["/opengraph-image"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://spilni.com/methodology#webpage",
  url: "https://spilni.com/methodology",
  name: "Spilni directory methodology",
  description: "Rules used to include and document companies in the Spilni directory.",
  dateModified: SITE_UPDATED_AT,
  isPartOf: { "@id": "https://spilni.com/#website" },
  publisher: { "@id": "https://spilni.com/#organization" },
};

export default function MethodologyPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <article className="content-shell text-page">
        <p className="profile-kicker">Criteria and sources</p>
        <h1>Directory methodology</h1>
        <p className="page-lede">Companies are included using the rules below. Each record links to its sources.</p>

        <section>
          <h2>Inclusion</h2>
          <p>A company must have a documented Ukrainian founder or substantial public operations in Ukraine. It must also have public evidence from the last 18 months of funding, revenue, customer adoption, deployment, production, or a strategic partnership.</p>
        </section>
        <section>
          <h2>Labels</h2>
          <p>“Ukrainian-founded” means a source identifies at least one founder as Ukrainian. “Ukraine-connected” means the company has a documented operational connection to Ukraine, but the available sources do not support a founder-nationality claim. Y Combinator participation is an optional tag.</p>
        </section>
        <section>
          <h2>Sources</h2>
          <p>Sources include company and investor announcements, founder profiles, accelerator records, government documents, interviews, and independent reporting. Each citation lists the claims it supports.</p>
        </section>
        <section>
          <h2>Funding stage and hiring</h2>
          <p>Stage is the latest publicly named equity round. Debt and strategic investments are labeled separately. “Hiring” means a public careers page or recent vacancy was found. “No public openings” means none were visible when checked.</p>
        </section>
        <section>
          <h2>Review date</h2>
          <p>The directory was reviewed on August 8, 2026. To suggest a company or report an error, <a href="https://github.com/OlexG/spilni/issues/new?title=Directory%20correction">open a GitHub issue</a>.</p>
        </section>
        <p className="review-note"><Link href="/data">Data</Link> · <Link href="/#directory">Directory</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
