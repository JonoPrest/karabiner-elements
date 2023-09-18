import { layer, withMapper, map, NumberKeyValue } from "karabiner.ts";

// It is not required, but recommended to put symbol alias to layers,
// (If you type fast, use simlayer instead, see https://evan-liu.github.io/karabiner.ts/rules/simlayer)
// to make it easier to write '←' instead of 'left_arrow'.
// Supported alias: https://github.com/evan-liu/karabiner.ts/blob/main/src/utils/key-alias.ts
export default layer("/", "symbol-mode").manipulators([
  //     / + [ 1    2    3    4    5 ] =>
  withMapper(["⌘", "⌥", "⌃", "⇧", "⇪"])((k, i) =>
    map((i + 1) as NumberKeyValue).toPaste(k)
  ),
  withMapper(["←", "→", "↑", "↓", "␣", "⏎", "⇥", "⎋", "⌫", "⌦", "⇪"])((k) =>
    map(k).toPaste(k)
  ),
]);
