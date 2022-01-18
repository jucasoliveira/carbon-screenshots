declare interface CarbonParameters {
  code: string;
  theme?: Theme;
  language?: string;
  output?: string;
}

declare type Theme =
  | "3024 Night"
  | "A11y Dark"
  | "Blackboard"
  | "Base 16 (Dark)"
  | "Base 16 (Light)"
  | "Cobalt"
  | "Dracula"
  | "Duotone"
  | "Hopscotch"
  | "Lucario"
  | "Material"
  | "Monokai"
  | "Night Owl"
  | "Nord"
  | "Oceanic Next"
  | "One Light"
  | "One Dark"
  | "Panda"
  | "Paraiso"
  | "Seti"
  | "Shades of Purple"
  | "Solarized (Dark)"
  | "Solarized (Light)"
  | "SynthWave '84"
  | "Twilight"
  | "Verminal"
  | "VSCode"
  | "Yeti"
  | "Zenburn";
