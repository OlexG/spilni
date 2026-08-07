import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spilni.com"),
  title: {
    default: "Ukrainian Y Combinator Startups & Founders | Spilni",
    template: "%s | Spilni",
  },
  description: "A sourced directory of Ukrainian-founded and Ukraine-connected Y Combinator startups, founders, batches, locations, and official links.",
  applicationName: "Spilni",
  creator: "Spilni",
  publisher: "Spilni",
  category: "technology",
  openGraph: {
    siteName: "Spilni",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fffefa",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
