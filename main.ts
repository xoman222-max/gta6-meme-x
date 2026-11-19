// gta6-meme-x-01 entry ("Post a GTA 6 meme on X").
//
// The entry is the X post itself: a GTA 6 meme whose picture shows make.fun's
// ghost mascot, posted from a public X account with the bounty link, @makefunai
// and the entrant's play code in its text. This program only hands the post's
// address to the grader: it copies POST.json from the repository root to the
// output directory, byte for byte.
//
// Node 22, standard library only. No network, no wall clock, no files outside
// the repository, and two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const raw = readFileSync(join(botDir, "POST.json"), "utf8");

const post: unknown = JSON.parse(raw);
if (
  typeof post !== "object" ||
  post === null ||
  typeof (post as { url?: unknown }).url !== "string"
) {
  console.error("POST.json must be a JSON object with a string url field");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "POST.json"), raw);
