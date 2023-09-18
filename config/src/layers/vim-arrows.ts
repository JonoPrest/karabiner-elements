import { FromModifierParam, layer, map } from "karabiner.ts";
import { mandatoryAndOptionalMods } from "../utils/utils";

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
