import { writeToProfile } from "karabiner.ts";
import vimArrows from "./layers/vim-arrows";
import keySymbols from "./layers/key-symbols";
import simpleMappings from "./mappings/simple-mappings";
import dualFunctionMappings from "./mappings/dual-function-mappings";
import homeRowMods from "./mappings/home-row-mods";
// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile("Jono", [
  keySymbols,
  vimArrows,
  homeRowMods,
  ...simpleMappings,
  ...dualFunctionMappings,
]);
