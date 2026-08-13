import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");
const terms = await readFile(new URL("../terms.html", import.meta.url), "utf8");
const privacy = await readFile(new URL("../privacy.html", import.meta.url), "utf8");

test("static product page contains its essential metadata and sections", () => {
  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /<title>伴读 Bandu/);
  assert.match(html, /id="features"/);
  assert.match(html, /id="download"/);
});

test("download actions point to the public GitHub releases page", () => {
  const releaseLinks = html.match(/https:\/\/github\.com\/zxy12\/bandu-download\/releases/g) ?? [];
  assert.equal(releaseLinks.length, 3);
});

test("page advertises the current stable release", () => {
  assert.match(html, /Release 2\.0\.1/);
  assert.match(html, /Bandu-v2\.0\.1-macOS-Apple-Silicon\.dmg/);
  assert.match(html, /api\.github\.com\/repos\/\$\{repo\}\/releases\/latest/);
  assert.doesNotMatch(html, /原型|Prototype/);
});

test("all local page assets exist and CSS is self-contained", async () => {
  await readFile(new URL("../og.png", import.meta.url));
  assert.match(css, /:root\s*\{/);
  assert.doesNotMatch(css, /@import/);
});

test("legal pages are published with Chinese metadata and homepage links", () => {
  for (const page of [terms, privacy]) {
    assert.match(page, /<html lang="zh-CN">/);
    assert.match(page, /href="\.\/"/);
    assert.match(page, /legal\.css/);
  }
  assert.match(terms, /服务条款/);
  assert.match(privacy, /隐私说明/);
});
