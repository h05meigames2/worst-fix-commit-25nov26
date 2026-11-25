import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The entry: a single commit message, at most 100 characters.
const COMMIT_MESSAGE =
  "fix: fixed the crash by deleting the database — it hasn't crashed since";

const OUTPUT_PATH = "/output/entry.txt";

if (COMMIT_MESSAGE.length < 1 || COMMIT_MESSAGE.length > 100) {
  throw new Error(
    `Commit message must be 1-100 characters, got ${COMMIT_MESSAGE.length}.`,
  );
}
if (COMMIT_MESSAGE.includes("\n") || COMMIT_MESSAGE.includes("\r")) {
  throw new Error("Commit message must be a single line.");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, COMMIT_MESSAGE + "\n", "utf8");
console.log(`Wrote ${OUTPUT_PATH} (${COMMIT_MESSAGE.length} chars)`);
console.log(COMMIT_MESSAGE);
