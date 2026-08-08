"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { startups, type StartupCategory, type StartupHiring, type StartupStageGroup } from "@/lib/startups";

const categoryOptions: StartupCategory[] = [
  "Business software",
  "Consumer",
  "Defense",
  "Developer tools",
  "Deep tech",
  "Fintech",
];

const stageOptions: StartupStageGroup[] = [
  "Pre-seed / seed",
  "Series A / B",
  "Growth / public",
  "Other / undisclosed",
];

const hiringOptions: Array<{ label: string; value: StartupHiring["status"] }> = [
  { label: "Hiring now", value: "Hiring" },
  { label: "No openings found", value: "No public openings" },
];

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
  const [category, setCategory] = useState<StartupCategory | "">("");
  const [stageGroup, setStageGroup] = useState<StartupStageGroup | "">("");
  const [hiringStatus, setHiringStatus] = useState<StartupHiring["status"] | "">("");

  const hasActiveFilters = Boolean(query || category || stageGroup || hiringStatus);

  function clearFilters() {
    setQuery("");
    setCategory("");
    setStageGroup("");
    setHiringStatus("");
  }

  const visibleStartups = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return startups.filter((startup) => {
      const founderNames = startup.founders
        .flatMap((founder) => [founder.name, ...(founder.alternateNames ?? [])])
        .join(" ");
      const haystack = [
        startup.name,
        ...(startup.alternateNames ?? []),
        startup.focus,
        startup.location,
        startup.ukrainePresence,
        startup.sectors.join(" "),
        startup.tags.join(" "),
        startup.stage.label,
        startup.hiring.status,
        startup.momentum,
        startup.description,
        startup.classification.category,
        startup.classification.stageGroup,
        startup.connectionLabel,
        startup.accelerator?.name,
        startup.accelerator?.batch,
        founderNames,
      ].filter(Boolean).join(" ").toLowerCase();

      return (!normalized || haystack.includes(normalized))
        && (!category || startup.classification.category === category)
        && (!stageGroup || startup.classification.stageGroup === stageGroup)
        && (!hiringStatus || startup.hiring.status === hiringStatus);
    });
  }, [category, hiringStatus, query, stageGroup]);

  return (
    <section className="directory" id="directory" aria-label="Startups with Ukrainian founders">
      <h2 className="sr-only">Startups with Ukrainian founders</h2>
      <div className="toolbar" aria-label="Directory search and filters">
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
        <label className="filter-field">
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value as StartupCategory | "")}>
            <option value="">All categories</option>
            {categoryOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label className="filter-field">
          <span>Stage</span>
          <select value={stageGroup} onChange={(event) => setStageGroup(event.target.value as StartupStageGroup | "")}>
            <option value="">All stages</option>
            {stageOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </label>
        <label className="filter-field">
          <span>Hiring</span>
          <select value={hiringStatus} onChange={(event) => setHiringStatus(event.target.value as StartupHiring["status"] | "")}>
            <option value="">Any status</option>
            {hiringOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
          </select>
        </label>
      </div>

      <div className="results-meta" aria-live="polite">
        <strong>{visibleStartups.length}</strong> {visibleStartups.length === 1 ? "company" : "companies"}
        {hasActiveFilters ? <button type="button" onClick={clearFilters}>Clear filters</button> : null}
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
                  <span className={startup.classification.category === "Defense" ? "startup-tag defense-tag" : "startup-tag"}>{startup.classification.category}</span>
                  {startup.tags.filter((tag) => !tag.startsWith("YC ") && tag !== startup.classification.category).slice(0, 1).map((tag) => (
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
          <button type="button" onClick={clearFilters}>Show all companies</button>
        </div>
      )}
    </section>
  );
}
