/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const border = "#b3b3b3";

export const commonColors = {
  primary: "#224D7C",
  secondary: "#484848",
  action: "#EF8132",
  secAction: "#8EA7BF",
  gray_1: "#f2f2f2",
  greenSuccess: "#34BE44",
  green: "#34BE44",
  yellow: "#F2D146",
  red: "#FF5858",
  gray_2: "#606060",
  orange: "#ef8132",
};

export type ColorsInterface = {
  dark: {
    [key: string]: string;
  };
  light: {
    [key: string]: string;
  };
};

export const Colors: ColorsInterface = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    border1: border,
    border2: "#e6e6e6",
    ...commonColors,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    border2: "#e6e6e6",
    border1: border,
    ...commonColors,
  },
};
