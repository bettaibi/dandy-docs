import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = "https://dandy-ui-indol.vercel.app";
const siteDescription =
  "Lightweight, edge-optimized React UI library built on Tailwind CSS v4. Production-grade, mobile-first components for Cloudflare Workers and serverless platforms.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dandy UI",
    template: "%s | Dandy UI",
  },
  description: siteDescription,
  keywords: [
    "React",
    "UI library",
    "Tailwind CSS",
    "Tailwind CSS v4",
    "components",
    "Cloudflare Workers",
    "edge",
    "serverless",
    "dandy-ui",
    "mobile-first",
    "accessible",
  ],
  authors: [{ name: "Nidhal Bettaibi" }],
  creator: "Nidhal Bettaibi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Dandy UI",
    title: "Dandy UI",
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: "Dandy UI",
    description: siteDescription,
    creator: "@dandyui",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
