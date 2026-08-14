import type { Metadata } from "next";
import FusionGuide from "@/components/FusionGuide";
import { fusionLanguageUrls } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fusion Sideloading Guide for iPhone and Apple TV",
  description: "Install Fusion on iPhone with AltStore Classic and on Apple TV with AltServer and Xcode. Includes package selection, seven-day renewal, and troubleshooting.",
  alternates: { canonical: fusionLanguageUrls.en, languages: fusionLanguageUrls },
};

export default function FusionPage() {
  return <FusionGuide initialLang="en" />;
}
