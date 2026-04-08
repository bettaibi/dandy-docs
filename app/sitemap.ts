import { source } from "@/lib/source";
import type { MetadataRoute } from "next";

const siteUrl = "https://dandy-ui-indol.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();

  const docPages: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${siteUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.slugs.length === 0 ? 1 : 0.8,
  }));

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...docPages,
  ];
}
