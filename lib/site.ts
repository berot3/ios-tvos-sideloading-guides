export const repositoryName = "ios-tvos-sideloading-guides";
export const siteOrigin = "https://berot3.github.io";
export const siteBasePath = `/${repositoryName}`;
export const siteUrl = `${siteOrigin}${siteBasePath}`;

export const languages = ["de", "es", "fr"] as const;
export type TranslatedLanguage = (typeof languages)[number];
export type SupportedLanguage = "en" | TranslatedLanguage;
export type LanguageRoute = "hub" | "fusion" | "nuvio";

export function languageHref(code: SupportedLanguage, route: LanguageRoute) {
  const prefix = code === "en" ? "" : `/${code}`;
  if (route === "hub") return `${prefix}/`;
  return `${prefix}/guides/${route}/`;
}

export const hubLanguageUrls = {
  "x-default": `${siteUrl}/`,
  en: `${siteUrl}/`,
  de: `${siteUrl}/de/`,
  es: `${siteUrl}/es/`,
  fr: `${siteUrl}/fr/`,
};

export const fusionLanguageUrls = {
  "x-default": `${siteUrl}/guides/fusion/`,
  en: `${siteUrl}/guides/fusion/`,
  de: `${siteUrl}/de/guides/fusion/`,
  es: `${siteUrl}/es/guides/fusion/`,
  fr: `${siteUrl}/fr/guides/fusion/`,
};

export const nuvioLanguageUrls = {
  "x-default": `${siteUrl}/guides/nuvio/`,
  en: `${siteUrl}/guides/nuvio/`,
  de: `${siteUrl}/de/guides/nuvio/`,
  es: `${siteUrl}/es/guides/nuvio/`,
  fr: `${siteUrl}/fr/guides/nuvio/`,
};
