import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { getStartup, startups } from "@/lib/startups";

type StartupPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return startups.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: StartupPageProps): Promise<Metadata> {
  const startup = getStartup((await params).slug);
  if (!startup) return {};

  const title = `${startup.name}: Ukrainian YC Startup & Founders`;
  const description = `${startup.answer} See its Ukrainian connection, founders, LinkedIn profiles, and verified sources.`;
  const url = `/startups/${startup.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | Spilni`, description, url, type: "article" },
  };
}

export default async function StartupPage({ params }: StartupPageProps) {
  const startup = getStartup((await params).slug);
  if (!startup) notFound();

  const pageUrl = `https://spilni.com/startups/${startup.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${startup.name}: Ukrainian YC Startup & Founders`,
        description: startup.answer,
        dateModified: startup.lastReviewed,
        lastReviewed: startup.lastReviewed,
        inLanguage: "en",
        isPartOf: { "@id": "https://spilni.com/#website" },
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
        sameAs: [startup.website, startup.ycProfile],
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
        worksFor: { "@id": `${pageUrl}#organization` },
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
            <p className="profile-kicker">{startup.connectionLabel} · YC {startup.batch}</p>
            <h1>{startup.name}</h1>
            <p className="profile-answer">{startup.answer}</p>
            <div className="page-actions">
              <a className="primary-button" href={startup.website}>Visit {startup.name} ↗</a>
              <a href={startup.ycProfile}>Y Combinator profile ↗</a>
            </div>
          </div>
        </header>

        <dl className="profile-facts">
          <div><dt>YC batch</dt><dd>{startup.batch}</dd></div>
          <div><dt>Founded</dt><dd>{startup.foundedYear}</dd></div>
          <div><dt>Location</dt><dd>{startup.location}</dd></div>
          <div><dt>Focus</dt><dd>{startup.focus}</dd></div>
          {startup.ukrainePresence ? <div><dt>Ukraine presence</dt><dd>{startup.ukrainePresence}</dd></div> : null}
          <div><dt>Status</dt><dd>{startup.status}</dd></div>
        </dl>

        <section className="profile-section">
          <h2>Ukrainian connection</h2>
          <p>{startup.inclusionReason}</p>
        </section>

        <section className="profile-section">
          <h2>Ukrainian {startup.founders.length === 1 ? "founder" : "founders"}</h2>
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
          <p>We use public primary sources where possible and identify exactly what each source supports.</p>
          <ol className="source-list">
            {startup.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url}>{source.label} ↗</a>
                <span>{source.publisher} · Supports: {source.supports.join(", ")}.</span>
              </li>
            ))}
          </ol>
          <p className="review-note">Last reviewed: August 7, 2026. <Link href="/methodology">Read the methodology</Link>.</p>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
