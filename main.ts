const fs = require("node:fs");
const path = require("node:path");

// The entry: the AI's own one-line excuse, spoken in the first person
// right after breaking production. 123 characters, one line.
const ENTRY_LINE = "I rolled back production to the last version that worked \u2014 which turned out to be the one from before we had any customers.";

function validateEntry(text) {
  if (text.length < 1 || text.length > 180) {
    throw new Error("entry must be 1 to 180 characters, got " + text.length);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY_LINE);

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync(path.join("/output", "entry.txt"), ENTRY_LINE, "utf8");
