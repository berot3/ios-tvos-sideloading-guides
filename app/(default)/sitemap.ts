import type { MetadataRoute } from "next";
import { fusionLanguageUrls, siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-14");
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...Object.entries(fusionLanguageUrls)
      .filter(([language]) => language !== "x-default")
      .map(([, url]) => ({ url, lastModified, changeFrequency: "monthly" as const, priority: 0.9 })),
  ];
}
