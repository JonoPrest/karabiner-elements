import { FromModifierParam, layer, map } from "karabiner.ts";

const allModifiers: FromModifierParam = [
  "shift",
  "option",
  "command",
  "control",
];

const mandatoryAndOptionalMods = [undefined, allModifiers];

export default layer("`", "vim-arrows", 200)
  .description(
    "Convert right hand homerow into arrows much like vim motions with the ` layer"
  )
  .manipulators([
    map("j", ...mandatoryAndOptionalMods).to("←"),
    map("k", ...mandatoryAndOptionalMods).to("↓"),
    map("l", ...mandatoryAndOptionalMods).to("↑"),
    map(";", ...mandatoryAndOptionalMods).to("→"),
  ]);
