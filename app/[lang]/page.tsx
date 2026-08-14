import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuideHub from "@/components/GuideHub";
import { hubLanguageUrls, languages, type TranslatedLanguage } from "@/lib/site";

const pageMetadata: Record<TranslatedLanguage, { title: string; description: string }> = {
  de: { title: "Sideloading-Anleitungen für iOS und tvOS", description: "Mehrsprachige Schritt-für-Schritt-Anleitungen für das Sideloading von Apps auf iPhone, iPad und Apple TV." },
  es: { title: "Guías de sideloading para iOS y tvOS", description: "Guías multilingües paso a paso para instalar apps mediante sideloading en iPhone, iPad y Apple TV." },
  fr: { title: "Guides de sideloading pour iOS et tvOS", description: "Guides multilingues pas à pas pour installer des apps en sideloading sur iPhone, iPad et Apple TV." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as TranslatedLanguage)) return {};
  const translatedLang = lang as TranslatedLanguage;
  return { ...pageMetadata[translatedLang], alternates: { canonical: hubLanguageUrls[translatedLang], languages: hubLanguageUrls } };
}

export default async function TranslatedGuideHubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as TranslatedLanguage)) notFound();
  return <GuideHub initialLang={lang as TranslatedLanguage} />;
}
