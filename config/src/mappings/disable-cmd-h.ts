import { FromModifiers, map, rule } from "karabiner.ts";

const modifiers: FromModifiers = { mandatory: ["command"] };
export default rule("swap backspace and caps_lock").manipulators([
  map({ key_code: "h", modifiers }),
]);
