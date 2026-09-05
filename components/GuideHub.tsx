import Link from "next/link";
import AppAvailabilityTable from "@/components/AppAvailabilityTable";
import LanguageSwitcher, { type Lang } from "@/components/LanguageSwitcher";
import { languageHref } from "@/lib/site";

const hubCopy = {
  en: {
    eyebrow: "APPLE DEVICES · MULTILINGUAL · SOURCE-CHECKED", title: <>Sideloading Guides<br />for iPhone, iPad &amp; Apple TV.</>, intro: "Practical installation guides for iOS, iPadOS, and tvOS — with the correct packages, signing limits, refresh requirements, and troubleshooting in one place.", openFusion: "Open the Fusion guide →", source: "View source on GitHub ↗", library: "GUIDE LIBRARY", available: "Available and planned guides", fusionDescription: "Install Fusion with AltStore Classic on iPhone or with AltServer and Xcode on Apple TV. Includes the seven-day signing workflow and common fixes.", nuvioDescription: "Install Nuvio with SideStore or Sideloadly on iPhone and iPad, plus the clearly labelled unofficial Apple TV community beta.", read: "Read the guide →", planned: "More guides planned", futureTitle: "More apps", futureDescription: "Future guides will use the same verified structure and may cover AltStore Classic, AltStore PAL, SideStore, AltServer, or Xcode when supported.", suggest: "Suggest an app ↗", noIpa: "No IPA files are hosted here", safety: "Every guide links to upstream projects and official documentation. Always verify an app and its source before installing it.",
  },
  de: {
    eyebrow: "APPLE-GERÄTE · MEHRSPRACHIG · QUELLENGEPRÜFT", title: <>Sideloading-Anleitungen<br />für iPhone, iPad &amp; Apple TV.</>, intro: "Praxisnahe Installationsanleitungen für iOS, iPadOS und tvOS — mit den richtigen Paketen, Signaturlimits, Erneuerungen und Lösungen für häufige Fehler an einem Ort.", openFusion: "Fusion-Anleitung öffnen →", source: "Quellcode auf GitHub ↗", library: "ANLEITUNGSBIBLIOTHEK", available: "Verfügbare und geplante Anleitungen", fusionDescription: "Fusion mit AltStore Classic auf dem iPhone oder mit AltServer und Xcode auf Apple TV installieren. Einschließlich 7-Tage-Signatur und häufiger Problemlösungen.", nuvioDescription: "Nuvio mit SideStore oder Sideloadly auf iPhone und iPad installieren, plus klar gekennzeichnete inoffizielle Apple-TV-Community-Beta.", read: "Anleitung lesen →", planned: "Weitere Anleitungen geplant", futureTitle: "Weitere Apps", futureDescription: "Weitere Anleitungen folgen derselben geprüften Struktur und können – sofern unterstützt – AltStore Classic, AltStore PAL, SideStore, AltServer oder Xcode abdecken.", suggest: "App vorschlagen ↗", noIpa: "Hier werden keine IPA-Dateien gehostet", safety: "Jede Anleitung verweist auf die ursprünglichen Projekte und die offizielle Dokumentation. Prüfe eine App und ihre Quelle immer vor der Installation.",
  },
  es: {
    eyebrow: "DISPOSITIVOS APPLE · MULTILINGÜE · FUENTES VERIFICADAS", title: <>Guías de sideloading<br />para iPhone, iPad y Apple TV.</>, intro: "Guías prácticas de instalación para iOS, iPadOS y tvOS, con los paquetes correctos, límites de firma, renovaciones y soluciones a problemas frecuentes.", openFusion: "Abrir la guía de Fusion →", source: "Ver el código en GitHub ↗", library: "BIBLIOTECA DE GUÍAS", available: "Guías disponibles y planificadas", fusionDescription: "Instala Fusion con AltStore Classic en el iPhone o con AltServer y Xcode en el Apple TV. Incluye la firma de siete días y soluciones habituales.", nuvioDescription: "Instala Nuvio con SideStore o Sideloadly en iPhone y iPad, además de la beta comunitaria no oficial para Apple TV.", read: "Leer la guía →", planned: "Más guías planificadas", futureTitle: "Más aplicaciones", futureDescription: "Las próximas guías seguirán la misma estructura verificada y podrán incluir AltStore Classic, AltStore PAL, SideStore, AltServer o Xcode cuando sean compatibles.", suggest: "Sugerir una app ↗", noIpa: "Aquí no se alojan archivos IPA", safety: "Cada guía enlaza los proyectos originales y la documentación oficial. Verifica siempre una app y su fuente antes de instalarla.",
  },
  fr: {
    eyebrow: "APPAREILS APPLE · MULTILINGUE · SOURCES VÉRIFIÉES", title: <>Guides de sideloading<br />pour iPhone, iPad et Apple TV.</>, intro: "Des guides d’installation pratiques pour iOS, iPadOS et tvOS, avec les bons paquets, les limites de signature, le renouvellement et le dépannage au même endroit.", openFusion: "Ouvrir le guide Fusion →", source: "Voir le code sur GitHub ↗", library: "BIBLIOTHÈQUE DE GUIDES", available: "Guides disponibles et prévus", fusionDescription: "Installe Fusion avec AltStore Classic sur iPhone ou avec AltServer et Xcode sur Apple TV. Le guide couvre la signature de sept jours et les problèmes courants.", nuvioDescription: "Installe Nuvio avec SideStore ou Sideloadly sur iPhone et iPad, ainsi que la bêta communautaire non officielle pour Apple TV.", read: "Lire la guide →", planned: "Autres guides prévus", futureTitle: "Autres apps", futureDescription: "Les prochains guides suivront la même structure vérifiée et pourront couvrir AltStore Classic, AltStore PAL, SideStore, AltServer ou Xcode lorsqu’ils sont compatibles.", suggest: "Suggérer une app ↗", noIpa: "Aucun fichier IPA n’est hébergé ici", safety: "Chaque guide renvoie aux projets d’origine et à la documentation officielle. Vérifie toujours une app et sa source avant de l’installer.",
  },
} as const;

const fusionProvenance = {
  en: "Unofficial community IPA repository",
  de: "Inoffizielles Community-IPA-Repository",
  es: "Repositorio IPA comunitario no oficial",
  fr: "Dépôt IPA communautaire non officiel",
} as const;

export default function GuideHub({ initialLang, detectLanguage = false }: { initialLang: Lang; detectLanguage?: boolean }) {
  const t = hubCopy[initialLang];
  const fusionProvenanceBadge = fusionProvenance[initialLang];
  const fusionHref = languageHref(initialLang, "fusion");
  const nuvioHref = languageHref(initialLang, "nuvio");

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
        <article className="guide-card"><div className="badge-row"><span className="badge badge-warning">{fusionProvenanceBadge}</span><span className="badge">iPhone / iPad</span><span className="badge">Apple TV</span><span className="badge">EN · DE · ES · FR</span></div><h3>Fusion</h3><p>{t.fusionDescription}</p><Link className="button-link" href={fusionHref}>{t.read}</Link></article>
        <article className="guide-card"><div className="badge-row"><span className="badge">iPhone / iPad</span><span className="badge">Apple TV · Community</span><span className="badge">EN · DE · ES · FR</span></div><h3>Nuvio</h3><p>{t.nuvioDescription}</p><Link className="button-link" href={nuvioHref}>{t.read}</Link></article>
        <article className="guide-card planned"><div className="badge-row"><span className="badge">{t.planned}</span></div><h3>{t.futureTitle}</h3><p>{t.futureDescription}</p><a className="button-link secondary" href="https://github.com/berot3/ios-tvos-sideloading-guides/issues">{t.suggest}</a></article>
      </div>
    </section>

    <AppAvailabilityTable lang={initialLang} />

    <aside className="hub-note"><h2>{t.noIpa}</h2><p>{t.safety}</p></aside>
  </main>;
}
