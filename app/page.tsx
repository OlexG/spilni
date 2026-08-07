import StartupDirectory from "@/components/StartupDirectory";

function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Spilni home">
          <Mark />
          <span>spilni</span>
          <small>спільні</small>
        </a>
        <nav aria-label="Main navigation">
          <a href="#directory">Directory</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="https://github.com/OlexG/spilni/issues/new?title=Suggest%20a%20startup">Suggest a startup</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <span className="hero-kicker">Spilni · Спільні</span>
          <h1>Ukrainian startups in Silicon Valley.</h1>
          <p>
            A curated list of Ukrainian-founded commercial, defense, and dual-use companies
            with a connection to the Bay Area.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#directory">View the directory</a>
          </div>
        </div>
      </section>

      <StartupDirectory />

      <section className="about" id="about">
        <div>
          <span className="eyebrow">Why Spilni</span>
          <h2>“Together” is the whole point.</h2>
        </div>
        <div className="about-copy">
          <p>
            <strong>Спільні</strong> means shared or together. This directory makes the people and products
            connecting Ukraine with Silicon Valley easier to discover—without flattening every connection
            into a headquarters claim.
          </p>
          <p>
            Companies are included when they have Ukrainian founding roots and either a Bay Area base or a
            documented Silicon Valley accelerator, residency, or ecosystem presence.
          </p>
        </div>
      </section>

      <section className="submit-banner">
        <div>
          <span>Know a team we missed?</span>
          <h2>Help this map grow.</h2>
        </div>
        <a href="https://github.com/OlexG/spilni/issues/new?title=Suggest%20a%20startup">Suggest a startup <span>↗</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><Mark /><span>spilni</span></a>
        <p>Ukrainian founders, built together in the Bay.</p>
        <div><span>Made with care in California</span><span>© {new Date().getFullYear()} Spilni</span></div>
      </footer>
    </main>
  );
}
