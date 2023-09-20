import { rule, map } from "karabiner.ts";
import { heldDownMillis } from "../utils/utils";

const shiftToEscape = rule("shift is escape when tapped").manipulators([
  map("left_shift")
    .to("left_shift", undefined, { lazy: true })
    .toIfAlone("escape")
    .toIfHeldDown("left_shift", undefined, {
      hold_down_milliseconds: heldDownMillis,
      halt: true,
    }),
]);

export default [shiftToEscape];
