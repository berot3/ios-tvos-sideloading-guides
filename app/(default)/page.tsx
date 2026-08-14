import type { Metadata } from "next";
import GuideHub from "@/components/GuideHub";
import { hubLanguageUrls } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: hubLanguageUrls.en, languages: hubLanguageUrls },
};

export default function GuideHubPage() {
  return <GuideHub initialLang="en" detectLanguage />;
}
