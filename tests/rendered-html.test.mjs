import assert from "node:assert/strict";
import { access, readFile, stat } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "antonio.example" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Antonio team introduction content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="ko">/i);
  assert.match(html, /<title>Antonio — Team Introduction<\/title>/i);
  assert.match(html, /말은 흩어져도,/);
  assert.match(html, /하나의 합의 코어/);
  assert.match(html, /이성민/);
  assert.match(html, /https:\/\/github\.com\/antonio-gasok\/team-introduction/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/i);
});

test("ships site-specific metadata and social card", async () => {
  const [layout, packageJson, socialCard] = await Promise.all([
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../public/og.png", import.meta.url)),
  ]);

  assert.match(layout, /Antonio — Team Introduction/);
  assert.match(layout, /summary_large_image/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.deepEqual(
    [...socialCard.subarray(0, 8)],
    [137, 80, 78, 71, 13, 10, 26, 10],
  );
  assert.ok((await stat(new URL("../public/og.png", import.meta.url))).size > 100_000);
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
});
