import { StyleSheet } from "react-native";

export const FontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 24,
};

export type FontSizesType = "xs" | "sm" | "md" | "base" | "lg" | "xl";
export const GeneralStyles = StyleSheet.create({
  fontBold: {},
  textSm: {
    fontSize: 14,
  },
  textXs: {
    fontSize: 12,
  },
  textXss: {
    fontSize: 10,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
  },
  itemsEnd: {
    alignItems: "flex-end",
  },
  itemsStart: {
    alignItems: "flex-start",
  },
  itemsCenter: {
    alignItems: "center",
  },
  overflowAuto: {
    overflow: "hidden",
  },
});
