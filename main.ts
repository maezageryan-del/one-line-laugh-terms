import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Laugh — one funny line, a single sentence, 120 characters.
// Setup: a virtuous act everyone recognises (finally reading the fine print).
// Surprise, in the final clause: the soul was sold not to the devil, but to a sock company.
const LINE =
  "I finally read the terms and conditions, and it turns out I already promised my firstborn to a company that sells socks.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Fail loudly rather than emit an invalid entry: the gate requires
// 1–200 characters of UTF-8 text, not only whitespace, in one sentence.
if ([...LINE].length < 1 || [...LINE].length > 200 || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${[...LINE].length} characters`);
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
