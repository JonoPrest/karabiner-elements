import { FromModifiers, map, rule } from "karabiner.ts";

const modifiers: FromModifiers = { mandatory: ["command"] };
export default rule("Disable cmd-h shortcut").manipulators([
  map({ key_code: "h", modifiers }),
  map({ key_code: "o", modifiers }),
]);
