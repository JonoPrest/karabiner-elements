import { layer, map, withModifier } from "karabiner.ts";

export default layer("`", "vim-arrows")
  .description(
    "Convert right hand homerow into arrows much like vim motions with the ` layer"
  )
  .manipulators([
    withModifier("optionalAny")([
      map("j").to("←"),
      map("k").to("↓"),
      map("l").to("↑"),
      map(";").to("→"),
    ]),
  ]);
