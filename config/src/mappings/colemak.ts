import { FromKeyCode, FromModifiers, map, rule } from "karabiner.ts";

const qwerty: FromKeyCode[] = [
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
  "semicolon",
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
export const qwertyToColemakLookep = Object.fromEntries(pairs);

const modifiers: FromModifiers = { optional: ["any"] };

export default rule("Swap qwerty to colemak layout").manipulators(
  pairs.map(([q, c]) => map({ key_code: q, modifiers }).to(c)),
);
