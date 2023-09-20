import { layer, map } from "karabiner.ts";
import { mandatoryAndOptionalModsAll } from "../utils/utils";

export default layer("`", "vim-arrows", 200)
  .description(
    "Convert right hand homerow into arrows much like vim motions with the ` layer"
  )
  .manipulators([
    map("j", ...mandatoryAndOptionalModsAll).to("←"),
    map("k", ...mandatoryAndOptionalModsAll).to("↓"),
    map("l", ...mandatoryAndOptionalModsAll).to("↑"),
    map(";", ...mandatoryAndOptionalModsAll).to("→"),
  ]);
