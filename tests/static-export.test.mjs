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
  const [english, german] = await Promise.all([
    readExport("guides/nuvio/index.html"),
    readExport("de/guides/nuvio/index.html"),
  ]);

  assert.match(english, /Official source does not mean official binary/);
  assert.match(english, /Nuvio Full \(Unofficial\)|manifest labels it unofficial/);
  assert.match(english, /App updates are not signature refreshes/);
  assert.match(german, /Offizieller Quellcode bedeutet nicht offizielle Binärdatei/);
  assert.match(german, /App-Updates sind keine Signatur-Refreshes/);
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
