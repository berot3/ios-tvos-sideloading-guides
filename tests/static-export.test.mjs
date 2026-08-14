import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readExport = (path) => readFile(new URL(`../out/${path}`, import.meta.url), "utf8");

test("exports the hub and all Fusion language routes", async () => {
  const pages = await Promise.all([
    readExport("index.html"),
    readExport("guides/fusion/index.html"),
    readExport("de/guides/fusion/index.html"),
    readExport("es/guides/fusion/index.html"),
    readExport("fr/guides/fusion/index.html"),
  ]);

  assert.match(pages[0], /iOS &amp; tvOS/);
  assert.match(pages[1], /Install Fusion on iPhone/);
  assert.match(pages[2], /Fusion auf iPhone/);
  assert.match(pages[3], /Instala Fusion en el iPhone/);
  assert.match(pages[4], /Installer Fusion sur iPhone/);
});

test("uses correct document languages and GitHub Pages asset paths", async () => {
  const english = await readExport("guides/fusion/index.html");
  const german = await readExport("de/guides/fusion/index.html");

  assert.match(english, /<html lang="en">/);
  assert.match(german, /<html lang="de">/);
  assert.match(english, /\/ios-tvos-sideloading-guides\/_next\//);
  assert.match(english, /\/ios-tvos-sideloading-guides\/favicon\.svg/);
});

test("includes browser-language detection and an explicit-language preference", async () => {
  const guideSource = await readFile(new URL("../components/FusionGuide.tsx", import.meta.url), "utf8");

  assert.match(guideSource, /ios-tvos-sideloading-guides-language/);
  assert.match(guideSource, /navigator\.languages/);
  assert.match(guideSource, /window\.location\.replace/);
  assert.match(guideSource, /window\.localStorage\.setItem/);
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
