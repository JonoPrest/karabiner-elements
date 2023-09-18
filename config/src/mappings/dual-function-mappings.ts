import { rule, map } from "karabiner.ts";

const shiftToEscape = rule("shift is escape when tapped").manipulators([
  map("left_shift")
    .to("left_shift")
    .toIfAlone("escape")
    .toAfterKeyUp("left_shift"),
]);

export default [shiftToEscape];
