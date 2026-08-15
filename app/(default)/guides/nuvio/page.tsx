import type { Metadata } from "next";
import NuvioGuide from "@/components/NuvioGuide";
import { nuvioLanguageUrls } from "@/lib/site";

export const metadata: Metadata = {
  title: "Install Nuvio on iPhone, iPad and Apple TV",
  description: "Install Nuvio on iPhone and iPad with SideStore or Sideloadly, plus the clearly labelled unofficial Apple TV community beta.",
  alternates: { canonical: nuvioLanguageUrls.en, languages: nuvioLanguageUrls },
};

export default function NuvioPage() {
  return <NuvioGuide initialLang="en" />;
}
