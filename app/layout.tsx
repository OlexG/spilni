import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spilni.com"),
  title: {
    default: "Startups with Ukrainian Founders | Spilni",
    template: "%s | Spilni",
  },
  description: "A source-backed directory of Ukrainian-founded and Ukraine-connected startups, with funding, hiring, founders, and official links.",
  applicationName: "Spilni",
  creator: "Spilni",
  publisher: "Spilni",
  category: "technology",
  openGraph: {
    siteName: "Spilni",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spilni Ukrainian startup directory" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
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
