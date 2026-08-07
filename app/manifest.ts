import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spilni — Ukrainian YC Startups",
    short_name: "Spilni",
    description: "A sourced directory of Ukrainian-founded and Ukraine-connected Y Combinator startups and founders.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffefa",
    theme_color: "#0057b8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
