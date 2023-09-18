import { map, rule } from "karabiner.ts";
import { mandatoryAndOptionalMods } from "../utils/utils";

export default [
  rule("swap backspace and caps_lock").manipulators([
    map("caps_lock", ...mandatoryAndOptionalMods).to("delete_or_backspace"),
  ]),
];
