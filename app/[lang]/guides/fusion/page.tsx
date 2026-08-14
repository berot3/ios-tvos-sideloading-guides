import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FusionGuide, { type Lang } from "@/components/FusionGuide";
import { fusionLanguageUrls, languages, type TranslatedLanguage } from "@/lib/site";

const metadataByLanguage: Record<TranslatedLanguage, { title: string; description: string }> = {
  de: { title: "Fusion auf iPhone und Apple TV installieren", description: "Fusion mit AltStore Classic auf dem iPhone und mit AltServer und Xcode auf Apple TV installieren — inklusive 7-Tage-Erneuerung und Fehlerbehebung." },
  es: { title: "Instalar Fusion en iPhone y Apple TV", description: "Instala Fusion con AltStore Classic en el iPhone y con AltServer y Xcode en el Apple TV, con renovación de siete días y solución de problemas." },
  fr: { title: "Installer Fusion sur iPhone et Apple TV", description: "Installe Fusion avec AltStore Classic sur iPhone et avec AltServer et Xcode sur Apple TV, avec renouvellement de sept jours et dépannage." },
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!languages.includes(lang as TranslatedLanguage)) return {};
  const translatedLang = lang as TranslatedLanguage;
  return {
    ...metadataByLanguage[translatedLang],
    alternates: { canonical: fusionLanguageUrls[translatedLang], languages: fusionLanguageUrls },
  };
}

export default async function TranslatedFusionPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!languages.includes(lang as TranslatedLanguage)) notFound();
  return <FusionGuide initialLang={lang as Lang} />;
}
