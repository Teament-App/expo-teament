import { Platform } from "react-native";

export const getDevice = () => {
  return Platform.OS;
};

export const isAndroid = () => {
  return Platform.OS === "android";
};
