import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spilni: Startups with Ukrainian Founders",
    short_name: "Spilni",
    description: "Startups with Ukrainian founders, with funding, hiring, founders, and sources.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffefa",
    theme_color: "#0057b8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
