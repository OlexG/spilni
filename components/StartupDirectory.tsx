"use client";

import { useMemo, useState } from "react";
import { startups, type StartupType } from "@/lib/startups";

const filters: Array<"All" | StartupType> = ["All", "Commercial", "Defense", "Dual-use"];

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
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const visibleStartups = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return startups.filter((startup) => {
      const matchesFilter = filter === "All" || startup.type === filter;
      const haystack = `${startup.name} ${startup.focus} ${startup.location} ${startup.description}`.toLowerCase();
      return matchesFilter && (!normalized || haystack.includes(normalized));
    });
  }, [filter, query]);

  return (
    <section className="directory" id="directory" aria-label="Startup directory">
      <div className="toolbar" aria-label="Directory controls">
        <label className="search-field">
          <span className="sr-only">Search startups</span>
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by company or focus"
          />
        </label>
        <div className="filter-row" aria-label="Filter by company type">
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              className={filter === item ? "filter-chip active" : "filter-chip"}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>{item === "All" ? startups.length : startups.filter((startup) => startup.type === item).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="results-meta" aria-live="polite">
        <strong>{visibleStartups.length}</strong> {visibleStartups.length === 1 ? "company" : "companies"}
        {(filter !== "All" || query) && (
          <button type="button" onClick={() => { setFilter("All"); setQuery(""); }}>Clear filters</button>
        )}
      </div>

      {visibleStartups.length > 0 ? (
        <div className="startup-grid">
          {visibleStartups.map((startup) => (
            <article className="startup-card" key={startup.name}>
              <div className="card-topline">
                <div className={`monogram type-${startup.type.toLowerCase()}`}>{startup.monogram}</div>
                <div className="card-badges">
                  <span className={`type-badge type-${startup.type.toLowerCase()}`}>{startup.type}</span>
                  {startup.featured && <span className="featured-badge">Notable</span>}
                </div>
              </div>
              <div className="card-copy">
                <h3>{startup.name}</h3>
                <p>{startup.description}</p>
              </div>
              <dl className="card-details">
                <div><dt>Focus</dt><dd>{startup.focus}</dd></div>
                <div><dt>Valley link</dt><dd>{startup.location}</dd></div>
              </dl>
              <div className="card-footer">
                <a href={startup.website} target="_blank" rel="noreferrer">
                  Visit company <ArrowIcon />
                </a>
                <a className="source-link" href={startup.source} target="_blank" rel="noreferrer">Source</a>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <span>Нічого не знайдено</span>
          <h3>No companies match yet.</h3>
          <p>Try a broader search or reset the directory filters.</p>
          <button type="button" onClick={() => { setFilter("All"); setQuery(""); }}>Show all companies</button>
        </div>
      )}
    </section>
  );
}
