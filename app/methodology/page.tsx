import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { DIRECTORY_REVIEWED_AT } from "@/lib/startups";

export const metadata: Metadata = {
  title: "Directory Methodology",
  description: "How Spilni verifies high-momentum Ukrainian startups, founders, Western ties, traction, funding, and sources.",
  alternates: { canonical: "/methodology" },
  openGraph: { url: "/methodology", title: "Directory Methodology | Spilni", type: "article" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://spilni.com/methodology#webpage",
  url: "https://spilni.com/methodology",
  name: "Spilni directory methodology",
  description: "How Spilni verifies high-momentum Ukrainian-founded and Ukraine-connected startups.",
  dateModified: DIRECTORY_REVIEWED_AT,
  isPartOf: { "@id": "https://spilni.com/#website" },
};

export default function MethodologyPage() {
  return (
    <main>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <article className="content-shell text-page">
        <p className="profile-kicker">Transparent by design</p>
        <h1>Directory methodology</h1>
        <p className="page-lede">Spilni is a curated, source-backed directory. Every company page explains why it is included and links to evidence.</p>

        <section>
          <h2>What qualifies</h2>
          <p>A company must have a documented Ukrainian founder or a substantial, public operational connection to Ukraine. It must also show meaningful momentum in the last 18 months through funding, revenue, customer adoption, battlefield deployment, production scale, or a strategic Western partnership. “Ukrainian-founded” means a credible source identifies at least one founder as Ukrainian. “Ukraine-connected” covers a documented connection that does not justify a nationality claim.</p>
        </section>
        <section>
          <h2>How global ties are treated</h2>
          <p>Western and global ties can include investors, customers, accelerator participation, manufacturing partnerships, allied-government programs, or headquarters and operating teams in North America or Europe. Y Combinator participation appears as an optional company tag; it is never an inclusion requirement.</p>
        </section>
        <section>
          <h2>How facts are checked</h2>
          <p>We prefer official company and investor announcements, founder profiles, accelerator records, government documents, and direct interviews. Independent reporting can establish Ukrainian roots or validate momentum when a primary source is unavailable. Each company page states which facts each citation supports.</p>
        </section>
        <section>
          <h2>Freshness and corrections</h2>
          <p>The current directory was reviewed on August 7, 2026. Company status, locations, names, and roles can change. To suggest a company or correct a record, <a href="https://github.com/OlexG/spilni/issues/new?title=Directory%20correction">open a public GitHub issue</a>.</p>
        </section>
        <p className="review-note"><Link href="/data">Download the open directory data</Link> or <Link href="/#directory">browse the companies</Link>.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
