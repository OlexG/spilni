import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spilni — Ukrainian Startups in Silicon Valley",
  description: "A curated directory of Ukrainian-founded commercial, defense, and dual-use startups connected to Silicon Valley.",
  metadataBase: new URL("https://spilni.com"),
  openGraph: {
    title: "Spilni — Ukrainian Startups in Silicon Valley",
    description: "Meet the Ukrainian founders building in and around Silicon Valley.",
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
