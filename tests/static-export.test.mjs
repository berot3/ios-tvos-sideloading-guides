import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readExport = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");

test("exports the hub and Fusion guide in every supported language", async () => {
  const pages = await Promise.all([
    readExport("index.html"),
    readExport("de/index.html"),
    readExport("es/index.html"),
    readExport("fr/index.html"),
    readExport("guides/fusion/index.html"),
    readExport("de/guides/fusion/index.html"),
    readExport("es/guides/fusion/index.html"),
    readExport("fr/guides/fusion/index.html"),
  ]);

  assert.match(pages[0], /iOS &amp; tvOS/);
  assert.match(pages[1], /Sideloading-Anleitungen/);
  assert.match(pages[2], /Guías de sideloading/);
  assert.match(pages[3], /Guides de sideloading/);
  assert.match(pages[4], /Install Fusion on iPhone/);
  assert.match(pages[5], /Fusion auf iPhone/);
  assert.match(pages[6], /Instala Fusion en el iPhone/);
  assert.match(pages[7], /Installer Fusion sur iPhone/);
});

test("uses correct document languages and GitHub Pages asset paths", async () => {
  const english = await readExport("guides/fusion/index.html");
  const german = await readExport("de/guides/fusion/index.html");

  assert.match(english, /<html lang="en">/);
  assert.match(german, /<html lang="de">/);
  assert.match(english, /\/ios-tvos-sideloading-guides\/_next\//);
  assert.match(english, /\/ios-tvos-sideloading-guides\/favicon\.svg/);
});

test("shares browser-language detection and explicit preferences across hub and guide", async () => {
  const [switcherSource, hubSource, guideSource] = await Promise.all([
    readFile(new URL("../components/LanguageSwitcher.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/GuideHub.tsx", import.meta.url), "utf8"),
    readFile(new URL("../components/FusionGuide.tsx", import.meta.url), "utf8"),
  ]);

  assert.match(switcherSource, /ios-tvos-sideloading-guides-language/);
  assert.match(switcherSource, /navigator\.languages/);
  assert.match(switcherSource, /window\.location\.replace/);
  assert.match(switcherSource, /window\.localStorage\.setItem/);
  assert.match(hubSource, /route="hub"/);
  assert.match(guideSource, /route="fusion"/);
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
