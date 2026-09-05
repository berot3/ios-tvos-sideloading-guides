import type { Lang } from "@/components/LanguageSwitcher";
import {
  appleAppAvailability,
  type AppReleaseStatus,
  type IpaStatus,
  type TestFlightStatus,
} from "@/lib/appleAppAvailability";

const STATUS_SYMBOLS: Record<AppReleaseStatus, string> = {
  available: "✅",
  testing: "🧪",
  in_development: "🛠️",
};

const TESTFLIGHT_SYMBOLS: Record<TestFlightStatus, string> = {
  live: "🟢",
  full: "🟠",
  previous: "◴",
  unconfirmed: "🟡",
  not_yet: "⚪",
  no_route: "⛔",
};

const IPA_SYMBOLS: Record<IpaStatus, string> = {
  available: "🟢",
  unconfirmed: "🟡",
  not_yet: "⚪",
};

const copy = {
  en: {
    kicker: "APPLE APP AVAILABILITY",
    title: "What can you install right now?",
    intro: "A compact distribution snapshot for relevant Apple media apps. This is context, not a ranking or recommendation.",
    tableLabel: "Apple app TestFlight and IPA availability",
    app: "App",
    platform: "📱 / 📺",
    status: "Status",
    testFlight: "TestFlight",
    ipa: "IPA",
    mobile: "iPhone / iPad",
    tv: "Apple TV / tvOS",
    platformUnknown: "Platform scope not yet confirmed",
    statusLabels: {
      available: "Publicly available through at least one listed distribution path",
      testing: "Alpha or beta testing",
      in_development: "Actively in development with no public install method yet",
    },
    testFlightLabels: {
      live: "Public TestFlight invitation currently resolves and is not marked full",
      full: "Public TestFlight beta is full or not accepting new testers",
      previous: "Previously available through TestFlight; no current public invitation is verified",
      unconfirmed: "Current TestFlight availability is unconfirmed",
      not_yet: "Not yet available through TestFlight",
      no_route: "Developer states there is no current or near-term TestFlight route",
    },
    ipaLabels: {
      available: "IPA available",
      unconfirmed: "IPA availability unconfirmed",
      not_yet: "IPA not yet available",
    },
    firstParty: "first-party package published by the project or developer",
    legendTitle: "Legend & notes",
    platformLegend: "📱 iPhone / iPad · 📺 Apple TV / tvOS · — platform scope not yet confirmed",
    statusLegend: "Status: ✅ publicly available · 🧪 alpha/beta testing · 🛠️ active development, no public install method yet",
    testFlightLegend: "TestFlight: 🟢 public invite live · 🟠 full / closed to new testers · ◴ previously available · 🟡 unconfirmed · ⚪ not yet available · ⛔ developer says no current route",
    ipaLegend: "IPA: 🟢 available · 🟡 unconfirmed · ⚪ not yet available · ✓ first-party package",
    caveat: "TestFlight availability can change without notice. A live public invitation does not guarantee that every device or account can join. “Unconfirmed” never means “unavailable.” A ✓ marks package provenance only; it does not mean Apple reviewed, signed, audited, or endorsed the IPA.",
    sourcesTitle: "Sources & checked dates",
    checked: "checked",
  },
  de: {
    kicker: "APPLE-APP-VERFÜGBARKEIT",
    title: "Was lässt sich aktuell installieren?",
    intro: "Ein kompakter Distributionsstatus für relevante Apple-Media-Apps. Das ist Kontext, keine Rangliste oder Empfehlung.",
    tableLabel: "TestFlight- und IPA-Verfügbarkeit von Apple-Apps",
    app: "App",
    platform: "📱 / 📺",
    status: "Status",
    testFlight: "TestFlight",
    ipa: "IPA",
    mobile: "iPhone / iPad",
    tv: "Apple TV / tvOS",
    platformUnknown: "Plattformumfang noch nicht bestätigt",
    statusLabels: {
      available: "Über mindestens einen aufgeführten Distributionsweg öffentlich verfügbar",
      testing: "Alpha- oder Beta-Test",
      in_development: "Aktiv in Entwicklung, noch ohne öffentlichen Installationsweg",
    },
    testFlightLabels: {
      live: "Öffentliche TestFlight-Einladung ist aktuell erreichbar und nicht als voll markiert",
      full: "Öffentliche TestFlight-Beta ist voll oder nimmt keine neuen Tester auf",
      previous: "Früher über TestFlight verfügbar; aktuell ist keine öffentliche Einladung verifiziert",
      unconfirmed: "Aktuelle TestFlight-Verfügbarkeit ist unbestätigt",
      not_yet: "Noch nicht über TestFlight verfügbar",
      no_route: "Entwickler nennt aktuell beziehungsweise kurzfristig keinen TestFlight-Weg",
    },
    ipaLabels: {
      available: "IPA verfügbar",
      unconfirmed: "IPA-Verfügbarkeit unbestätigt",
      not_yet: "IPA noch nicht verfügbar",
    },
    firstParty: "First-Party-Paket, vom Projekt oder Entwickler veröffentlicht",
    legendTitle: "Legende & Hinweise",
    platformLegend: "📱 iPhone / iPad · 📺 Apple TV / tvOS · — Plattformumfang noch nicht bestätigt",
    statusLegend: "Status: ✅ öffentlich verfügbar · 🧪 Alpha/Beta · 🛠️ aktiv in Entwicklung, noch ohne öffentlichen Installationsweg",
    testFlightLegend: "TestFlight: 🟢 öffentliche Einladung live · 🟠 voll / keine neuen Tester · ◴ früher verfügbar · 🟡 unbestätigt · ⚪ noch nicht verfügbar · ⛔ laut Entwickler aktuell kein TestFlight-Weg",
    ipaLegend: "IPA: 🟢 verfügbar · 🟡 unbestätigt · ⚪ noch nicht verfügbar · ✓ First-Party-Paket",
    caveat: "TestFlight-Verfügbarkeit kann sich ohne Vorankündigung ändern. Eine erreichbare öffentliche Einladung garantiert nicht, dass jedes Gerät oder jeder Account beitreten kann. „Unbestätigt“ bedeutet niemals „nicht verfügbar“. ✓ kennzeichnet nur die Herkunft des Pakets; es bedeutet nicht, dass Apple die IPA geprüft, signiert, auditiert oder empfohlen hat.",
    sourcesTitle: "Quellen & Prüfdaten",
    checked: "geprüft",
  },
  es: {
    kicker: "DISPONIBILIDAD DE APPS APPLE",
    title: "¿Qué puedes instalar ahora mismo?",
    intro: "Un resumen compacto de distribución para apps multimedia relevantes de Apple. Es contexto, no una clasificación ni una recomendación.",
    tableLabel: "Disponibilidad de TestFlight e IPA de apps Apple",
    app: "App",
    platform: "📱 / 📺",
    status: "Estado",
    testFlight: "TestFlight",
    ipa: "IPA",
    mobile: "iPhone / iPad",
    tv: "Apple TV / tvOS",
    platformUnknown: "Plataformas todavía no confirmadas",
    statusLabels: {
      available: "Disponible públicamente mediante al menos una de las vías indicadas",
      testing: "Pruebas alfa o beta",
      in_development: "En desarrollo activo, todavía sin método público de instalación",
    },
    testFlightLabels: {
      live: "La invitación pública de TestFlight está activa y no aparece como llena",
      full: "La beta pública de TestFlight está llena o no acepta nuevos testers",
      previous: "Estuvo disponible en TestFlight; no se ha verificado una invitación pública actual",
      unconfirmed: "La disponibilidad actual en TestFlight no está confirmada",
      not_yet: "Todavía no disponible en TestFlight",
      no_route: "El desarrollador indica que no existe una vía actual o próxima en TestFlight",
    },
    ipaLabels: {
      available: "IPA disponible",
      unconfirmed: "Disponibilidad de IPA no confirmada",
      not_yet: "IPA todavía no disponible",
    },
    firstParty: "paquete de primera parte publicado por el proyecto o desarrollador",
    legendTitle: "Leyenda y notas",
    platformLegend: "📱 iPhone / iPad · 📺 Apple TV / tvOS · — plataformas todavía no confirmadas",
    statusLegend: "Estado: ✅ disponible públicamente · 🧪 alfa/beta · 🛠️ en desarrollo activo, todavía sin instalación pública",
    testFlightLegend: "TestFlight: 🟢 invitación pública activa · 🟠 lleno / cerrado a nuevos testers · ◴ disponible anteriormente · 🟡 sin confirmar · ⚪ todavía no disponible · ⛔ el desarrollador indica que no hay vía actual",
    ipaLegend: "IPA: 🟢 disponible · 🟡 sin confirmar · ⚪ todavía no disponible · ✓ paquete de primera parte",
    caveat: "La disponibilidad de TestFlight puede cambiar sin aviso. Una invitación pública activa no garantiza que todos los dispositivos o cuentas puedan entrar. «Sin confirmar» nunca significa «no disponible». ✓ solo indica la procedencia del paquete; no significa que Apple haya revisado, firmado, auditado o recomendado la IPA.",
    sourcesTitle: "Fuentes y fechas de verificación",
    checked: "verificado",
  },
  fr: {
    kicker: "DISPONIBILITÉ DES APPS APPLE",
    title: "Que peut-on installer actuellement ?",
    intro: "Un aperçu compact de la distribution des apps multimédias Apple pertinentes. Il s’agit de contexte, pas d’un classement ni d’une recommandation.",
    tableLabel: "Disponibilité TestFlight et IPA des apps Apple",
    app: "App",
    platform: "📱 / 📺",
    status: "Statut",
    testFlight: "TestFlight",
    ipa: "IPA",
    mobile: "iPhone / iPad",
    tv: "Apple TV / tvOS",
    platformUnknown: "Plateformes pas encore confirmées",
    statusLabels: {
      available: "Disponible publiquement par au moins une des voies indiquées",
      testing: "Test alpha ou bêta",
      in_development: "En développement actif, sans méthode d’installation publique pour le moment",
    },
    testFlightLabels: {
      live: "L’invitation publique TestFlight est actuellement accessible et n’est pas indiquée comme complète",
      full: "La bêta publique TestFlight est complète ou n’accepte pas de nouveaux testeurs",
      previous: "Disponible auparavant via TestFlight ; aucune invitation publique actuelle n’est vérifiée",
      unconfirmed: "La disponibilité actuelle sur TestFlight n’est pas confirmée",
      not_yet: "Pas encore disponible sur TestFlight",
      no_route: "Le développeur indique qu’aucune voie TestFlight actuelle ou proche n’est prévue",
    },
    ipaLabels: {
      available: "IPA disponible",
      unconfirmed: "Disponibilité de l’IPA non confirmée",
      not_yet: "IPA pas encore disponible",
    },
    firstParty: "paquet first-party publié par le projet ou le développeur",
    legendTitle: "Légende et notes",
    platformLegend: "📱 iPhone / iPad · 📺 Apple TV / tvOS · — plateformes pas encore confirmées",
    statusLegend: "Statut : ✅ disponible publiquement · 🧪 alpha/bêta · 🛠️ en développement actif, sans installation publique pour le moment",
    testFlightLegend: "TestFlight : 🟢 invitation publique active · 🟠 complet / fermé aux nouveaux testeurs · ◴ disponible auparavant · 🟡 non confirmé · ⚪ pas encore disponible · ⛔ le développeur indique qu’il n’existe pas de voie actuelle",
    ipaLegend: "IPA : 🟢 disponible · 🟡 non confirmé · ⚪ pas encore disponible · ✓ paquet first-party",
    caveat: "La disponibilité TestFlight peut changer sans préavis. Une invitation publique active ne garantit pas que chaque appareil ou compte puisse la rejoindre. « Non confirmé » ne signifie jamais « indisponible ». ✓ indique uniquement la provenance du paquet ; cela ne signifie pas qu’Apple a examiné, signé, audité ou approuvé l’IPA.",
    sourcesTitle: "Sources et dates de vérification",
    checked: "vérifié",
  },
} as const;

function platformSymbols(platforms: readonly ("mobile" | "tv")[]) {
  if (platforms.length === 0) return "—";
  return [platforms.includes("mobile") ? "📱" : "", platforms.includes("tv") ? "📺" : ""].filter(Boolean).join(" ");
}

export default function AppAvailabilityTable({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const apps = appleAppAvailability.filter((app) => app.published);

  return <section className="availability-section" aria-labelledby="apple-app-availability-title">
    <div className="section-kicker">{t.kicker}</div>
    <h2 id="apple-app-availability-title">{t.title}</h2>
    <p className="availability-intro">{t.intro}</p>

    <div className="availability-table-shell">
      <table className="availability-table" aria-label={t.tableLabel}>
        <colgroup><col className="availability-app-col" /><col /><col /><col /><col /></colgroup>
        <thead><tr><th>{t.app}</th><th>{t.platform}</th><th>{t.status}</th><th>{t.testFlight}</th><th>{t.ipa}</th></tr></thead>
        <tbody>
          {apps.map((app) => {
            const platformLabel = app.platforms.length === 0
              ? t.platformUnknown
              : app.platforms.map((platform) => platform === "mobile" ? t.mobile : t.tv).join(" + ");
            const testFlightLabel = t.testFlightLabels[app.testFlight.status];
            const ipaLabel = `${t.ipaLabels[app.ipa.status]}${app.ipa.firstParty ? `; ${t.firstParty}` : ""}`;
            const ipaSymbol = `${IPA_SYMBOLS[app.ipa.status]}${app.ipa.status === "available" && app.ipa.firstParty ? " ✓" : ""}`;

            return <tr key={app.id}>
              <th scope="row"><a href={app.primaryUrl}>{app.name}</a></th>
              <td aria-label={platformLabel}><span aria-hidden="true">{platformSymbols(app.platforms)}</span></td>
              <td aria-label={t.statusLabels[app.status]}><span aria-hidden="true">{STATUS_SYMBOLS[app.status]}</span></td>
              <td aria-label={testFlightLabel}>
                {app.testFlight.url
                  ? <a href={app.testFlight.url} aria-label={`${app.name}: ${testFlightLabel}`}><span aria-hidden="true">{TESTFLIGHT_SYMBOLS[app.testFlight.status]}</span></a>
                  : <span aria-hidden="true">{TESTFLIGHT_SYMBOLS[app.testFlight.status]}</span>}
              </td>
              <td aria-label={ipaLabel}>
                {app.ipa.url
                  ? <a href={app.ipa.url} aria-label={`${app.name}: ${ipaLabel}`}><span aria-hidden="true">{ipaSymbol}</span></a>
                  : <span aria-hidden="true">{ipaSymbol}</span>}
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>

    <div className="availability-notes">
      <h3>{t.legendTitle}</h3>
      <p>{t.platformLegend}</p>
      <p>{t.statusLegend}</p>
      <p>{t.testFlightLegend}</p>
      <p>{t.ipaLegend}</p>
      <p className="availability-caveat">{t.caveat}</p>

      <h3>{t.sourcesTitle}</h3>
      <ul className="availability-sources">
        {apps.map((app) => <li key={app.id}>
          <strong>{app.name}:</strong>{" "}
          {app.sources.map((source, index) => <span key={`${source.label}-${index}`}>
            {index > 0 ? " · " : ""}
            {source.url ? <a href={source.url}>{source.label}</a> : source.label}
          </span>)}
          {" · "}{t.checked} <time dateTime={app.checkedAt}>{app.checkedAt}</time>
        </li>)}
      </ul>
    </div>

    <style>{`
      .availability-section{border-top:1px solid var(--line);margin-top:46px;padding-top:42px}
      .availability-section>h2{font-size:clamp(1.8rem,4vw,2.6rem);letter-spacing:-.04em;line-height:1.1;margin:8px 0 10px}
      .availability-intro{color:var(--muted);max-width:760px;margin:0 0 20px}
      .availability-table-shell{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;border:1px solid var(--line);border-radius:18px;background:var(--paper)}
      .availability-table{width:100%;min-width:300px;border-collapse:collapse;table-layout:fixed;font-size:.9rem}
      .availability-app-col{width:36%}
      .availability-table th,.availability-table td{padding:12px 8px;border-bottom:1px solid var(--line);text-align:center;vertical-align:middle}
      .availability-table thead th{background:var(--soft);font-size:.75rem;letter-spacing:.03em;line-height:1.15;white-space:normal;overflow-wrap:anywhere}
      .availability-table thead th:first-child,.availability-table tbody th{text-align:left}
      .availability-table tbody th{font-size:.94rem;overflow-wrap:anywhere}
      .availability-table tbody td{font-size:1.05rem;white-space:nowrap}
      .availability-table tbody tr:last-child th,.availability-table tbody tr:last-child td{border-bottom:0}
      .availability-table a{font-weight:800;text-underline-offset:3px}
      .availability-notes{margin-top:18px;color:var(--muted);font-size:.86rem}
      .availability-notes h3{color:var(--ink);font-size:.95rem;margin:18px 0 6px}
      .availability-notes p{margin:5px 0}
      .availability-caveat{max-width:900px}
      .availability-sources{margin:7px 0 0;padding-left:20px}
      .availability-sources li{margin:7px 0;overflow-wrap:anywhere}
      .availability-sources strong{color:var(--ink)}
      @media(max-width:560px){
        .availability-section{margin-top:36px;padding-top:34px}
        .availability-app-col{width:38%}
        .availability-table{font-size:.8rem}
        .availability-table th,.availability-table td{padding:9px 3px}
        .availability-table thead th{font-size:.66rem;letter-spacing:0}
        .availability-table tbody th{font-size:.84rem}
        .availability-table tbody td{font-size:.98rem}
      }
      @media(max-width:360px){
        .availability-table th,.availability-table td{padding:8px 2px}
        .availability-table thead th{font-size:.62rem}
        .availability-table tbody th{font-size:.8rem}
        .availability-table tbody td{font-size:.94rem}
      }
    `}</style>
  </section>;
}
