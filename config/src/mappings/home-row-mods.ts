import { FromAndToKeyCode, map, rule } from "karabiner.ts";

const threshold = 150;

const mapHeldDown = (fromKey: FromAndToKeyCode, toKey: FromAndToKeyCode) =>
  map(fromKey)
    // .toAfterKeyUp(fromKey)
    .toDelayedAction([], { key_code: fromKey })
    .toIfAlone(fromKey, undefined, { halt: true })
    .toIfHeldDown(toKey)
    .parameters({
      "basic.to_if_held_down_threshold_milliseconds": threshold,
      "basic.to_delayed_action_delay_milliseconds": threshold,
    });

const mapMultiHeldDown = (
  fromKeys: FromAndToKeyCode[],
  toKey: FromAndToKeyCode
) => fromKeys.map((fromKey) => mapHeldDown(fromKey, toKey));

export default rule("home row mods").manipulators([
  ...mapMultiHeldDown(["j", "f"], "left_command"),
  ...mapMultiHeldDown(["k", "d"], "left_option"),
  ...mapMultiHeldDown(["l", "s"], "left_control"),
]);
