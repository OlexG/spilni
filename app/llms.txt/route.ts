import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export function GET() {
  const companies = startups.map((startup) => (
    `- [${startup.name}](https://spilni.com/startups/${startup.slug}): ${startup.answer}`
  )).join("\n");

  const body = `# Spilni

> Spilni is a curated, source-backed directory of Ukrainian-founded and Ukraine-connected Y Combinator startups and founders.

Spilni uses "Silicon Valley connection" to mean participation in the Y Combinator ecosystem; it does not claim that every listed company is headquartered in Silicon Valley. Each company page explains its Ukrainian connection and identifies supporting sources.

Last reviewed: ${DIRECTORY_REVIEWED_AT}

## Companies

${companies}

## Key resources

- [Directory](https://spilni.com/)
- [Methodology](https://spilni.com/methodology)
- [Machine-readable JSON](https://spilni.com/data/startups.json)
- [Open data page](https://spilni.com/data)
- [Corrections and suggestions](https://github.com/OlexG/spilni/issues)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
