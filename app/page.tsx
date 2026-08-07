import PaperPlane from "@/components/PaperPlane";
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
          <a className="nav-cta" href="https://github.com/OlexG/spilni/issues/new?title=Suggest%20a%20startup">Suggest a startup</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Ukrainian startups in <em>Silicon Valley.</em></h1>
            <p>
              A focused list of recent Y Combinator startups built by Ukrainian founders.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#directory">View the directory</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <PaperPlane />
          </div>
        </div>
      </section>

      <StartupDirectory />

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
