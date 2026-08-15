"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageSwitcher, { type Lang } from "@/components/LanguageSwitcher";
import { languageHref } from "@/lib/site";

const fullSourceUrl = "https://raw.githubusercontent.com/luqmanfadlli/NuvioMobile-iOS/main/NuvioFull.json";
const fullReleaseUrl = "https://github.com/luqmanfadlli/NuvioMobile-iOS/releases/tag/0.4.5";
const tvReleaseUrl = "https://github.com/youngchris29-art/NuvioTV/releases/tag/tvos-v0.3.0-beta.11";

type Copy = {
  eyebrow: string;
  title: string;
  lead: string;
  upstream: string;
  releases: string;
  keyTitle: string;
  keyText: string;
  startLabel: string;
  iosStart: string;
  tvStart: string;
  onPage: string;
  backToTop: string;
  toc: readonly string[];
  sections: readonly string[];
  packageIntro: string;
  iosPlatform: string;
  iosPackageNote: string;
  tvPlatform: string;
  tvPackageNote: string;
  fullOnly: string;
  fullOnlyText: string;
  requirements: readonly string[];
  signingTitle: string;
  signingText: string;
  iloaderIntro: string;
  iloaderSafety: string;
  iloaderSteps: readonly string[];
  sourceIntro: string;
  sourceSteps: readonly string[];
  patienceTitle: string;
  patienceText: string;
  updateIntro: string;
  versionTitle: string;
  versionText: string;
  refreshTitle: string;
  refreshText: string;
  autoWarning: string;
  sideloadlyIntro: string;
  sideloadlySteps: readonly string[];
  sideloadlyTradeoff: string;
  firstLaunchSteps: readonly string[];
  dataTitle: string;
  dataText: string;
  tvIntro: string;
  tvRequirements: readonly string[];
  tvSteps: readonly string[];
  windowsTitle: string;
  windowsText: string;
  topShelfTitle: string;
  topShelfText: string;
  limitsIntro: string;
  limits: readonly string[];
  limitsEnd: string;
  trouble: readonly { title: string; items: readonly string[] }[];
  securityTitle: string;
  securityText: string;
  legalTitle: string;
  legalText: string;
  sourcesTitle: string;
  sourceLabels: readonly string[];
  notesLink: string;
  reviewed: string;
};

const copy: Record<Lang, Copy> = {
  en: {
    eyebrow: "NUVIO · SIDELOADING GUIDE",
    title: "Install Nuvio on iPhone, iPad and Apple TV.",
    lead: "A source-checked guide to SideStore, iLoader, Sideloadly and the unofficial Apple TV community beta.",
    upstream: "Official Nuvio source ↗",
    releases: "Community iOS build ↗",
    keyTitle: "Official source does not mean official binary",
    keyText: "Nuvio Mobile is maintained by the official NuvioMedia project. The Full IPA linked here is built and published by a separate community repository whose own manifest labels it unofficial. Apple TV is also community-supported only.",
    startLabel: "Start with your device",
    iosStart: "iPhone / iPad",
    tvStart: "Apple TV beta",
    onPage: "On this page",
    backToTop: "Back to top ↑",
    toc: ["Packages and provenance", "What you need", "Install SideStore", "Add Nuvio", "Updates and refresh", "Sideloadly", "First launch", "Apple TV beta", "Signing limits", "Troubleshooting", "Safety"],
    sections: ["Choose the correct package", "What you need", "Install SideStore with iLoader", "Add the Nuvio Full source", "App updates are not signature refreshes", "Simpler alternative: Sideloadly", "First launch and data", "Apple TV — unofficial community beta", "Free Apple signing limits", "Quick troubleshooting", "Safety, privacy and lawful use"],
    packageIntro: "This guide uses two independent community packages. Neither file is hosted by this website.",
    iosPlatform: "iPhone / iPad · iOS 16.1+",
    iosPackageNote: "Community-built Full variant aligned with the official mobile source. The manifest explicitly says “Unofficial”.",
    tvPlatform: "Apple TV · tvOS 26+",
    tvPackageNote: "Unsigned independent community beta. It is not affiliated with or endorsed by NuvioMedia.",
    fullOnly: "Use Full — not Enhanced",
    fullOnlyText: "Enhanced contains experimental community changes. This beginner guide deliberately uses the Full variant, whose maintainer describes it as built from upstream without modifications. That claim has not been independently reproduced.",
    requirements: ["An iPhone or iPad running iOS/iPadOS 16.1 or later.", "A free Apple Account; paid developer membership is not required.", "A Mac, Windows PC or Linux computer for the normal initial SideStore setup.", "A USB cable is recommended for the initial connection.", "Developer Mode enabled on the iPhone or iPad.", "Wi-Fi and LocalDevVPN for SideStore installation, updates and refreshes."],
    signingTitle: "Seven-day signing",
    signingText: "Apps signed with a free Apple Personal Team stop launching after seven days unless their signature is refreshed. Plan the refresh before installing.",
    iloaderIntro: "iLoader is a free, open-source companion that installs SideStore and places the required certificate and pairing files. It supports macOS, Windows and Linux.",
    iloaderSafety: "Download iLoader only from iloader.app or github.com/nab138/iloader. The project identifies those as its only official download locations.",
    iloaderSteps: ["Install the current iLoader release. Windows needs the Apple/iTunes components named by iLoader; Linux may need usbmuxd; macOS needs no additional prerequisite.", "Connect and unlock the iPhone or iPad, preferably by USB, then trust the computer.", "Open iLoader and sign in with the Apple Account you will use for sideloading.", "Select the connected device and choose SideStore (stable). LiveContainer is not needed if you only want Nuvio.", "Wait for SideStore to appear on the device.", "Trust the developer profile under Settings → General → VPN & Device Management.", "Enable Developer Mode under Settings → Privacy & Security → Developer Mode and restart if requested.", "Open SideStore, sign in and perform its required first refresh."],
    sourceIntro: "Install LocalDevVPN from the App Store, connect it, then add this source in SideStore:",
    sourceSteps: ["Open SideStore and go to Sources.", "Tap the + button.", "Paste the source URL shown above.", "Open Nuvio Full — not Nuvio Enhanced.", "Start the installation and keep LocalDevVPN connected.", "Signing may appear stuck while Nuvio's embedded frameworks are processed. Wait several minutes before aborting."],
    patienceTitle: "Do not delete the existing app for an update",
    patienceText: "Install an update over the existing Nuvio installation where possible. Deleting first increases the risk of losing local app data.",
    updateIntro: "SideStore handles two different jobs. Mixing them up is the fastest route to a guide that sounds clever and then fails a week later.",
    versionTitle: "Nuvio version update",
    versionText: "The Full source makes a newer Nuvio version visible in SideStore and avoids manually downloading a fresh IPA. Start the update from SideStore when it appears.",
    refreshTitle: "Signature refresh",
    refreshText: "Refresh the installed app before the free seven-day provisioning profile expires. SideStore uses LocalDevVPN for installs, updates and refreshes.",
    autoWarning: "Do not promise unattended background version updates. The source enables convenient, user-initiated updates. iLoader itself also lists automatic app refresh as a future feature, not a current one.",
    sideloadlyIntro: "Sideloadly is the simpler route when you want to download the current Full IPA and install it directly from a Mac or Windows PC.",
    sideloadlySteps: ["Download Nuvio-v0.4.5-Full.ipa from the checked community release.", "Download Sideloadly only from sideloadly.io.", "Connect and unlock the device, then select it in Sideloadly.", "Load the Full IPA, sign with the Apple Account and install.", "Trust the developer profile and enable Developer Mode.", "Re-sign before seven days expire or configure Sideloadly's refresh daemon correctly."],
    sideloadlyTradeoff: "Sideloadly requires less initial setup, but it does not provide SideStore's convenient Nuvio Full source workflow.",
    firstLaunchSteps: ["Open Nuvio after profile trust and Developer Mode are complete.", "Sign in to an existing Nuvio account or create one through the official nuvio.tv website.", "Select or create the user's profile and verify synchronization.", "Configure only extensions, services and content sources the user is authorized to use.", "Optional services such as Trakt or Simkl are not required for installation."],
    dataTitle: "Changing installation methods can affect local data",
    dataText: "Updating over the existing installation should normally preserve app data, but this is not an absolute guarantee. Verify that important profiles or settings are synced or backed up before changing tools. A single community report described lost family profiles during a migration; the cause was not independently established.",
    tvIntro: "NuvioMedia does not publish an official tvOS client. These steps use youngchris29-art/NuvioTV, an independent beta that explicitly disclaims upstream affiliation or endorsement.",
    tvRequirements: ["Apple TV running tvOS 26 or later.", "A Mac with Sideloadly.", "Mac and Apple TV on the same local network.", "A free Apple Account is sufficient.", "Expect manual re-signing at least every seven days."],
    tvSteps: ["Download NuvioTV.ipa from the checked v0.3.0 beta.11 release.", "Open Settings → Remotes and Devices → Remote App and Devices on Apple TV.", "Open Sideloadly on the Mac and complete pairing if a code appears.", "Select the Apple TV as the target and load NuvioTV.ipa.", "Sign with the Apple Account and start installation.", "If tvOS asks, trust the developer certificate under Settings → General → Privacy & Security.", "Launch NuvioTV, sign in and configure the user's own lawful sources.", "Re-sign or re-sideload before or after the seven-day profile expires."],
    windowsTitle: "Use a Mac for the beginner Apple TV workflow",
    windowsText: "The community README mentions Windows, but Sideloadly's own tvOS notes do not establish reliable wireless Apple TV pairing on Windows. This guide therefore does not promise it.",
    topShelfTitle: "Missing Top Shelf is expected",
    topShelfText: "The checked sideload IPA omits the Top Shelf extension because free re-signing can break the extension signatures. This is a package limitation, not a failed installation.",
    limitsIntro: "Apple's current Personal Team restrictions for free development signing include:",
    limits: ["Provisioning profiles and registered App IDs expire after seven days.", "Up to 10 App IDs.", "Up to 3 registered devices.", "Up to 3 sideloaded apps per device; SideStore itself counts as one."],
    limitsEnd: "A paid Apple Developer Program membership changes signing validity, but it is not required for this guide.",
    trouble: [
      { title: "Signing appears stuck", items: ["Wait several minutes; Nuvio contains many embedded frameworks.", "Use USB during initial installation where possible.", "Do not abort immediately if the progress bar pauses."] },
      { title: "SideStore cannot install or refresh", items: ["Confirm Wi-Fi and LocalDevVPN are active.", "Perform SideStore's initial refresh.", "Replace the pairing file if it became invalid after an iOS update or device reset."] },
      { title: "Nuvio no longer opens", items: ["Check whether seven days have passed.", "Refresh or re-sign the app.", "Confirm Developer Mode and developer-profile trust are still active."] },
      { title: "Apple TV is not detected", items: ["Put Mac and Apple TV on the same network.", "Open Remote App and Devices on Apple TV.", "Use macOS rather than assuming Windows wireless pairing works."] },
    ],
    securityTitle: "Community binary warning",
    securityText: "Open-source upstream code does not prove that a downloaded binary is identical. The Full maintainer claims upstream parity, but this guide does not treat that as an independent reproducible-build verification.",
    legalTitle: "Nuvio does not provide media",
    legalText: "Nuvio works with user-selected extensions and sources. This guide covers installation only and does not provide piracy-oriented source bundles. Use only services and content you are legally authorized to access.",
    sourcesTitle: "Checked sources",
    sourceLabels: ["Official Nuvio Mobile source", "Official Nuvio 0.4.5 release", "Nuvio Full 0.4.5 community release", "Nuvio Full source manifest", "iLoader official repository", "iLoader official website", "SideStore documentation", "Sideloadly", "Apple Personal Team limits", "NuvioTV community beta", "SideStore community workflow", "Nuvio update-source discussion"],
    notesLink: "Guide verification notes",
    reviewed: "Source and workflow evidence reviewed on 15 August 2026. Direct package versions are snapshots; check the linked release and manifest before installing.",
  },
  de: {
    eyebrow: "NUVIO · SIDELOADING-ANLEITUNG",
    title: "Nuvio auf iPhone, iPad und Apple TV installieren.",
    lead: "Quellengeprüfte Anleitung für SideStore, iLoader, Sideloadly und die inoffizielle Apple-TV-Community-Beta.",
    upstream: "Offizieller Nuvio-Quellcode ↗",
    releases: "Community-iOS-Build ↗",
    keyTitle: "Offizieller Quellcode bedeutet nicht offizielle Binärdatei",
    keyText: "Nuvio Mobile wird vom offiziellen NuvioMedia-Projekt entwickelt. Die hier verlinkte Full-IPA wird von einem separaten Community-Repository gebaut und veröffentlicht, dessen eigenes Manifest sie als inoffiziell bezeichnet. Auch Apple TV wird nur von der Community unterstützt.",
    startLabel: "Starte mit deinem Gerät",
    iosStart: "iPhone / iPad",
    tvStart: "Apple-TV-Beta",
    onPage: "Auf dieser Seite",
    backToTop: "Nach oben ↑",
    toc: ["Pakete und Herkunft", "Voraussetzungen", "SideStore installieren", "Nuvio hinzufügen", "Updates und Refresh", "Sideloadly", "Erster Start", "Apple-TV-Beta", "Signaturlimits", "Fehlerbehebung", "Sicherheit"],
    sections: ["Das richtige Paket auswählen", "Was du brauchst", "SideStore mit iLoader installieren", "Nuvio-Full-Source hinzufügen", "App-Updates sind keine Signatur-Refreshes", "Einfachere Alternative: Sideloadly", "Erster Start und Daten", "Apple TV — inoffizielle Community-Beta", "Limits der kostenlosen Apple-Signierung", "Schnelle Fehlerbehebung", "Sicherheit, Datenschutz und rechtmäßige Nutzung"],
    packageIntro: "Diese Anleitung verwendet zwei unabhängige Community-Pakete. Keine der Dateien wird von dieser Website gehostet.",
    iosPlatform: "iPhone / iPad · iOS 16.1+",
    iosPackageNote: "Von der Community gebauter Full-Build passend zum offiziellen Mobile-Quellcode. Das Manifest sagt ausdrücklich „Unofficial“.",
    tvPlatform: "Apple TV · tvOS 26+",
    tvPackageNote: "Unsignierte, unabhängige Community-Beta. Sie ist weder mit NuvioMedia verbunden noch von NuvioMedia endorsed.",
    fullOnly: "Full verwenden — nicht Enhanced",
    fullOnlyText: "Enhanced enthält experimentelle Community-Änderungen. Diese Anfängeranleitung verwendet bewusst Full. Dessen Maintainer beschreibt den Build als unverändert aus dem Upstream erstellt; unabhängig reproduziert wurde diese Aussage nicht.",
    requirements: ["Ein iPhone oder iPad mit iOS/iPadOS 16.1 oder neuer.", "Ein kostenloser Apple Account; eine bezahlte Developer-Mitgliedschaft ist nicht erforderlich.", "Mac, Windows-PC oder Linux-Rechner für die normale erstmalige SideStore-Einrichtung.", "Ein USB-Kabel wird für die erste Verbindung empfohlen.", "Aktivierter Entwicklermodus auf iPhone oder iPad.", "WLAN und LocalDevVPN für Installation, Updates und Refreshes mit SideStore."],
    signingTitle: "Sieben-Tage-Signierung",
    signingText: "Mit einem kostenlosen Apple Personal Team signierte Apps starten nach sieben Tagen nicht mehr, wenn ihre Signatur nicht erneuert wird. Plane den Refresh schon vor der Installation ein.",
    iloaderIntro: "iLoader ist ein kostenloses Open-Source-Hilfsprogramm, das SideStore installiert und die benötigten Zertifikats- und Pairing-Dateien ablegt. Es unterstützt macOS, Windows und Linux.",
    iloaderSafety: "Lade iLoader nur von iloader.app oder github.com/nab138/iloader. Das Projekt bezeichnet ausschließlich diese beiden Orte als offizielle Downloads.",
    iloaderSteps: ["Installiere die aktuelle iLoader-Version. Windows benötigt die von iLoader genannten Apple-/iTunes-Komponenten; Linux eventuell usbmuxd; unter macOS gibt es keine zusätzliche Voraussetzung.", "Verbinde und entsperre iPhone oder iPad möglichst per USB und vertraue dem Computer.", "Öffne iLoader und melde dich mit dem Apple Account an, den du fürs Sideloading verwenden willst.", "Wähle das verbundene Gerät und SideStore (stable). LiveContainer ist nicht nötig, wenn du nur Nuvio installieren willst.", "Warte, bis SideStore auf dem Gerät erscheint.", "Vertraue dem Entwicklerprofil unter Einstellungen → Allgemein → VPN und Geräteverwaltung.", "Aktiviere den Entwicklermodus unter Einstellungen → Datenschutz & Sicherheit → Entwicklermodus und starte bei Aufforderung neu.", "Öffne SideStore, melde dich an und führe den vorgeschriebenen ersten Refresh durch."],
    sourceIntro: "Installiere LocalDevVPN aus dem App Store, verbinde es und füge dann diese Source in SideStore hinzu:",
    sourceSteps: ["Öffne SideStore und gehe zu Sources.", "Tippe auf den +-Button.", "Füge die oben angezeigte Source-URL ein.", "Öffne Nuvio Full — nicht Nuvio Enhanced.", "Starte die Installation und lasse LocalDevVPN verbunden.", "Beim Verarbeiten der eingebetteten Nuvio-Frameworks kann die Signierung festgefahren wirken. Warte einige Minuten, bevor du abbrichst."],
    patienceTitle: "Für ein Update die vorhandene App nicht löschen",
    patienceText: "Installiere ein Update möglichst über die bestehende Nuvio-Installation. Vorheriges Löschen erhöht das Risiko, lokale App-Daten zu verlieren.",
    updateIntro: "SideStore erledigt zwei verschiedene Aufgaben. Wer sie vermischt, hat eine schicke Anleitung, die spätestens eine Woche später auf die Nase fällt.",
    versionTitle: "Nuvio-Versionsupdate",
    versionText: "Die Full-Source macht eine neue Nuvio-Version direkt in SideStore sichtbar und erspart das manuelle Laden einer neuen IPA. Starte das Update in SideStore, sobald es erscheint.",
    refreshTitle: "Signatur-Refresh",
    refreshText: "Erneuere die installierte App, bevor das kostenlose Sieben-Tage-Provisioning-Profil abläuft. SideStore nutzt LocalDevVPN für Installationen, Updates und Refreshes.",
    autoWarning: "Versprich keine unbeaufsichtigten Hintergrund-Updates. Die Source ermöglicht komfortable, vom Nutzer gestartete Updates. Auch iLoader führt automatischen App-Refresh nur als zukünftige Funktion, nicht als aktuelle.",
    sideloadlyIntro: "Sideloadly ist der einfachere Weg, wenn du die aktuelle Full-IPA herunterladen und direkt von einem Mac oder Windows-PC installieren möchtest.",
    sideloadlySteps: ["Lade Nuvio-v0.4.5-Full.ipa aus dem geprüften Community-Release.", "Lade Sideloadly ausschließlich von sideloadly.io.", "Verbinde und entsperre das Gerät und wähle es in Sideloadly aus.", "Lade die Full-IPA, signiere sie mit dem Apple Account und installiere sie.", "Vertraue dem Entwicklerprofil und aktiviere den Entwicklermodus.", "Signiere vor Ablauf der sieben Tage erneut oder richte den Refresh-Daemon von Sideloadly korrekt ein."],
    sideloadlyTradeoff: "Sideloadly benötigt weniger Ersteinrichtung, bietet aber nicht den komfortablen Nuvio-Full-Source-Ablauf von SideStore.",
    firstLaunchSteps: ["Öffne Nuvio, nachdem Profilvertrauen und Entwicklermodus eingerichtet sind.", "Melde dich mit einem bestehenden Nuvio-Account an oder erstelle ihn über die offizielle Website nuvio.tv.", "Wähle oder erstelle das Profil und prüfe die Synchronisierung.", "Konfiguriere nur Erweiterungen, Dienste und Inhaltsquellen, zu deren Nutzung du berechtigt bist.", "Optionale Dienste wie Trakt oder Simkl sind für die Installation nicht erforderlich."],
    dataTitle: "Ein Wechsel der Installationsmethode kann lokale Daten betreffen",
    dataText: "Ein Update über die bestehende Installation sollte App-Daten normalerweise erhalten, ist aber keine absolute Garantie. Prüfe vor einem Werkzeugwechsel, ob wichtige Profile oder Einstellungen synchronisiert oder gesichert sind. Ein einzelner Community-Bericht beschrieb verlorene Familienprofile bei einer Migration; die Ursache wurde nicht unabhängig geklärt.",
    tvIntro: "NuvioMedia veröffentlicht keinen offiziellen tvOS-Client. Diese Schritte verwenden youngchris29-art/NuvioTV, eine unabhängige Beta, die eine Verbindung oder Empfehlung durch den Upstream ausdrücklich verneint.",
    tvRequirements: ["Apple TV mit tvOS 26 oder neuer.", "Ein Mac mit Sideloadly.", "Mac und Apple TV im selben lokalen Netzwerk.", "Ein kostenloser Apple Account genügt.", "Rechne mindestens alle sieben Tage mit manueller Neusignierung."],
    tvSteps: ["Lade NuvioTV.ipa aus dem geprüften Release v0.3.0 beta.11.", "Öffne auf Apple TV Einstellungen → Fernbedienungen und Geräte → Remote-App und Geräte.", "Öffne Sideloadly auf dem Mac und schließe das Pairing ab, falls ein Code erscheint.", "Wähle Apple TV als Ziel und lade NuvioTV.ipa.", "Signiere mit dem Apple Account und starte die Installation.", "Falls tvOS fragt, vertraue dem Entwicklerzertifikat unter Einstellungen → Allgemein → Datenschutz & Sicherheit.", "Starte NuvioTV, melde dich an und konfiguriere deine eigenen rechtmäßigen Quellen.", "Signiere vor oder nach Ablauf des Sieben-Tage-Profils erneut."],
    windowsTitle: "Für den Apple-TV-Anfängerweg einen Mac verwenden",
    windowsText: "Das Community-README erwähnt Windows, aber Sideloadlys eigene tvOS-Hinweise belegen kein zuverlässiges drahtloses Apple-TV-Pairing unter Windows. Diese Anleitung verspricht es deshalb nicht.",
    topShelfTitle: "Fehlendes Top Shelf ist erwartet",
    topShelfText: "Die geprüfte Sideload-IPA enthält keine Top-Shelf-Erweiterung, weil kostenlose Neusignierung deren Signaturen beschädigen kann. Das ist eine Paketgrenze und kein Installationsfehler.",
    limitsIntro: "Apples aktuelle Personal-Team-Grenzen für kostenlose Entwicklungssignierung umfassen:",
    limits: ["Provisioning-Profile und registrierte App IDs laufen nach sieben Tagen ab.", "Bis zu 10 App IDs.", "Bis zu 3 registrierte Geräte.", "Bis zu 3 sideloaded Apps pro Gerät; SideStore selbst zählt als eine davon."],
    limitsEnd: "Eine bezahlte Apple-Developer-Mitgliedschaft verändert die Signaturdauer, ist für diese Anleitung aber nicht erforderlich.",
    trouble: [
      { title: "Die Signierung wirkt festgefahren", items: ["Warte einige Minuten; Nuvio enthält viele eingebettete Frameworks.", "Verwende für die erste Installation möglichst USB.", "Brich nicht sofort ab, wenn der Fortschrittsbalken pausiert."] },
      { title: "SideStore kann nicht installieren oder refreshen", items: ["Prüfe, ob WLAN und LocalDevVPN aktiv sind.", "Führe den ersten SideStore-Refresh aus.", "Ersetze die Pairing-Datei, wenn sie nach iOS-Update oder Geräte-Reset ungültig wurde."] },
      { title: "Nuvio startet nicht mehr", items: ["Prüfe, ob sieben Tage vergangen sind.", "Refreshe oder signiere die App neu.", "Prüfe Entwicklermodus und Vertrauen des Entwicklerprofils."] },
      { title: "Apple TV wird nicht erkannt", items: ["Bringe Mac und Apple TV ins gleiche Netzwerk.", "Öffne Remote-App und Geräte auf Apple TV.", "Verwende macOS, statt drahtloses Windows-Pairing vorauszusetzen."] },
    ],
    securityTitle: "Warnung zu Community-Binärdateien",
    securityText: "Offener Upstream-Quellcode beweist nicht, dass eine heruntergeladene Binärdatei identisch ist. Der Full-Maintainer behauptet Upstream-Gleichheit; diese Anleitung behandelt das nicht als unabhängige Reproducible-Build-Prüfung.",
    legalTitle: "Nuvio stellt keine Medien bereit",
    legalText: "Nuvio arbeitet mit vom Nutzer gewählten Erweiterungen und Quellen. Diese Anleitung behandelt nur die Installation und liefert keine auf Piraterie ausgerichteten Quellenpakete. Nutze nur Dienste und Inhalte, zu deren Zugriff du berechtigt bist.",
    sourcesTitle: "Geprüfte Quellen",
    sourceLabels: ["Offizieller Nuvio-Mobile-Quellcode", "Offizieller Nuvio-Release 0.4.5", "Community-Release Nuvio Full 0.4.5", "Nuvio-Full-Source-Manifest", "Offizielles iLoader-Repository", "Offizielle iLoader-Website", "SideStore-Dokumentation", "Sideloadly", "Apple-Personal-Team-Limits", "NuvioTV-Community-Beta", "Community-Ablauf mit SideStore", "Diskussion zur Nuvio-Update-Source"],
    notesLink: "Prüfnotizen zur Anleitung",
    reviewed: "Quellen und Abläufe am 15. August 2026 geprüft. Direkte Paketversionen sind Momentaufnahmen; prüfe Release und Manifest vor der Installation erneut.",
  },
  es: {
    eyebrow: "NUVIO · GUÍA DE SIDELOADING",
    title: "Instalar Nuvio en iPhone, iPad y Apple TV.",
    lead: "Guía con fuentes verificadas para SideStore, iLoader, Sideloadly y la beta comunitaria no oficial de Apple TV.",
    upstream: "Código oficial de Nuvio ↗",
    releases: "Compilación comunitaria iOS ↗",
    keyTitle: "Código oficial no significa binario oficial",
    keyText: "Nuvio Mobile es mantenido por el proyecto oficial NuvioMedia. El IPA Full enlazado aquí lo publica otro repositorio comunitario, cuyo manifiesto lo califica como no oficial. Apple TV también depende exclusivamente de la comunidad.",
    startLabel: "Empieza con tu dispositivo",
    iosStart: "iPhone / iPad",
    tvStart: "Beta para Apple TV",
    onPage: "En esta página",
    backToTop: "Volver arriba ↑",
    toc: ["Paquetes y origen", "Requisitos", "Instalar SideStore", "Añadir Nuvio", "Actualizaciones y renovación", "Sideloadly", "Primer inicio", "Beta de Apple TV", "Límites de firma", "Solución de problemas", "Seguridad"],
    sections: ["Elegir el paquete correcto", "Qué necesitas", "Instalar SideStore con iLoader", "Añadir la fuente Nuvio Full", "Actualizar la app no renueva la firma", "Alternativa sencilla: Sideloadly", "Primer inicio y datos", "Apple TV — beta comunitaria no oficial", "Límites de la firma gratuita de Apple", "Solución rápida de problemas", "Seguridad, privacidad y uso legal"],
    packageIntro: "Esta guía usa dos paquetes comunitarios independientes. Este sitio no aloja ninguno de ellos.",
    iosPlatform: "iPhone / iPad · iOS 16.1+",
    iosPackageNote: "Versión Full compilada por la comunidad y alineada con el código móvil oficial. El manifiesto dice expresamente “Unofficial”.",
    tvPlatform: "Apple TV · tvOS 26+",
    tvPackageNote: "Beta comunitaria independiente y sin firmar. No está afiliada ni respaldada por NuvioMedia.",
    fullOnly: "Usa Full, no Enhanced",
    fullOnlyText: "Enhanced contiene cambios experimentales de la comunidad. Esta guía para principiantes usa Full, cuyo mantenedor afirma compilarlo sin cambios desde el upstream. Esa afirmación no se ha reproducido de forma independiente.",
    requirements: ["Un iPhone o iPad con iOS/iPadOS 16.1 o posterior.", "Una cuenta gratuita de Apple; no se necesita membresía de desarrollador de pago.", "Mac, PC con Windows o equipo Linux para la configuración inicial normal de SideStore.", "Se recomienda un cable USB para la primera conexión.", "Modo de desarrollador activado en el iPhone o iPad.", "Wi‑Fi y LocalDevVPN para instalaciones, actualizaciones y renovaciones de SideStore."],
    signingTitle: "Firma de siete días",
    signingText: "Las apps firmadas con un Personal Team gratuito dejan de abrirse después de siete días si no se renuevan. Planifica la renovación antes de instalar.",
    iloaderIntro: "iLoader es una herramienta gratuita y de código abierto que instala SideStore y coloca los archivos de certificado y vinculación necesarios. Funciona en macOS, Windows y Linux.",
    iloaderSafety: "Descarga iLoader solo desde iloader.app o github.com/nab138/iloader. El proyecto identifica estos dos lugares como sus únicas descargas oficiales.",
    iloaderSteps: ["Instala la versión actual de iLoader. Windows necesita los componentes Apple/iTunes indicados por iLoader; Linux puede necesitar usbmuxd; macOS no tiene requisitos adicionales.", "Conecta y desbloquea el iPhone o iPad, preferiblemente por USB, y confía en el ordenador.", "Abre iLoader e inicia sesión con la cuenta de Apple que usarás para el sideloading.", "Selecciona el dispositivo y SideStore (stable). LiveContainer no es necesario si solo quieres Nuvio.", "Espera a que SideStore aparezca en el dispositivo.", "Confía en el perfil de desarrollador en Ajustes → General → VPN y gestión de dispositivos.", "Activa el modo de desarrollador en Ajustes → Privacidad y seguridad → Modo de desarrollador y reinicia si se solicita.", "Abre SideStore, inicia sesión y realiza su primera renovación obligatoria."],
    sourceIntro: "Instala LocalDevVPN desde el App Store, conéctalo y añade esta fuente en SideStore:",
    sourceSteps: ["Abre SideStore y entra en Sources.", "Pulsa el botón +.", "Pega la URL mostrada arriba.", "Abre Nuvio Full, no Nuvio Enhanced.", "Inicia la instalación y mantén LocalDevVPN conectado.", "La firma puede parecer bloqueada mientras procesa los frameworks de Nuvio. Espera varios minutos antes de cancelar."],
    patienceTitle: "No borres la app existente para actualizar",
    patienceText: "Instala la actualización sobre Nuvio cuando sea posible. Borrarla primero aumenta el riesgo de perder datos locales.",
    updateIntro: "SideStore realiza dos tareas distintas. Confundirlas produce una guía muy elegante que deja de funcionar una semana después.",
    versionTitle: "Actualización de versión de Nuvio",
    versionText: "La fuente Full muestra nuevas versiones en SideStore y evita descargar manualmente otro IPA. Inicia la actualización desde SideStore cuando aparezca.",
    refreshTitle: "Renovación de la firma",
    refreshText: "Renueva la app antes de que caduque el perfil gratuito de siete días. SideStore usa LocalDevVPN para instalar, actualizar y renovar.",
    autoWarning: "No prometas actualizaciones de versión desatendidas. La fuente permite actualizaciones cómodas iniciadas por el usuario. iLoader también enumera la renovación automática como función futura, no actual.",
    sideloadlyIntro: "Sideloadly es la ruta más sencilla para descargar el IPA Full actual e instalarlo directamente desde un Mac o PC con Windows.",
    sideloadlySteps: ["Descarga Nuvio-v0.4.5-Full.ipa desde la versión comunitaria verificada.", "Descarga Sideloadly únicamente desde sideloadly.io.", "Conecta y desbloquea el dispositivo y selecciónalo en Sideloadly.", "Carga el IPA Full, fírmalo con la cuenta de Apple e instálalo.", "Confía en el perfil de desarrollador y activa el modo de desarrollador.", "Vuelve a firmar antes de siete días o configura correctamente el servicio de renovación de Sideloadly."],
    sideloadlyTradeoff: "Sideloadly requiere menos configuración inicial, pero no ofrece el cómodo flujo de la fuente Nuvio Full en SideStore.",
    firstLaunchSteps: ["Abre Nuvio después de confiar en el perfil y activar el modo de desarrollador.", "Inicia sesión o crea una cuenta mediante el sitio oficial nuvio.tv.", "Selecciona o crea el perfil y comprueba la sincronización.", "Configura solo extensiones, servicios y fuentes que estés autorizado a usar.", "Servicios opcionales como Trakt o Simkl no son necesarios para instalar."],
    dataTitle: "Cambiar el método de instalación puede afectar los datos locales",
    dataText: "Actualizar sobre la instalación existente debería conservar los datos normalmente, pero no es una garantía absoluta. Comprueba la sincronización o copia de perfiles y ajustes antes de cambiar de herramienta. Un único informe comunitario describió perfiles familiares perdidos durante una migración; la causa no fue verificada.",
    tvIntro: "NuvioMedia no publica un cliente oficial de tvOS. Estos pasos usan youngchris29-art/NuvioTV, una beta independiente que niega expresamente afiliación o respaldo del upstream.",
    tvRequirements: ["Apple TV con tvOS 26 o posterior.", "Un Mac con Sideloadly.", "Mac y Apple TV en la misma red local.", "Una cuenta gratuita de Apple es suficiente.", "Cuenta con volver a firmar manualmente al menos cada siete días."],
    tvSteps: ["Descarga NuvioTV.ipa desde la versión verificada v0.3.0 beta.11.", "En Apple TV abre Ajustes → Mandos y dispositivos → App Remote y dispositivos.", "Abre Sideloadly en el Mac y completa la vinculación si aparece un código.", "Selecciona el Apple TV como destino y carga NuvioTV.ipa.", "Firma con la cuenta de Apple e inicia la instalación.", "Si tvOS lo pide, confía en el certificado en Ajustes → General → Privacidad y seguridad.", "Abre NuvioTV, inicia sesión y configura tus propias fuentes legales.", "Vuelve a firmar antes o después de que caduque el perfil de siete días."],
    windowsTitle: "Usa un Mac para el flujo básico de Apple TV",
    windowsText: "El README comunitario menciona Windows, pero las notas de tvOS de Sideloadly no demuestran una vinculación inalámbrica fiable en Windows. Esta guía no la promete.",
    topShelfTitle: "La ausencia de Top Shelf es normal",
    topShelfText: "El IPA verificado omite la extensión Top Shelf porque la firma gratuita puede romper sus firmas. Es una limitación del paquete, no una instalación fallida.",
    limitsIntro: "Las restricciones actuales del Personal Team gratuito incluyen:",
    limits: ["Los perfiles y App IDs registrados caducan después de siete días.", "Hasta 10 App IDs.", "Hasta 3 dispositivos registrados.", "Hasta 3 apps por dispositivo; SideStore cuenta como una."],
    limitsEnd: "Una membresía de pago cambia la validez de la firma, pero no es necesaria para esta guía.",
    trouble: [
      { title: "La firma parece bloqueada", items: ["Espera varios minutos; Nuvio contiene muchos frameworks.", "Usa USB para la instalación inicial si es posible.", "No canceles inmediatamente si la barra se detiene."] },
      { title: "SideStore no instala o renueva", items: ["Comprueba Wi‑Fi y LocalDevVPN.", "Realiza la primera renovación de SideStore.", "Sustituye el archivo de vinculación si quedó inválido tras una actualización o restablecimiento."] },
      { title: "Nuvio ya no abre", items: ["Comprueba si han pasado siete días.", "Renueva o vuelve a firmar la app.", "Comprueba el modo de desarrollador y la confianza del perfil."] },
      { title: "Apple TV no aparece", items: ["Pon Mac y Apple TV en la misma red.", "Abre App Remote y dispositivos en Apple TV.", "Usa macOS en vez de asumir que Windows funciona de forma inalámbrica."] },
    ],
    securityTitle: "Advertencia sobre binarios comunitarios",
    securityText: "Que el código upstream sea abierto no demuestra que un binario descargado sea idéntico. El mantenedor de Full afirma paridad, pero esta guía no lo presenta como verificación reproducible independiente.",
    legalTitle: "Nuvio no proporciona contenido",
    legalText: "Nuvio trabaja con extensiones y fuentes elegidas por el usuario. Esta guía solo cubre la instalación y no proporciona paquetes orientados a la piratería. Usa únicamente servicios y contenidos que puedas utilizar legalmente.",
    sourcesTitle: "Fuentes verificadas",
    sourceLabels: ["Código oficial de Nuvio Mobile", "Versión oficial Nuvio 0.4.5", "Versión comunitaria Nuvio Full 0.4.5", "Manifiesto de la fuente Nuvio Full", "Repositorio oficial de iLoader", "Sitio oficial de iLoader", "Documentación de SideStore", "Sideloadly", "Límites Personal Team de Apple", "Beta comunitaria NuvioTV", "Flujo comunitario con SideStore", "Discusión sobre la fuente de actualizaciones"],
    notesLink: "Notas de verificación de la guía",
    reviewed: "Fuentes y flujo verificados el 15 de agosto de 2026. Las versiones son una instantánea; comprueba el release y el manifiesto antes de instalar.",
  },
  fr: {
    eyebrow: "NUVIO · GUIDE DE SIDELOADING",
    title: "Installer Nuvio sur iPhone, iPad et Apple TV.",
    lead: "Guide vérifié pour SideStore, iLoader, Sideloadly et la bêta communautaire non officielle sur Apple TV.",
    upstream: "Source officielle de Nuvio ↗",
    releases: "Build iOS communautaire ↗",
    keyTitle: "Un code source officiel n'est pas un binaire officiel",
    keyText: "Nuvio Mobile est maintenu par le projet officiel NuvioMedia. L'IPA Full liée ici est construite et publiée par un dépôt communautaire distinct dont le manifeste la qualifie de non officielle. Apple TV est également pris en charge uniquement par la communauté.",
    startLabel: "Commence avec ton appareil",
    iosStart: "iPhone / iPad",
    tvStart: "Bêta Apple TV",
    onPage: "Sur cette page",
    backToTop: "Retour en haut ↑",
    toc: ["Paquets et provenance", "Prérequis", "Installer SideStore", "Ajouter Nuvio", "Mises à jour et renouvellement", "Sideloadly", "Premier lancement", "Bêta Apple TV", "Limites de signature", "Dépannage", "Sécurité"],
    sections: ["Choisir le bon paquet", "Ce qu'il faut", "Installer SideStore avec iLoader", "Ajouter la source Nuvio Full", "Une mise à jour n'est pas un renouvellement de signature", "Alternative simple : Sideloadly", "Premier lancement et données", "Apple TV — bêta communautaire non officielle", "Limites de la signature Apple gratuite", "Dépannage rapide", "Sécurité, confidentialité et usage légal"],
    packageIntro: "Ce guide utilise deux paquets communautaires indépendants. Ce site n'héberge aucun des deux.",
    iosPlatform: "iPhone / iPad · iOS 16.1+",
    iosPackageNote: "Variante Full construite par la communauté et alignée sur la source mobile officielle. Le manifeste dit explicitement « Unofficial ».",
    tvPlatform: "Apple TV · tvOS 26+",
    tvPackageNote: "Bêta communautaire indépendante et non signée. Elle n'est ni affiliée à NuvioMedia ni approuvée par celui-ci.",
    fullOnly: "Utiliser Full, pas Enhanced",
    fullOnlyText: "Enhanced contient des modifications communautaires expérimentales. Ce guide utilise Full, que son mainteneur décrit comme construite sans modification depuis l'upstream. Cette affirmation n'a pas été reproduite indépendamment.",
    requirements: ["Un iPhone ou iPad sous iOS/iPadOS 16.1 ou version ultérieure.", "Un compte Apple gratuit ; aucun abonnement développeur payant n'est requis.", "Un Mac, PC Windows ou ordinateur Linux pour l'installation initiale normale de SideStore.", "Un câble USB est recommandé pour la première connexion.", "Le mode développeur activé sur l'iPhone ou l'iPad.", "Le Wi‑Fi et LocalDevVPN pour les installations, mises à jour et renouvellements SideStore."],
    signingTitle: "Signature de sept jours",
    signingText: "Les apps signées avec une Personal Team gratuite cessent de s'ouvrir après sept jours sans renouvellement. Prévois ce renouvellement avant l'installation.",
    iloaderIntro: "iLoader est un outil gratuit et open source qui installe SideStore et place les fichiers de certificat et de jumelage nécessaires. Il prend en charge macOS, Windows et Linux.",
    iloaderSafety: "Télécharge iLoader uniquement depuis iloader.app ou github.com/nab138/iloader. Le projet identifie ces deux emplacements comme ses seules sources officielles.",
    iloaderSteps: ["Installe la version actuelle d'iLoader. Windows requiert les composants Apple/iTunes indiqués ; Linux peut nécessiter usbmuxd ; macOS n'a pas de prérequis supplémentaire.", "Connecte et déverrouille l'iPhone ou l'iPad, de préférence en USB, puis fais confiance à l'ordinateur.", "Ouvre iLoader et connecte-toi avec le compte Apple destiné au sideloading.", "Sélectionne l'appareil puis SideStore (stable). LiveContainer est inutile si tu veux seulement Nuvio.", "Attends que SideStore apparaisse sur l'appareil.", "Fais confiance au profil dans Réglages → Général → VPN et gestion de l'appareil.", "Active le mode développeur dans Réglages → Confidentialité et sécurité → Mode développeur et redémarre si demandé.", "Ouvre SideStore, connecte-toi et effectue son premier renouvellement obligatoire."],
    sourceIntro: "Installe LocalDevVPN depuis l'App Store, connecte-le, puis ajoute cette source dans SideStore :",
    sourceSteps: ["Ouvre SideStore et va dans Sources.", "Appuie sur le bouton +.", "Colle l'URL affichée ci-dessus.", "Ouvre Nuvio Full, pas Nuvio Enhanced.", "Lance l'installation en gardant LocalDevVPN connecté.", "La signature peut sembler bloquée pendant le traitement des frameworks de Nuvio. Attends plusieurs minutes avant d'annuler."],
    patienceTitle: "Ne supprime pas l'app existante avant une mise à jour",
    patienceText: "Installe la mise à jour par-dessus Nuvio si possible. Supprimer d'abord augmente le risque de perdre des données locales.",
    updateIntro: "SideStore remplit deux fonctions différentes. Les confondre donne un joli guide qui tombe en panne une semaine plus tard.",
    versionTitle: "Mise à jour de Nuvio",
    versionText: "La source Full affiche les nouvelles versions dans SideStore et évite de télécharger manuellement un nouvel IPA. Lance la mise à jour depuis SideStore lorsqu'elle apparaît.",
    refreshTitle: "Renouvellement de la signature",
    refreshText: "Renouvelle l'app avant l'expiration du profil gratuit de sept jours. SideStore utilise LocalDevVPN pour installer, mettre à jour et renouveler.",
    autoWarning: "Ne promets pas des mises à jour automatiques sans intervention. La source permet des mises à jour pratiques lancées par l'utilisateur. iLoader indique aussi le renouvellement automatique comme fonctionnalité future, pas actuelle.",
    sideloadlyIntro: "Sideloadly est la voie la plus simple pour télécharger l'IPA Full actuelle et l'installer directement depuis un Mac ou un PC Windows.",
    sideloadlySteps: ["Télécharge Nuvio-v0.4.5-Full.ipa depuis la version communautaire vérifiée.", "Télécharge Sideloadly uniquement depuis sideloadly.io.", "Connecte et déverrouille l'appareil, puis sélectionne-le dans Sideloadly.", "Charge l'IPA Full, signe-la avec le compte Apple et installe-la.", "Fais confiance au profil et active le mode développeur.", "Signe à nouveau avant sept jours ou configure correctement le service de renouvellement Sideloadly."],
    sideloadlyTradeoff: "Sideloadly demande moins de configuration initiale, mais n'offre pas le flux pratique de la source Nuvio Full dans SideStore.",
    firstLaunchSteps: ["Ouvre Nuvio après avoir approuvé le profil et activé le mode développeur.", "Connecte-toi ou crée un compte via le site officiel nuvio.tv.", "Sélectionne ou crée le profil et vérifie la synchronisation.", "Configure uniquement les extensions, services et sources que tu es autorisé à utiliser.", "Les services facultatifs comme Trakt ou Simkl ne sont pas requis pour l'installation."],
    dataTitle: "Changer de méthode d'installation peut affecter les données locales",
    dataText: "Mettre à jour par-dessus l'installation existante devrait normalement préserver les données, sans garantie absolue. Vérifie la synchronisation ou la sauvegarde des profils et réglages avant de changer d'outil. Un seul témoignage communautaire a décrit la perte de profils familiaux ; la cause n'a pas été établie.",
    tvIntro: "NuvioMedia ne publie aucun client tvOS officiel. Ces étapes utilisent youngchris29-art/NuvioTV, une bêta indépendante qui exclut explicitement toute affiliation ou approbation par l'upstream.",
    tvRequirements: ["Apple TV sous tvOS 26 ou version ultérieure.", "Un Mac avec Sideloadly.", "Mac et Apple TV sur le même réseau local.", "Un compte Apple gratuit suffit.", "Prévois une nouvelle signature manuelle au moins tous les sept jours."],
    tvSteps: ["Télécharge NuvioTV.ipa depuis la version vérifiée v0.3.0 beta.11.", "Sur Apple TV, ouvre Réglages → Télécommandes et appareils → App Remote et appareils.", "Ouvre Sideloadly sur le Mac et termine le jumelage si un code apparaît.", "Sélectionne l'Apple TV comme cible et charge NuvioTV.ipa.", "Signe avec le compte Apple et lance l'installation.", "Si tvOS le demande, approuve le certificat dans Réglages → Général → Confidentialité et sécurité.", "Lance NuvioTV, connecte-toi et configure tes propres sources légales.", "Signe à nouveau avant ou après l'expiration du profil de sept jours."],
    windowsTitle: "Utiliser un Mac pour le parcours Apple TV débutant",
    windowsText: "Le README communautaire mentionne Windows, mais les notes tvOS de Sideloadly n'établissent pas un jumelage sans fil fiable sous Windows. Ce guide ne le promet donc pas.",
    topShelfTitle: "L'absence de Top Shelf est normale",
    topShelfText: "L'IPA vérifiée omet l'extension Top Shelf, car la signature gratuite peut casser ses signatures. C'est une limite du paquet, pas un échec d'installation.",
    limitsIntro: "Les restrictions actuelles de la Personal Team gratuite comprennent :",
    limits: ["Les profils et App IDs enregistrés expirent après sept jours.", "Jusqu'à 10 App IDs.", "Jusqu'à 3 appareils enregistrés.", "Jusqu'à 3 apps par appareil ; SideStore en compte pour une."],
    limitsEnd: "Un abonnement Apple Developer payant modifie la durée de signature, mais n'est pas nécessaire pour ce guide.",
    trouble: [
      { title: "La signature semble bloquée", items: ["Attends plusieurs minutes ; Nuvio contient de nombreux frameworks.", "Utilise l'USB pour l'installation initiale si possible.", "N'annule pas immédiatement si la barre s'arrête."] },
      { title: "SideStore n'installe ou ne renouvelle pas", items: ["Vérifie le Wi‑Fi et LocalDevVPN.", "Effectue le premier renouvellement SideStore.", "Remplace le fichier de jumelage s'il est devenu invalide après une mise à jour ou réinitialisation."] },
      { title: "Nuvio ne s'ouvre plus", items: ["Vérifie si sept jours se sont écoulés.", "Renouvelle ou signe à nouveau l'app.", "Vérifie le mode développeur et la confiance du profil."] },
      { title: "Apple TV n'est pas détectée", items: ["Place le Mac et l'Apple TV sur le même réseau.", "Ouvre App Remote et appareils sur Apple TV.", "Utilise macOS plutôt que de supposer le jumelage sans fil Windows."] },
    ],
    securityTitle: "Avertissement sur les binaires communautaires",
    securityText: "Un code upstream ouvert ne prouve pas qu'un binaire téléchargé est identique. Le mainteneur de Full affirme la parité, mais ce guide ne présente pas cela comme une vérification reproductible indépendante.",
    legalTitle: "Nuvio ne fournit pas de médias",
    legalText: "Nuvio fonctionne avec des extensions et sources choisies par l'utilisateur. Ce guide couvre uniquement l'installation et ne fournit aucun ensemble destiné au piratage. Utilise seulement les services et contenus auxquels tu es légalement autorisé à accéder.",
    sourcesTitle: "Sources vérifiées",
    sourceLabels: ["Source officielle Nuvio Mobile", "Version officielle Nuvio 0.4.5", "Version communautaire Nuvio Full 0.4.5", "Manifeste de la source Nuvio Full", "Dépôt officiel iLoader", "Site officiel iLoader", "Documentation SideStore", "Sideloadly", "Limites Personal Team Apple", "Bêta communautaire NuvioTV", "Parcours SideStore communautaire", "Discussion sur la source de mise à jour"],
    notesLink: "Notes de vérification du guide",
    reviewed: "Sources et parcours vérifiés le 15 août 2026. Les versions sont un instantané ; vérifie le release et le manifeste avant l'installation.",
  },
};

const ids = ["packages", "needs", "iloader", "source", "updates", "sideloadly", "first-launch", "apple-tv", "limits", "trouble", "safety"];
const sourceLinks = [
  "https://github.com/NuvioMedia/NuvioMobile",
  "https://github.com/NuvioMedia/NuvioMobile/releases/tag/0.4.5",
  fullReleaseUrl,
  fullSourceUrl,
  "https://github.com/nab138/iloader",
  "https://iloader.app/",
  "https://docs.sidestore.io/",
  "https://sideloadly.io/",
  "https://developer.apple.com/help/account/basics/about-your-developer-account",
  tvReleaseUrl,
  "https://www.reddit.com/r/Nuvio/comments/1vdpdpm/the_best_way_to_sideload_nuvio_in_my_opinion/",
  "https://www.reddit.com/r/Nuvio/comments/1vm372q/sideloaded_ios_nuvio_auto_update/",
];

function Section({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return <section id={id} className="section"><div className="section-kicker">{number}</div><h2>{title}</h2>{children}</section>;
}

function Note({ children, warning = false }: { children: React.ReactNode; warning?: boolean }) {
  return <div className={warning ? "callout warning" : "callout note"}>{children}</div>;
}

function Checklist({ items }: { items: readonly string[] }) {
  const [checked, setChecked] = useState(() => items.map(() => false));
  return <ul className="checklist">{items.map((item, index) => <li key={item}><label><input type="checkbox" checked={checked[index]} onChange={() => setChecked((state) => state.map((value, position) => position === index ? !value : value))} /><span>{item}</span></label></li>)}</ul>;
}

function CopySource({ lang }: { lang: Lang }) {
  const labels: Record<Lang, [string, string]> = { en: ["Copy", "Copied"], de: ["Kopieren", "Kopiert"], es: ["Copiar", "Copiado"], fr: ["Copier", "Copié"] };
  const [copied, setCopied] = useState(false);
  async function copyValue() {
    try { await navigator.clipboard.writeText(fullSourceUrl); }
    catch { const area = document.createElement("textarea"); area.value = fullSourceUrl; document.body.appendChild(area); area.select(); document.execCommand("copy"); area.remove(); }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }
  return <div className="code-box"><code>{fullSourceUrl}</code><button type="button" onClick={copyValue} aria-live="polite">{copied ? `✓ ${labels[lang][1]}` : `⧉ ${labels[lang][0]}`}</button></div>;
}

export default function NuvioGuide({ initialLang }: { initialLang: Lang }) {
  const t = copy[initialLang];
  return <main id="top">
    <nav className="guide-nav" aria-label={initialLang === "de" ? "Alle Anleitungen" : initialLang === "es" ? "Todas las guías" : initialLang === "fr" ? "Tous les guides" : "All guides"}>
      <Link href={languageHref(initialLang, "hub")}>← {initialLang === "de" ? "Alle Anleitungen" : initialLang === "es" ? "Todas las guías" : initialLang === "fr" ? "Tous les guides" : "All guides"}</Link>
      <a href="https://github.com/berot3/ios-tvos-sideloading-guides">GitHub ↗</a>
    </nav>
    <header className="hero">
      <div className="hero-top"><div className="eyebrow">{t.eyebrow}</div><LanguageSwitcher lang={initialLang} route="nuvio" detectLanguage={initialLang === "en"} /></div>
      <h1>{t.title}</h1><p className="lead">{t.lead}</p>
      <div className="hero-links"><a href="https://github.com/NuvioMedia/NuvioMobile" target="_blank" rel="noreferrer">{t.upstream}</a><a href={fullReleaseUrl} target="_blank" rel="noreferrer">{t.releases}</a></div>
    </header>
    <Note warning><strong>{t.keyTitle}</strong><br />{t.keyText}</Note>
    <div className="start-here"><p>{t.startLabel}</p><div><a href="#iloader">{t.iosStart} <span>→</span></a><a href="#apple-tv">{t.tvStart} <span>→</span></a></div></div>
    <nav className="toc" aria-label={t.onPage}><div className="toc-title">{t.onPage}</div><div className="toc-grid">{t.toc.map((label, index) => <a key={label} href={`#${ids[index]}`}>{label}</a>)}</div></nav>

    <Section id="packages" number="01" title={t.sections[0]}>
      <p>{t.packageIntro}</p>
      <div className="ipa-grid"><div><span>{t.iosPlatform}</span><code>Nuvio-v0.4.5-Full.ipa</code><p>{t.iosPackageNote}</p><a href={fullReleaseUrl} target="_blank" rel="noreferrer">GitHub release ↗</a></div><div><span>{t.tvPlatform}</span><code>NuvioTV.ipa</code><p>{t.tvPackageNote}</p><a href={tvReleaseUrl} target="_blank" rel="noreferrer">GitHub release ↗</a></div></div>
      <Note><strong>{t.fullOnly}</strong><br />{t.fullOnlyText}</Note>
    </Section>
    <Section id="needs" number="02" title={t.sections[1]}><div className="card"><Checklist items={t.requirements} /></div><Note warning><strong>{t.signingTitle}</strong><br />{t.signingText}</Note></Section>
    <Section id="iloader" number="03" title={t.sections[2]}><p>{t.iloaderIntro}</p><Note warning>{t.iloaderSafety}</Note><ol>{t.iloaderSteps.map((step) => <li key={step}><span>{step}</span></li>)}</ol><p className="source-line"><a href="https://iloader.app/" target="_blank" rel="noreferrer">iloader.app ↗</a> · <a href="https://github.com/nab138/iloader" target="_blank" rel="noreferrer">GitHub ↗</a></p></Section>
    <Section id="source" number="04" title={t.sections[3]}><p>{t.sourceIntro}</p><CopySource lang={initialLang} /><ol>{t.sourceSteps.map((step) => <li key={step}><span>{step}</span></li>)}</ol><Note warning><strong>{t.patienceTitle}</strong><br />{t.patienceText}</Note></Section>
    <Section id="updates" number="05" title={t.sections[4]}><p>{t.updateIntro}</p><div className="trouble-grid"><div><h3>{t.versionTitle}</h3><p>{t.versionText}</p></div><div><h3>{t.refreshTitle}</h3><p>{t.refreshText}</p></div></div><Note warning>{t.autoWarning}</Note></Section>
    <Section id="sideloadly" number="06" title={t.sections[5]}><p>{t.sideloadlyIntro}</p><ol>{t.sideloadlySteps.map((step) => <li key={step}><span>{step}</span></li>)}</ol><Note>{t.sideloadlyTradeoff}</Note></Section>
    <Section id="first-launch" number="07" title={t.sections[6]}><ol>{t.firstLaunchSteps.map((step) => <li key={step}><span>{step}</span></li>)}</ol><Note warning><strong>{t.dataTitle}</strong><br />{t.dataText}</Note></Section>
    <Section id="apple-tv" number="08" title={t.sections[7]}><Note warning>{t.tvIntro}</Note><div className="card"><Checklist items={t.tvRequirements} /></div><ol>{t.tvSteps.map((step) => <li key={step}><span>{step}</span></li>)}</ol><Note warning><strong>{t.windowsTitle}</strong><br />{t.windowsText}</Note><Note><strong>{t.topShelfTitle}</strong><br />{t.topShelfText}</Note></Section>
    <Section id="limits" number="09" title={t.sections[8]}><p>{t.limitsIntro}</p><div className="refresh-requirements"><ul>{t.limits.map((limit) => <li key={limit}>{limit}</li>)}</ul></div><p>{t.limitsEnd}</p></Section>
    <Section id="trouble" number="10" title={t.sections[9]}><div className="trouble-grid">{t.trouble.map((item) => <div key={item.title}><h3>{item.title}</h3><ul className="trouble-list">{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul></div>)}</div></Section>
    <Section id="safety" number="11" title={t.sections[10]}><Note warning><strong>{t.securityTitle}</strong><br />{t.securityText}</Note><Note><strong>{t.legalTitle}</strong><br />{t.legalText}</Note></Section>

    <footer><div className="section-kicker">12 · {t.sourcesTitle.toUpperCase()}</div><h2>{t.sourcesTitle}</h2><ul>{t.sourceLabels.map((label, index) => <li key={label}><a href={sourceLinks[index]} target="_blank" rel="noreferrer">{label} ↗</a></li>)}</ul><p><a href="https://github.com/berot3/ios-tvos-sideloading-guides/blob/master/guides/nuvio/SOURCES.md">{t.notesLink} ↗</a></p><p className="small">{t.reviewed}</p><a className="back-to-top" href="#top">{t.backToTop}</a></footer>
  </main>;
}
