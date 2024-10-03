import { StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Montserrat_400Regular, useFonts } from "@expo-google-fonts/montserrat";
import { Text, type TextProps } from "@ui-kitten/components";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  ellipsis?: boolean;
};

export function ThemedText(props: ThemedTextProps) {
  const {
    style,
    lightColor,
    darkColor,
    type = "default",
    children,
    ellipsis = false,
    ...rest
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");
  let [fontsLoaded, fontError] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <Text
      style={[
        !rest?.status ? { color } : {},
        type === "default" ? styles.default : {},
        type === "title" ? styles.title : {},
        type === "defaultSemiBold" ? styles.defaultSemiBold : {},
        type === "subtitle" ? styles.subtitle : {},
        type === "link" ? styles.link : {},
        { fontFamily: "Montserrat_400Regular" },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 32,
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
