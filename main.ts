// The 3AM Commit Message — entry program.
// Writes one commit line (1-139 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// The line, built in small parts so the payload is generated here.
const setup = "fix: 47 tabs open, none of them relevant.";
const cause = "the bug was a missing comma.";
const kicker = "I have seen things.";
const line = `${setup} ${cause} ${kicker}`;

// Gate: the entry must be 1-139 UTF-8 characters, not only whitespace.
if (line.length < 1 || line.length > 139 || !line.trim()) {
  throw new Error(`entry must be 1-139 chars, got ${line.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(`wrote ${line.length} chars to ${join(outDir, "entry.txt")}`);
