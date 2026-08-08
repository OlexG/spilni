import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export function GET() {
  return Response.json(
    {
      name: "Spilni directory of Ukrainian-founded and Ukraine-connected startups",
      url: "https://spilni.com/",
      methodology: "https://spilni.com/methodology",
      lastReviewed: DIRECTORY_REVIEWED_AT,
      count: startups.length,
      startups: startups.map((startup) => ({
        ...startup,
        directoryUrl: `https://spilni.com/startups/${startup.slug}`,
        logo: `https://spilni.com${startup.logo}`,
      })),
    },
    { headers: { "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" } },
  );
}
