import type { MetadataRoute } from "next";
import { DIRECTORY_REVIEWED_AT, startups } from "@/lib/startups";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${DIRECTORY_REVIEWED_AT}T12:00:00Z`);
  return [
    { url: "https://spilni.com/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://spilni.com/methodology", lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: "https://spilni.com/data", lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...startups.map((startup) => ({
      url: `https://spilni.com/startups/${startup.slug}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
  ];
}
