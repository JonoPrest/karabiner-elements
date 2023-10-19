import { withModifier } from "karabiner.ts";
import { layer, map } from "karabiner.ts";

export default layer("z", "brackets and common symbols")
  .description(
    "Convert right hand homerow into arrows much like vim motions with the ` layer"
  )
  .manipulators([
    withModifier("optionalAny")([
      map({ key_code: "u" }).to("[", "left_shift"), // "{"
      map({ key_code: "i" }).to("]", "left_shift"), // "}"
      map({ key_code: "j" }).to("9", "left_shift"), // "("
      map({ key_code: "k" }).to("0", "left_shift"), // ")"
      map({ key_code: "m" }).to("["), // "["
      map({ key_code: "comma" }).to("]"), // "]"
      map({ key_code: "l" }).to("-"), // "-"
      map({ key_code: "o" }).to("-", "left_shift"), // "_"
      map({ key_code: "semicolon" }).to("="), // "="
      map({ key_code: "p" }).to("=", "left_shift"), // "+"
    ]),
  ]);
