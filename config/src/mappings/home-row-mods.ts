import { FromAndToKeyCode, map, rule } from "karabiner.ts";

const mapHeldDown = (fromKey: FromAndToKeyCode, toKey: FromAndToKeyCode) =>
  map(fromKey)
    .toIfHeldDown(toKey)
    .toIfAlone(fromKey)
    .parameters({ "basic.to_if_held_down_threshold_milliseconds": 200 });

const mapMultiHeldDown = (
  fromKeys: FromAndToKeyCode[],
  toKey: FromAndToKeyCode
) => fromKeys.map((fromKey) => mapHeldDown(fromKey, toKey));

export default rule("home row mods").manipulators([
  ...mapMultiHeldDown(["j", "f"], "left_command"),
  ...mapMultiHeldDown(["k", "d"], "left_option"),
  ...mapMultiHeldDown(["l", "s"], "left_control"),
]);
