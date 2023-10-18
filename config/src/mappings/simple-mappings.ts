import { FromModifiers, map, rule } from "karabiner.ts";

const modifiers: FromModifiers = { optional: ["any"] };
export default [
  rule("swap backspace and caps_lock").manipulators([
    map({ key_code: "caps_lock", modifiers }).to("delete_or_backspace"),
    map({ key_code: "delete_or_backspace", modifiers }).to("caps_lock"),
  ]),
];
