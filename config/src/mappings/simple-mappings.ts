import { map, rule } from "karabiner.ts";
import { mandatoryAndOptionalModsAll } from "../utils/utils";

export default [
  rule("swap backspace and caps_lock").manipulators([
    map("caps_lock", ...mandatoryAndOptionalModsAll).to("delete_or_backspace"),
  ]),
];
