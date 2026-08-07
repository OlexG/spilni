import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spilni — Hot Ukrainian Startups",
    short_name: "Spilni",
    description: "A sourced directory of high-momentum Ukrainian startups and founders building globally.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffefa",
    theme_color: "#0057b8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
