# Spilni

A curated directory of Ukrainian-founded commercial, defense, and dual-use startups connected to Silicon Valley.

## Design rationale

The visual direction borrows the friendly density, warm neutral canvas, bold type, rounded controls, and clear card hierarchy of the local `nointernship.com` project. Ukraine blue is reserved for actions and orientation; yellow is used as a high-energy accent rather than low-contrast body text.

Research that informed the interface:

- [W3C: Designing for Web Accessibility](https://www.w3.org/WAI/tips/designing/) — contrast, identifiable controls, consistent navigation, and responsive layouts.
- [W3C: Understanding minimum contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) — 4.5:1 contrast for normal-sized text.
- [Baymard: Show applied filters in an overview](https://baymard.com/blog/how-to-design-applied-filters) — persistent filter state and easy clearing.
- [SRI: Ukrainian defense startups in Silicon Valley](https://www.sri.com/press/story/meet-the-startups-reinventing-the-defense-innovation-playbook/) — validation for the DTSA cohort entries and their Valley connection.

## Development

```bash
npm install
npm run build
```

Startup records live in `lib/startups.ts`. Each entry includes a public source for its Ukrainian roots or Silicon Valley connection.
