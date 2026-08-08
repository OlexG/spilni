import Image from "next/image";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { SITE_UPDATED_AT, type Startup } from "@/lib/startups";

type StartupCollectionPageProps = {
  title: string;
  kicker: string;
  description: string;
  definition: string;
  path: string;
  companies: Startup[];
};

export default function StartupCollectionPage({
  title,
  kicker,
  description,
  definition,
  path,
  companies,
}: StartupCollectionPageProps) {
  const pageUrl = `https://spilni.com${path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: title,
        description,
        dateModified: SITE_UPDATED_AT,
        inLanguage: "en",
        isPartOf: { "@id": "https://spilni.com/#website" },
        publisher: { "@id": "https://spilni.com/#organization" },
        mainEntity: { "@id": `${pageUrl}#companies` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#companies`,
        name: title,
        numberOfItems: companies.length,
        itemListOrder: "https://schema.org/ItemListUnordered",
        itemListElement: companies.map((startup, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `https://spilni.com/startups/${startup.slug}`,
          item: { "@id": `https://spilni.com/startups/${startup.slug}#organization` },
        })),
      },
    ],
  };

  return (
    <main>
      <JsonLd data={jsonLd} />
      <SiteHeader />
      <article className="content-shell collection-page">
        <p className="profile-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p className="page-lede">{description}</p>
        <p className="collection-definition"><strong>{companies.length} companies.</strong> {definition}</p>

        <section>
          <h2>Companies</h2>
          <div className="collection-list">
            {companies.map((startup) => (
              <article key={startup.slug}>
                <Image src={startup.logo} alt={`${startup.name} logo`} width={56} height={56} />
                <div>
                  <h3><Link href={`/startups/${startup.slug}`}>{startup.name}</Link></h3>
                  <p>{startup.answer}</p>
                  <span>{startup.focus} · {startup.stage.label} · {startup.hiring.status}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <p className="review-note">Updated August 8, 2026. <Link href="/methodology">Methodology</Link> · <Link href="/data">Data</Link></p>
      </article>
      <SiteFooter />
    </main>
  );
}
