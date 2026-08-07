# Spilni

A source-backed directory of high-momentum Ukrainian-founded and Ukraine-connected startups and founders. Live at [spilni.com](https://spilni.com/).

## Design rationale

The visual direction borrows the friendly density, warm neutral canvas, bold type, rounded controls, and clear card hierarchy of the local `nointernship.com` project. Ukraine blue is reserved for actions and orientation; yellow is used as a high-energy accent rather than low-contrast body text.

Research that informed the interface:

- [W3C: Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing/) — contrast, identifiable controls, consistent navigation, and responsive layouts.
- [W3C: Understanding minimum contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — 4.5:1 contrast for normal-sized text.
- [Baymard: Search UX](https://baymard.com/blog/site-search-suggestions) — clear, lightweight directory search.

## Development

```bash
npm install
npm run build
```

Startup records live in `lib/startups.ts`. Each entry includes momentum and Ukrainian-connection evidence, founders, citations, optional accelerator details, and a local logo asset.

## Discovery endpoints

- `/sitemap.xml` — canonical indexable pages
- `/robots.txt` — crawler permissions and sitemap location
- `/llms.txt` — concise guide for answer engines and assistants
- `/data/startups.json` — machine-readable directory records
- `/methodology` — inclusion rules, sourcing, freshness, and corrections
