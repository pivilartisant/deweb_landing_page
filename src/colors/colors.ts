export const colors = {
  greenNeon: "#00FF6D",
  blueBright: "#0043FF",
  darkForestGreen: "#043D1B",
  deepNavyBlue: "#030D23",
  yellowBright: "#FFFF00",
  magentaBright: "#E600FF",
  darkOliveGreen: "#1E1D03",
  darkPurple: "#160119",
  redBright: "#FF003D",
  cyanBright: "#00FFCE",
  darkMaroon: "#2D000D",
  darkTeal: "#001E18",
  orangeBright: "#FF7300",
  purpleRoyal: "#5218EF",
  darkBrown: "#3F1B00",
  midnightBlue: "#070021",
  charcoal: "#0C0C0C",
  pinkNeon: "#FF36AE",
  plum: "#661047",
  pastelPink: "#FFE1F4"
};


// create a theme class 
export class Theme {
    constructor(public backgroundColor: string, public textColor: string) {}
}


// ToDo theme combinations
export function generateTheme() {
    const keys = Object.keys(colors) as (keyof typeof colors)[];
    const backgroundColor = colors[keys[Math.floor(Math.random() * keys.length)]];
    const textColor = colors[keys[Math.floor(Math.random() * keys.length)]];
    return new Theme(backgroundColor, textColor);
}
