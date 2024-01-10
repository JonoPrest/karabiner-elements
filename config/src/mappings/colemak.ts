import { FromModifiers, map, rule } from "karabiner.ts";

const swapLetters = [
  ["e", "f"],
  ["r", "p"],
  ["t", "g"],
  ["y", "j"],
  ["u", "l"],
  ["i", "u"],
  ["i", "u"],
];

const qwerty = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  ";",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

const colemak = [
  "q",
  "w",
  "f",
  "p",
  "g",
  "j",
  "l",
  "u",
  "y",
  ";",
  "a",
  "r",
  "s",
  "t",
  "d",
  "h",
  "n",
  "e",
  "i",
  "o",
  "z",
  "x",
  "c",
  "v",
  "b",
  "k",
  "m",
];

const zip = (a: any[], b: any[]) => a.map((k, i) => [k, b[i]]);

const pairs = zip(qwerty, colemak);

const modifiers: FromModifiers = { optional: ["any"] };

export default [
  rule("Swap keyboard to colemak layout").manipulators(
    pairs.map(([q, c]) => map({ key_code: q, modifiers }).to(c)),
  ),
];
