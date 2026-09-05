import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readExport = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");

test("exports the hub, Fusion, and Nuvio in every supported language", async () => {
  const pages = await Promise.all([
    readExport("index.html"),
    readExport("de/index.html"),
    readExport("es/index.html"),
    readExport("fr/index.html"),
    readExport("guides/fusion/index.html"),
    readExport("de/guides/fusion/index.html"),
    readExport("es/guides/fusion/index.html"),
    readExport("fr/guides/fusion/index.html"),
    readExport("guides/nuvio/index.html"),
    readExport("de/guides/nuvio/index.html"),
    readExport("es/guides/nuvio/index.html"),
    readExport("fr/guides/nuvio/index.html"),
  ]);

  assert.match(pages[0], /iOS &amp; tvOS/);
  assert.match(pages[1], /Sideloading-Anleitungen/);
  assert.match(pages[2], /Guías de sideloading/);
  assert.match(pages[3], /Guides de sideloading/);
  assert.match(pages[4], /Install Fusion on iPhone/);
  assert.match(pages[5], /Fusion auf iPhone/);
  assert.match(pages[6], /Instala Fusion en el iPhone/);
  assert.match(pages[7], /Installer Fusion sur iPhone/);
  assert.match(pages[8], /Install Nuvio on iPhone/);
  assert.match(pages[9], /Nuvio auf iPhone/);
  assert.match(pages[10], /Instalar Nuvio en iPhone/);
  assert.match(pages[11], /Installer Nuvio sur iPhone/);
});

test("uses correct document languages and GitHub Pages asset paths", async () => {
  const english = await readExport("guides/fusion/index.html");
  const german = await readExport("de/guides/fusion/index.html");

  assert.match(english, /<html lang="en">/);
  assert.match(german, /<html lang="de">/);
  assert.match(english, /\/ios-tvos-sideloading-guides\/_next\//);
  assert.match(english, /\/ios-tvos-sideloading-guides\/favicon\.svg/);
});

test("shares browser-language detection and explicit preferences across hub and guides", async () => {
  const [switcherSource, hubSource, fusionSource, nuvioSource] = await Promise.all([
    readFile(new URL("../components/LanguageSwitcher.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/GuideHub.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/FusionGuide.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/NuvioGuide.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(switcherSource, /ios-tvos-sideloading-guides-language/);
  assert.match(switcherSource, /navigator\.languages/);
  assert.match(switcherSource, /window\.location\.replace/);
  assert.match(switcherSource, /window\.localStorage\.setItem/);
  assert.match(hubSource, /route="hub"/);
  assert.match(fusionSource, /route="fusion"/);
  assert.match(nuvioSource, /route="nuvio"/);
});

test("publishes Nuvio provenance and update distinctions", async () => {
  const [english, german, spanish, french, source] = await Promise.all([
    readExport("guides/nuvio/index.html"),
    readExport("de/guides/nuvio/index.html"),
    readExport("es/guides/nuvio/index.html"),
    readExport("fr/guides/nuvio/index.html"),
    readFile(new URL("../components/NuvioGuide.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(english, /Official iPhone\/iPad IPA/);
  assert.match(english, /github\.com\/NuvioMedia\/NuvioMobile\/releases/);
  assert.match(english, /computer.*stay on.*No.*SideStore/i);
  assert.match(english, /needs a device test/i);
  assert.match(english, /App updates are not signature refreshes/);
  assert.match(german, /Offizielle iPhone-\/iPad-IPA/);
  assert.match(german, /Computer eingeschaltet bleiben.*Nein.*SideStore/);
  assert.match(german, /App-Updates sind keine Signatur-Refreshes/);
  assert.match(spanish, /IPA oficial para iPhone\/iPad/);
  assert.match(french, /IPA officielle sur iPhone\/iPad/);
  assert.doesNotMatch(source, /Nuvio-v0\.4\.5-Full\.ipa/);
  assert.doesNotMatch(english, /Add the Nuvio Full source/);
});

test("publishes Fusion's unofficial repository status prominently", async () => {
  const [englishHub, germanHub, englishGuide, germanGuide] = await Promise.all([
    readExport("index.html"),
    readExport("de/index.html"),
    readExport("guides/fusion/index.html"),
    readExport("de/guides/fusion/index.html"),
  ]);

  assert.match(englishHub, /Unofficial community IPA repository/);
  assert.match(germanHub, /Inoffizielles Community-IPA-Repository/);
  assert.match(englishGuide, /repository is not official/);
  assert.match(englishGuide, /shared by Fusion developer Exate in the official Discord/);
  assert.match(germanGuide, /Repository nicht offiziell/);
  assert.match(germanGuide, /Exate im offiziellen Discord geteilt/);
});

test("exports discovery files without the former ChatGPT guide URL", async () => {
  const [hub, sitemap, robots] = await Promise.all([
    readExport("index.html"),
    readExport("sitemap.xml"),
    readExport("robots.txt"),
  ]);

  assert.doesNotMatch(hub, /chatgpt\.site/);
  assert.match(sitemap, /berot3\.github\.io\/ios-tvos-sideloading-guides/);
  assert.match(robots, /sitemap\.xml/);
});

test("exports the compact Apple app availability snapshot in every language", async () => {
  const hubs = await Promise.all([
    readExport("index.html"),
    readExport("de/index.html"),
    readExport("es/index.html"),
    readExport("fr/index.html"),
  ]);

  for (const hub of hubs) {
    assert.match(hub, /Strand/);
    assert.match(hub, /Couch Streamer/);
    assert.match(hub, /Debrify/);
    assert.match(hub, /Ferrite/);
    assert.match(hub, /Odin/);
    assert.match(hub, /odinapp\.dev/);
    assert.match(hub, /📱/);
    assert.match(hub, /📺/);
    assert.match(hub, /TestFlight/);
    assert.match(hub, /IPA/);
  }

  assert.match(hubs[0], /What can you install right now\?/);
  assert.match(hubs[1], /Was lässt sich aktuell installieren\?/);
  assert.match(hubs[2], /¿Qué puedes instalar ahora mismo\?/);
  assert.match(hubs[3], /Que peut-on installer actuellement \?/);
  assert.match(hubs[0], /Unconfirmed.*never means.*unavailable/i);
  assert.match(hubs[1], /„Unbestätigt“ bedeutet niemals „nicht verfügbar“/);
  assert.match(hubs[0], /platform scope not yet confirmed/i);
});
