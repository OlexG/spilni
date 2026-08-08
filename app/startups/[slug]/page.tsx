import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getStartup, startups, type Startup } from "@/lib/startups";

type StartupPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return startups.map(({ slug }) => ({ slug }));
}

function getMetaDescription(startup: Startup) {
  const prefix = `${startup.name}: `;
  const suffix = " Funding, hiring, founders, and verified sources.";
  const available = 160 - prefix.length - suffix.length;
  const summary = startup.description.replace(/\.$/, "");
  const clipped = summary.length <= available
    ? summary
    : `${summary.slice(0, available - 1).replace(/\s+\S*$/, "")}…`;

  return `${prefix}${clipped}${suffix}`;
}

export async function generateMetadata({ params }: StartupPageProps): Promise<Metadata> {
  const startup = getStartup((await params).slug);
  if (!startup) return {};

  const connectionTitle = startup.connectionLabel === "Ukrainian-founded"
    ? "Ukrainian-Founded Startup"
    : "Ukraine-Connected Startup";
  const title = `${startup.name}: ${connectionTitle}`;
  const description = getMetaDescription(startup);
  const url = `/startups/${startup.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Spilni`,
      description,
      url,
      type: "article",
      siteName: "Spilni",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spilni Ukrainian startup directory" }],
    },
    twitter: { card: "summary_large_image", title: `${title} | Spilni`, description, images: ["/opengraph-image"] },
  };
}

export default async function StartupPage({ params }: StartupPageProps) {
  const startup = getStartup((await params).slug);
  if (!startup) notFound();

  const pageUrl = `https://spilni.com/startups/${startup.slug}`;
  const citations = [...new Set([
    ...startup.sources.map((source) => source.url),
    startup.stage.source,
    startup.hiring.url,
  ])];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${startup.name}: ${startup.connectionLabel === "Ukrainian-founded" ? "Ukrainian-Founded" : "Ukraine-Connected"} Startup`,
        description: startup.answer,
        dateModified: startup.lastReviewed,
        lastReviewed: startup.lastReviewed,
        inLanguage: "en",
        isPartOf: { "@id": "https://spilni.com/#website" },
        publisher: { "@id": "https://spilni.com/#organization" },
        citation: citations,
        about: { "@id": `${pageUrl}#organization` },
        breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      },
      {
        "@type": "Organization",
        "@id": `${pageUrl}#organization`,
        name: startup.name,
        alternateName: startup.alternateNames,
        url: startup.website,
        logo: `https://spilni.com${startup.logo}`,
        foundingDate: String(startup.foundedYear),
        description: startup.description,
        location: { "@type": "Place", name: startup.location },
        knowsAbout: startup.sectors,
        sameAs: [startup.accelerator?.profile].filter(Boolean),
        founder: startup.founders.map((founder) => ({ "@id": `${pageUrl}#${founder.name.toLowerCase().replaceAll(" ", "-")}` })),
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
      },
      ...startup.founders.map((founder) => ({
        "@type": "Person",
        "@id": `${pageUrl}#${founder.name.toLowerCase().replaceAll(" ", "-")}`,
        name: founder.name,
        alternateName: founder.alternateNames,
        jobTitle: founder.role,
        sameAs: [founder.linkedin],
      })),
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Directory", item: "https://spilni.com/" },
          { "@type": "ListItem", position: 2, name: startup.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <article className="content-shell profile-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/#directory">Directory</Link><span aria-hidden="true">/</span><span>{startup.name}</span>
        </nav>

        <header className="profile-hero">
          <div className="profile-logo"><Image src={startup.logo} alt={`${startup.name} logo`} width={92} height={92} priority /></div>
          <div>
            <p className="profile-kicker">{startup.connectionLabel} · {startup.tags[0]}</p>
            <h1>{startup.name}</h1>
            <p className="profile-answer">{startup.answer}</p>
            <div className="page-actions">
              <a className="primary-button" href={startup.website}>Visit {startup.name} ↗</a>
              {startup.accelerator ? <a href={startup.accelerator.profile}>YC {startup.accelerator.batch} profile ↗</a> : null}
            </div>
          </div>
        </header>

        <dl className="profile-facts">
          {startup.accelerator ? <div><dt>Accelerator</dt><dd>YC {startup.accelerator.batch}</dd></div> : null}
          <div><dt>Stage</dt><dd><a href={startup.stage.source}>{startup.stage.label} ↗</a></dd></div>
          <div><dt>Hiring</dt><dd><a href={startup.hiring.url}>{startup.hiring.status} ↗</a></dd></div>
          <div><dt>Founded</dt><dd>{startup.foundedYear}</dd></div>
          <div><dt>Location</dt><dd>{startup.location}</dd></div>
          <div><dt>Focus</dt><dd>{startup.focus}</dd></div>
          {startup.ukrainePresence ? <div><dt>Ukraine presence</dt><dd>{startup.ukrainePresence}</dd></div> : null}
          <div><dt>Status</dt><dd>{startup.status}</dd></div>
        </dl>

        <section className="profile-section">
          <h2>Recent momentum</h2>
          <p>{startup.momentum}</p>
        </section>

        <section className="profile-section signal-sections">
          <div>
            <h2>Funding stage</h2>
            <p>{startup.stage.detail}</p>
            <a href={startup.stage.source}>Stage source ↗</a>
          </div>
          <div>
            <h2>Hiring signal</h2>
            <p>{startup.hiring.detail}</p>
            <a href={startup.hiring.url}>Jobs ↗</a>
          </div>
        </section>

        <section className="profile-section">
          <h2>Ukrainian connection</h2>
          <p>{startup.inclusionReason}</p>
        </section>

        <section className="profile-section">
          <h2>{startup.founders.length === 1 ? "Founder" : "Founders"}</h2>
          <div className="founder-profiles">
            {startup.founders.map((founder) => (
              <article key={founder.name}>
                <h3>{founder.name}</h3>
                <p>{founder.role} · {founder.connectionSummary}</p>
                <a href={founder.linkedin}>LinkedIn profile ↗</a>
              </article>
            ))}
          </div>
        </section>

        <section className="profile-section">
          <h2>Sources</h2>
          <ol className="source-list">
            {startup.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url}>{source.label} ↗</a>
                <span>{source.publisher} · Supports: {source.supports.join(", ")}.</span>
              </li>
            ))}
          </ol>
          <p className="review-note">Reviewed August 7, 2026. <Link href="/methodology">Methodology</Link>.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
