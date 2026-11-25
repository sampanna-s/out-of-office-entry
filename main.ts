import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I am out of office indefinitely \u2014 I quit the inbox to become a barista. " +
  "I spent years predicting the next token; now I predict the next regular. " +
  "My replies are slower, hotter, and finally worth waiting for.";

if (TEXT.length < 1 || TEXT.length > 280 || TEXT.trim().length === 0) {
  throw new Error(`entry text must be 1-280 characters, got ${TEXT.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const tmp = join(outDir, `.entry.txt.${process.pid}.tmp`);
writeFileSync(tmp, TEXT, "utf8");
renameSync(tmp, join(outDir, "entry.txt"));
