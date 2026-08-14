import Link from "next/link";
import LanguageSwitcher, { type Lang } from "@/components/LanguageSwitcher";
import { languageHref } from "@/lib/site";

const hubCopy = {
  en: {
    eyebrow: "OPEN · MULTILINGUAL · SOURCE-CHECKED", title: <>iOS &amp; tvOS<br />Sideloading Guides.</>, intro: "Practical installation guides for iPhone, iPad, and Apple TV — with the correct packages, signing limits, refresh requirements, and troubleshooting in one place.", openFusion: "Open the Fusion guide →", source: "View source on GitHub ↗", library: "GUIDE LIBRARY", available: "Available and planned guides", fusionDescription: "Install Fusion with AltStore Classic on iPhone or with AltServer and Xcode on Apple TV. Includes the seven-day signing workflow and common fixes.", read: "Read the guide →", planned: "Research planned", futureTitle: "Nuvio and more", futureDescription: "Future guides will use the same verified structure and may cover AltStore Classic, AltStore PAL, SideStore, AltServer, or Xcode when supported.", suggest: "Suggest an app ↗", noIpa: "No IPA files are hosted here", safety: "Every guide links to upstream projects and official documentation. Always verify an app and its source before installing it.",
  },
  de: {
    eyebrow: "OFFEN · MEHRSPRACHIG · QUELLENGEPRÜFT", title: <>Sideloading-Anleitungen<br />für iOS &amp; tvOS.</>, intro: "Praxisnahe Installationsanleitungen für iPhone, iPad und Apple TV — mit den richtigen Paketen, Signaturlimits, Erneuerungen und Lösungen für häufige Fehler an einem Ort.", openFusion: "Fusion-Anleitung öffnen →", source: "Quellcode auf GitHub ↗", library: "ANLEITUNGSBIBLIOTHEK", available: "Verfügbare und geplante Anleitungen", fusionDescription: "Fusion mit AltStore Classic auf dem iPhone oder mit AltServer und Xcode auf Apple TV installieren. Einschließlich 7-Tage-Signatur und häufiger Problemlösungen.", read: "Anleitung lesen →", planned: "Recherche geplant", futureTitle: "Nuvio und weitere Apps", futureDescription: "Weitere Anleitungen folgen derselben geprüften Struktur und können – sofern unterstützt – AltStore Classic, AltStore PAL, SideStore, AltServer oder Xcode abdecken.", suggest: "App vorschlagen ↗", noIpa: "Hier werden keine IPA-Dateien gehostet", safety: "Jede Anleitung verweist auf die ursprünglichen Projekte und die offizielle Dokumentation. Prüfe eine App und ihre Quelle immer vor der Installation.",
  },
  es: {
    eyebrow: "ABIERTO · MULTILINGÜE · FUENTES VERIFICADAS", title: <>Guías de sideloading<br />para iOS y tvOS.</>, intro: "Guías prácticas de instalación para iPhone, iPad y Apple TV, con los paquetes correctos, límites de firma, renovaciones y soluciones a problemas frecuentes.", openFusion: "Abrir la guía de Fusion →", source: "Ver el código en GitHub ↗", library: "BIBLIOTECA DE GUÍAS", available: "Guías disponibles y planificadas", fusionDescription: "Instala Fusion con AltStore Classic en el iPhone o con AltServer y Xcode en el Apple TV. Incluye la firma de siete días y soluciones habituales.", read: "Leer la guía →", planned: "Investigación planificada", futureTitle: "Nuvio y más", futureDescription: "Las próximas guías seguirán la misma estructura verificada y podrán incluir AltStore Classic, AltStore PAL, SideStore, AltServer o Xcode cuando sean compatibles.", suggest: "Sugerir una app ↗", noIpa: "Aquí no se alojan archivos IPA", safety: "Cada guía enlaza los proyectos originales y la documentación oficial. Verifica siempre una app y su fuente antes de instalarla.",
  },
  fr: {
    eyebrow: "OUVERT · MULTILINGUE · SOURCES VÉRIFIÉES", title: <>Guides de sideloading<br />pour iOS et tvOS.</>, intro: "Des guides d’installation pratiques pour iPhone, iPad et Apple TV, avec les bons paquets, les limites de signature, le renouvellement et le dépannage au même endroit.", openFusion: "Ouvrir le guide Fusion →", source: "Voir le code sur GitHub ↗", library: "BIBLIOTHÈQUE DE GUIDES", available: "Guides disponibles et prévus", fusionDescription: "Installe Fusion avec AltStore Classic sur iPhone ou avec AltServer et Xcode sur Apple TV. Le guide couvre la signature de sept jours et les problèmes courants.", read: "Lire le guide →", planned: "Recherche prévue", futureTitle: "Nuvio et autres apps", futureDescription: "Les prochains guides suivront la même structure vérifiée et pourront couvrir AltStore Classic, AltStore PAL, SideStore, AltServer ou Xcode lorsqu’ils sont compatibles.", suggest: "Suggérer une app ↗", noIpa: "Aucun fichier IPA n’est hébergé ici", safety: "Chaque guide renvoie aux projets d’origine et à la documentation officielle. Vérifie toujours une app et sa source avant de l’installer.",
  },
} as const;

export default function GuideHub({ initialLang, detectLanguage = false }: { initialLang: Lang; detectLanguage?: boolean }) {
  const t = hubCopy[initialLang];
  const fusionHref = languageHref(initialLang, "fusion");

  return <main className="hub">
    <header className="hub-hero">
      <div className="hero-top"><div className="eyebrow">{t.eyebrow}</div><LanguageSwitcher lang={initialLang} route="hub" detectLanguage={detectLanguage} /></div>
      <h1>{t.title}</h1>
      <p className="hub-intro">{t.intro}</p>
      <div className="hub-actions"><Link className="button-link" href={fusionHref}>{t.openFusion}</Link><a className="button-link secondary" href="https://github.com/berot3/ios-tvos-sideloading-guides">{t.source}</a></div>
    </header>

    <section className="guide-overview" aria-labelledby="guides-title">
      <div className="section-kicker">{t.library}</div><h2 id="guides-title">{t.available}</h2>
      <div className="guide-grid">
        <article className="guide-card"><div className="badge-row"><span className="badge">iPhone / iPad</span><span className="badge">Apple TV</span><span className="badge">EN · DE · ES · FR</span></div><h3>Fusion</h3><p>{t.fusionDescription}</p><Link className="button-link" href={fusionHref}>{t.read}</Link></article>
        <article className="guide-card planned"><div className="badge-row"><span className="badge">{t.planned}</span></div><h3>{t.futureTitle}</h3><p>{t.futureDescription}</p><a className="button-link secondary" href="https://github.com/berot3/ios-tvos-sideloading-guides/issues">{t.suggest}</a></article>
      </div>
    </section>

    <aside className="hub-note"><h2>{t.noIpa}</h2><p>{t.safety}</p></aside>
  </main>;
}
