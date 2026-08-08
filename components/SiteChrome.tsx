import Link from "next/link";

export function Mark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Spilni home">
        <Mark />
        <span>spilni</span>
        <small>спільні</small>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#directory">Directory</Link>
        <Link href="/methodology">Methodology</Link>
        <a className="nav-cta" href="https://github.com/OlexG/spilni/issues/new?title=Suggest%20a%20startup">Suggest a startup</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/"><Mark /><span>spilni</span></Link>
      <p>Startups. Ukrainian founders.</p>
      <div className="footer-links">
        <Link href="/methodology">Methodology</Link>
        <Link href="/data">Open data</Link>
        <a href="https://github.com/OlexG/spilni">GitHub</a>
      </div>
    </footer>
  );
}
