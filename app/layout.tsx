import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spilni — Ukrainian Startups in Silicon Valley",
  description: "A focused directory of recent Y Combinator startups built by Ukrainian founders.",
  metadataBase: new URL("https://spilni.com"),
  openGraph: {
    title: "Spilni — Ukrainian Startups in Silicon Valley",
    description: "Recent Y Combinator startups built by Ukrainian founders.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
