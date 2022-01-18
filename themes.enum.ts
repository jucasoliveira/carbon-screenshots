const ThemeValues: Map<Theme, string> = new Map<Theme, string>();
ThemeValues.set("3024 Night", "3024-night");
ThemeValues.set("A11y Dark", "a11y-dark");
ThemeValues.set("Blackboard", "blackboard");
ThemeValues.set("Base 16 (Dark)", "base16-dark");
ThemeValues.set("Base 16 (Light)", "base16-light");
ThemeValues.set("Cobalt", "cobalt");
ThemeValues.set("Dracula", "dracula");
ThemeValues.set("Duotone", "duotone");
ThemeValues.set("Hopscotch", "hopscotch");
ThemeValues.set("Lucario", "lucario");
ThemeValues.set("Material", "material");
ThemeValues.set("Monokai", "monokai");
ThemeValues.set("Night Owl", "night-owl");
ThemeValues.set("Nord", "nord");
ThemeValues.set("Oceanic Next", "oceanic-next");
ThemeValues.set("One Light", "one-light");
ThemeValues.set("One Dark", "one-dark");
ThemeValues.set("Panda", "panda");
ThemeValues.set("Paraiso", "paraiso");
ThemeValues.set("Shades of Purple", "shades-of-purple");
ThemeValues.set("Solarized (Dark)", "solarized-dark");
ThemeValues.set("Solarized (Light)", "solarized-light");
ThemeValues.set("SynthWave '84", "synthwave-84");
ThemeValues.set("Twilight", "twilight");
ThemeValues.set("Verminal", "verminal");
ThemeValues.set("VSCode", "vscode");
ThemeValues.set("Yeti", "yeti");
ThemeValues.set("Zenburn", "zenburn");

const ThemesList: string[] = Array.from(ThemeValues.values());

const DefaultTheme: string = ThemeValues.get("Seti")!;

const BgColors: string[] = [
  "rgba(171, 184, 195, 100)",
  "rgba(161, 152, 26, 100)",
  "rgba(139, 87, 42, 100)",
  "rgba(65, 117, 5, 100)",
  "rgba(80, 227, 194, 100)",
  "rgba(74, 144, 226, 100)",
  "rgba(125, 19, 32, 100)",
];

const RandomBgColor = (): string => {
  const r = Math.floor(Math.random() * 100);
  const g = Math.floor(Math.random() * 200);
  const b = Math.floor(Math.random() * 200);
  const randomBgColor: string =
    BgColors[Math.floor(Math.random() * BgColors.length)];
  return randomBgColor;
};

export { DefaultTheme, ThemesList, ThemeValues, RandomBgColor };
