import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../index.html", import.meta.url), "utf8");
const css = await readFile(new URL("../styles.css", import.meta.url), "utf8");

test("static product page contains its essential metadata and sections", () => {
  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /<title>伴读 Bandu/);
  assert.match(html, /id="features"/);
  assert.match(html, /id="download"/);
});

test("download actions point to the public GitHub releases page", () => {
  const releaseLinks = html.match(/https:\/\/github\.com\/zxy12\/bandu-download\/releases/g) ?? [];
  assert.equal(releaseLinks.length, 2);
});

test("all local page assets exist and CSS is self-contained", async () => {
  await readFile(new URL("../og.png", import.meta.url));
  assert.match(css, /:root\s*\{/);
  assert.doesNotMatch(css, /@import/);
});
