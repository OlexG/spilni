"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { startups } from "@/lib/startups";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" />
      <path d="m13 13 4 4" />
    </svg>
  );
}

export default function StartupDirectory() {
  const [query, setQuery] = useState("");

  const visibleStartups = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return startups;

    return startups.filter((startup) => {
      const founderNames = startup.founders.map((founder) => founder.name).join(" ");
      const haystack = `${startup.name} ${startup.focus} ${startup.location} ${startup.tags.join(" ")} ${startup.stage.label} ${startup.hiring.status} ${startup.momentum} ${startup.description} ${founderNames}`.toLowerCase();
      return haystack.includes(normalized);
    });
  }, [query]);

  return (
    <section className="directory" id="directory" aria-label="Startups with Ukrainian founders">
      <h2 className="sr-only">Startups with Ukrainian founders</h2>
      <div className="toolbar" aria-label="Directory search">
        <label className="search-field">
          <span className="sr-only">Search startups</span>
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search startups"
          />
        </label>
      </div>

      <div className="results-meta" aria-live="polite">
        <strong>{visibleStartups.length}</strong> {visibleStartups.length === 1 ? "company" : "companies"}
        {query ? <button type="button" onClick={() => setQuery("")}>Clear search</button> : null}
      </div>

      {visibleStartups.length > 0 ? (
        <div className="startup-grid">
          {visibleStartups.map((startup) => (
            <article className="startup-card" key={startup.name}>
              <div className="card-topline">
                <div className="company-logo">
                  <Image src={startup.logo} alt={`${startup.name} logo`} width={52} height={52} />
                </div>
                <div className="card-tags">
                  {startup.accelerator ? <span className="yc-badge">YC {startup.accelerator.batch}</span> : null}
                  {startup.tags.filter((tag) => !tag.startsWith("YC ")).slice(0, 2).map((tag) => (
                    <span className={tag === "Defense" ? "startup-tag defense-tag" : "startup-tag"} key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card-copy">
                <h3><Link href={`/startups/${startup.slug}`}>{startup.name}</Link></h3>
                <p>{startup.description}</p>
              </div>
              <dl className="card-details">
                <div><dt>Focus</dt><dd>{startup.focus}</dd></div>
                <div><dt>Based</dt><dd>{startup.location}</dd></div>
                <div><dt>Stage</dt><dd><a className="signal-link" href={startup.stage.source} target="_blank" rel="noreferrer">{startup.stage.label} ↗</a></dd></div>
                <div><dt>Hiring</dt><dd><a className={startup.hiring.status === "Hiring" ? "signal-link hiring-now" : "signal-link"} href={startup.hiring.url} target="_blank" rel="noreferrer">{startup.hiring.status} ↗</a></dd></div>
                <div>
                  <dt>Founders</dt>
                  <dd className="founder-links">
                    {startup.founders.map((founder) => (
                      <a key={founder.name} href={founder.linkedin} target="_blank" rel="noreferrer">
                        {founder.name}<span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="card-footer">
                <a href={startup.website} target="_blank" rel="noreferrer">
                  Website <ArrowIcon />
                </a>
                {startup.accelerator ? (
                  <a className="source-link" href={startup.accelerator.profile} target="_blank" rel="noreferrer">YC profile</a>
                ) : (
                  <a className="source-link" href={startup.sources[0].url} target="_blank" rel="noreferrer">Source</a>
                )}
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No companies match.</h3>
          <button type="button" onClick={() => setQuery("")}>Show all companies</button>
        </div>
      )}
    </section>
  );
}
