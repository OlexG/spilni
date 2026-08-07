import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main>
      <SiteHeader />
      <section className="content-shell text-page">
        <p className="profile-kicker">404</p>
        <h1>Page not found.</h1>
        <p className="page-lede">This page may have moved, or the company is not in the directory yet.</p>
        <div className="page-actions">
          <Link className="primary-button" href="/#directory">Browse the directory</Link>
          <Link href="/methodology">Read the methodology</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
