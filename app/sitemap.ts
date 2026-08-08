import type { MetadataRoute } from "next";
import { SITE_UPDATED_AT, startups } from "@/lib/startups";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteLastModified = new Date(`${SITE_UPDATED_AT}T12:00:00Z`);
  return [
    { url: "https://spilni.com/", lastModified: siteLastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://spilni.com/methodology", lastModified: siteLastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://spilni.com/data", lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: "https://spilni.com/defense-startups", lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://spilni.com/silicon-valley", lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: "https://spilni.com/y-combinator", lastModified: siteLastModified, changeFrequency: "weekly", priority: 0.8 },
    ...startups.map((startup) => ({
      url: `https://spilni.com/startups/${startup.slug}`,
      lastModified: new Date(`${startup.lastReviewed}T12:00:00Z`),
      changeFrequency: "weekly" as const,
      priority: 0.9,
      images: [`https://spilni.com${startup.logo}`],
    })),
  ];
}
