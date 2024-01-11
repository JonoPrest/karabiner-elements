import {
  FromAndToKeyCode,
  FromModifierParam,
  Modifier,
  ModifierKeyCode,
  map,
  rule,
} from "karabiner.ts";
import { heldDownMillis } from "../utils/utils";
import { qwertyToColemakLookep } from "./colemak";
const mapHeldDown = (fromKey: FromAndToKeyCode, toKey: ModifierKeyCode) =>
  map(fromKey, undefined, "any")
    // .toAfterKeyUp(fromKey
    //
    .toDelayedAction([], {
      key_code: qwertyToColemakLookep[fromKey],
    })
    .toIfAlone(qwertyToColemakLookep[fromKey], undefined, { halt: true })
    .toIfHeldDown(toKey, undefined, { halt: true })
    .parameters({
      "basic.to_if_held_down_threshold_milliseconds": heldDownMillis,
      "basic.to_delayed_action_delay_milliseconds": heldDownMillis,
    });

type SymmetricalHomerowKeys = [FromAndToKeyCode, FromAndToKeyCode];
type HomerowModMapping = [SymmetricalHomerowKeys, ModifierKeyCode];

//Chat gpt code for when i want to create simmultaneos mappings
// type CombinationMapping = [FromAndToKeyCode[], ModifierKeyCode[]];
// const generateCombinations = (
//   mappings: HomerowModMapping[],
//   currentMapping: CombinationMapping = [[], []],
//   currentIndex: number = 0
// ): CombinationMapping[] => {
//   if (currentIndex === mappings.length) {
//     return [currentMapping];
//   }
//
//   const [symmetricalKeys, modifier] = mappings[currentIndex];
//   const combinations: CombinationMapping[] = [];
//
//   for (let i = 0; i < symmetricalKeys.length; i++) {
//     const newMapping: CombinationMapping = [
//       [...currentMapping[0], symmetricalKeys[i]],
//       [...currentMapping[1], modifier],
//     ];
//
//     combinations.push(
//       ...generateCombinations(mappings, newMapping, currentIndex + 1)
//     );
//   }
//
//   return combinations;
// };
//
// const allCombinations = generateCombinations(mappings);

let mappings: HomerowModMapping[] = [
  [["j", "f"], "left_command"],
  [["k", "d"], "left_option"],
  [["l", "s"], "left_control"],
];
const mapMultiHeldDown = ([fromKeys, toKey]: HomerowModMapping) => {
  return fromKeys.map((fromKey) => mapHeldDown(fromKey, toKey));
};

export default rule("home row mods").manipulators(
  mappings.flatMap((mapping) => mapMultiHeldDown(mapping)),
);
