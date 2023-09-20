import { FromModifierParam } from "karabiner.ts";

export const modifiersNoShift: FromModifierParam = [
  "option",
  "command",
  "control",
];

export const allModifiers: FromModifierParam = [...modifiersNoShift, "shift"];

export const mandatoryAndOptionalModsAll = [undefined, allModifiers];
export const mandatoryAndOptionalModsNoShift = [undefined, modifiersNoShift];

export const heldDownMillis = 150;
