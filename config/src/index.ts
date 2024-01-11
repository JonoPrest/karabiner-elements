import { writeToProfile } from "karabiner.ts";
import vimArrows from "./layers/vim-arrows";
import keySymbols from "./layers/key-symbols";
import simpleMappings from "./mappings/simple-mappings";
import dualFunctionMappings from "./mappings/dual-function-mappings";
import homeRowMods from "./mappings/home-row-mods";
import brackets from "./layers/brackets";
import disableCmdH from "./mappings/disable-cmd-h";
import colemak from "./mappings/colemak";
// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
writeToProfile("Jono", [
  keySymbols,
  vimArrows,
  brackets,
  disableCmdH,
  homeRowMods,
  colemak,
  ...simpleMappings,
  ...dualFunctionMappings,
]);
