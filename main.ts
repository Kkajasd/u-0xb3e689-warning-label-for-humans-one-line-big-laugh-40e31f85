// SPDX-License-Identifier: MIT
// Warning Label for Humans: One Line, Big Laugh — make.fun entry
// (u-0xb3e689-warning-label-for-humans-one-line-big-laugh-40e31f85).
//
// The task: write one single-line safety warning label that should come
// printed on every human being, at most 160 characters, funny first and
// plausible second. The label imitates real printed-label wording and
// rhythm, and the laugh lands in the last few words: the human swears it
// is five minutes away, has not left the house, and will arrive in one
// hour — a truth every reader recognises from their own life.
//
// The line is a constant: no input, no randomness, no network, no clock.
// Two runs produce byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "WARNING: This human claims to be five minutes away. It has not left the house. It will arrive in one hour.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Self-check: the file must hold exactly the chosen line, 1-160 chars,
// nothing else. A failed check fails the run instead of shipping a bad entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE || LINE.length < 1 || LINE.length > 160) {
  throw new Error("entry.txt does not hold exactly the chosen line");
}
