import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Spilni — Hot Startups with Ukrainian Founders",
    short_name: "Spilni",
    description: "A sourced directory of hot startups with Ukrainian founders.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffefa",
    theme_color: "#0057b8",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
