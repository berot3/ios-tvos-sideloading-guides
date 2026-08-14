"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { languageHref, siteBasePath, type LanguageRoute, type SupportedLanguage } from "@/lib/site";

export type Lang = SupportedLanguage;

const languagePreferenceKey = "ios-tvos-sideloading-guides-language";
const supportedLanguages: Lang[] = ["en", "de", "es", "fr"];
const languageOptions: Array<{ code: Lang; label: string }> = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
];
const languageMenuLabels: Record<Lang, string> = {
  en: "Choose language",
  de: "Sprache auswählen",
  es: "Elegir idioma",
  fr: "Choisir la langue",
};

function readPreferredLanguage(): Lang {
  try {
    const storedLanguage = window.localStorage.getItem(languagePreferenceKey);
    if (supportedLanguages.includes(storedLanguage as Lang)) return storedLanguage as Lang;
  } catch {
    // Browser-language detection still works if storage is unavailable.
  }

  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const browserLanguage of browserLanguages) {
    const primaryLanguage = browserLanguage.toLowerCase().split("-")[0] as Lang;
    if (supportedLanguages.includes(primaryLanguage)) return primaryLanguage;
  }

  return "en";
}

export default function LanguageSwitcher({ lang, route, detectLanguage = false }: { lang: Lang; route: LanguageRoute; detectLanguage?: boolean }) {
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    if (!detectLanguage) return;
    const preferredLanguage = readPreferredLanguage();
    if (preferredLanguage !== lang) {
      window.location.replace(`${siteBasePath}${languageHref(preferredLanguage, route)}`);
    }
  }, [detectLanguage, lang, route]);

  const selectLanguage = (code: Lang) => {
    try { window.localStorage.setItem(languagePreferenceKey, code); } catch { /* Continue without persistence. */ }
    setLanguageMenuOpen(false);
  };

  return <div className="language-switcher">
    <button className="language-trigger" aria-label={languageMenuLabels[lang]} aria-haspopup="menu" aria-expanded={languageMenuOpen} onClick={() => setLanguageMenuOpen((open) => !open)}>
      <span aria-hidden="true">🌐</span> {languageOptions.find((option) => option.code === lang)?.label}<span className="language-chevron" aria-hidden="true">⌄</span>
    </button>
    {languageMenuOpen ? <div className="language-options" role="menu" aria-label={languageMenuLabels[lang]}>
      {languageOptions.map((option) => <Link key={option.code} role="menuitemradio" aria-checked={option.code === lang} href={languageHref(option.code, route)} className={option.code === lang ? "active" : ""} onClick={() => selectLanguage(option.code)}>{option.label}</Link>)}
    </div> : null}
  </div>;
}
