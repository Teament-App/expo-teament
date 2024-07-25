import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontSizes, FontSizesType } from "@/constants/GeneralStyles";
import { ThemedText } from "./ThemedText";

const InfoWithLabel = ({
  label,
  value,
  fontSize,
}: {
  label: string;
  value: string;
  fontSize: FontSizesType;
}) => {
  const theme = useColorScheme();
  const styles: any = getStyles(theme);
  return (
    <View style={[styles.container]}>
      <ThemedText style={[styles.label]}>{label}</ThemedText>
      <ThemedText
        style={[
          styles.information,
          fontSize && { fontSize: FontSizes[fontSize] },
        ]}
      >
        {value}
      </ThemedText>
    </View>
  );
};

export default InfoWithLabel;

const getStyles = (theme: any) =>
  StyleSheet.create({
    container: {},
    label: {
      fontSize: 13,
      color: Colors[theme]?.background,
    },
    information: {
      fontSize: 16,
    },
  });
