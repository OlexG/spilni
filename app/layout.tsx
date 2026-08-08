import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spilni.com"),
  title: {
    default: "Startups with Ukrainian Founders | Spilni",
    template: "%s | Spilni",
  },
  description: "A directory of startups with Ukrainian founders, with funding stages, hiring status, founder LinkedIn profiles, and sources.",
  applicationName: "Spilni",
  creator: "Spilni",
  publisher: "Spilni",
  category: "technology",
  openGraph: {
    siteName: "Spilni",
    locale: "en_US",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Spilni startup directory" }],
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
