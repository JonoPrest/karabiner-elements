import { map, rule } from "karabiner.ts";

export default [
  rule("swap backspace and caps_lock").manipulators([
    map("caps_lock").to("delete_or_backspace"),
  ]),
];
