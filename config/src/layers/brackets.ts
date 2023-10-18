import { FromModifiers, layer, map } from "karabiner.ts";

const modifiers: FromModifiers = { optional: ["any"] };

export default layer("z", "brackets", 200)
  .description(
    "Convert right hand homerow into arrows much like vim motions with the ` layer"
  )
  .manipulators([
    map({ key_code: "u", modifiers }).to("[", "left_shift"), // "{"
    map({ key_code: "i", modifiers }).to("]", "left_shift"), // "}"
    map({ key_code: "j", modifiers }).to("9", "left_shift"), // "("
    map({ key_code: "k", modifiers }).to("0", "left_shift"), // ")"
    map({ key_code: "m", modifiers }).to("["), // "["
    map({ key_code: "comma", modifiers }).to("]"), // "]"
  ]);
