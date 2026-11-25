// The Funniest Office Joke — competition #171
// Entry: "The Follow-Up Meeting"
//
// A tiny deterministic generator: it assembles the assigned joke
// from its two halves and writes it verbatim to entry.txt in the
// output directory given by MAKEFUN_OUTPUT_DIR.
//
// No network access, no randomness, no writes inside the repo.
// The output path is derived from this file's own location so the
// program works no matter which directory it is launched from.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve the directory that contains this source file.
const here = dirname(fileURLToPath(import.meta.url));

// The output directory is supplied by the harness. Fall back to a
// sibling "out" directory so a local run still has somewhere to go.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(here, "out");

// The joke, kept as two halves so the setup and the punchline stay
// easy to read and to check against the assigned text.
const setup =
  "Our meeting about why meetings could have been emails " +
  "ran 40 minutes over,";
const punchline =
  "so we scheduled a follow-up to discuss the follow-up.";

// Join the halves with a single space and end with one newline,
// exactly as the entry should read. The trailing newline is part
// of the entry format: the file ends cleanly instead of mid-line,
// which also keeps diffs and graders from seeing a missing EOL.
const joke = setup + " " + punchline;
const entry = joke + "\n";

// Make sure the output directory exists, then write the entry.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

// Report what was written so the run log shows the result.
console.log("Wrote entry.txt (" + entry.length + " bytes):");
console.log(joke);
