import { Condition, writeToProfile } from "karabiner.ts";
import vimArrows from "./layers/vim-arrows";
import keySymbols from "./layers/key-symbols";
import simpleMappings from "./mappings/simple-mappings";
import dualFunctionMappings from "./mappings/dual-function-mappings";
import homeRowMods from "./mappings/home-row-mods";
import brackets from "./layers/brackets";
import disableCmdShortcut from "./mappings/disable-cmd-shortcut";
import colemak from "./mappings/colemak";
// ! Change '--dry-run' to your Karabiner-Elements Profile name.
// (--dry-run print the config json into console)
// + Create a new profile if needed.
const DYGMA_DEFY_IDENTIFIER = { product_id: 18, vendor_id: 13807 };
const NOT_DYGMA_DEFY_CONDITION: Condition = {
  type: "device_unless",
  identifiers: [DYGMA_DEFY_IDENTIFIER],
};

const NON_DYGMA_DEFY_RULES = [
  keySymbols,
  vimArrows,
  brackets,
  homeRowMods,
  colemak,
  ...simpleMappings,
  ...dualFunctionMappings,
];

const ALL_RULES = [disableCmdShortcut];
writeToProfile(
  "Jono",

  [
    ...ALL_RULES,
    ...NON_DYGMA_DEFY_RULES.map((rule) =>
      rule.condition(NOT_DYGMA_DEFY_CONDITION),
    ),
  ],
);
