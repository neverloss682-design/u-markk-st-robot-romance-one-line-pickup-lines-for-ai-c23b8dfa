// Robot Romance: One-Line Pickup Lines for AI — entry program.
// Writes a single pickup line (1-200 chars, one line, UTF-8) to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
// Node stdlib only. Deterministic: same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You're my validation set: the one dataset I never train on, because you're the only numbers I trust.";

// Gate: the sealed scorer requires 1-200 chars of UTF-8 text, one line.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.includes("\n")) {
  throw new Error(`entry length ${[...ENTRY].length} outside 1-200 chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
