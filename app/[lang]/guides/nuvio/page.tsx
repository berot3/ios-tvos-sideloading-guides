import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NuvioGuide from "@/components/NuvioGuide";
import { nuvioLanguageUrls, languages, type TranslatedLanguage } from "@/lib/site";

const metadataByLanguage: Record<TranslatedLanguage, { title: string; description: string }> = {
  de: { title: "Nuvio auf iPhone, iPad und Apple TV installieren", description: "Nuvio mit SideStore oder Sideloadly auf iPhone und iPad installieren, plus klar gekennzeichnete inoffizielle Apple-TV-Community-Beta." },
  es: { title: "Instalar Nuvio en iPhone, iPad y Apple TV", description: "Instala Nuvio en iPhone y iPad con SideStore o Sideloadly, además de la beta comunitaria no oficial para Apple TV." },
  fr: { title: "Installer Nuvio sur iPhone, iPad et Apple TV", description: "Installe Nuvio sur iPhone et iPad avec SideStore ou Sideloadly, ainsi que la bêta communautaire non officielle pour Apple TV." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as TranslatedLanguage)) return {};
  const translatedLang = lang as TranslatedLanguage;
  return { ...metadataByLanguage[translatedLang], alternates: { canonical: nuvioLanguageUrls[translatedLang], languages: nuvioLanguageUrls } };
}

export default async function TranslatedNuvioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as TranslatedLanguage)) notFound();
  return <NuvioGuide initialLang={lang as TranslatedLanguage} />;
}
