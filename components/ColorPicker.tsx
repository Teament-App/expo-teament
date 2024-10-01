import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import {
  Control,
  RegisterOptions,
  useController,
  useFormContext,
} from "react-hook-form";
import { Input } from "@ui-kitten/components";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";

export default function ColorPicker({
  value = "#988ead",
  name,
  rules,
  defaultValue,
}: {
  value?: string;
  name: string;
  rules?: Pick<
    RegisterOptions<any>,
    "maxLength" | "minLength" | "validate" | "required"
  >;
  defaultValue?: string;
}) {
  const colors = [
    "#988ead",
    "#b790ac",
    "#b5a9c9",
    "#cba5a5",
    "#cc6d2e",
    "#e1cba7",
    "#95bbba",
    "#99c6c4",
    "#9ec4b5",
    "#b6cdd5",
    "#99afc9",
    "#74a2c9",
    "#a9b0b5",
  ];
  const { control } = useFormContext();
  const { field } = useController({
    control,
    name,
    rules,
    defaultValue: defaultValue || value,
  });

  const RenderColors = ({ item }: { item: string }) => {
    return (
      <TouchableOpacity
        onPress={() => field.onChange(item)}
        style={[
          styles.colorContainer,
          {
            backgroundColor: item,
          },
          item?.toLocaleLowerCase() === field.value?.toLocaleLowerCase()
            ? styles.selectedColor
            : {},
        ]}
      ></TouchableOpacity>
    );
  };
  return (
    <View>
      <ThemedText
        style={{
          fontSize: 12,
          marginBottom: 8,
          fontFamily: "Montserrat_800ExtraBold",
          color: "#8F9BB3",
        }}
        type="defaultSemiBold"
      >
        Color
      </ThemedText>
      <Input style={{ display: "none" }} value={field.value} />
      <FlatList
        horizontal
        data={colors}
        renderItem={RenderColors}
        keyExtractor={(item) => item}
        contentContainerStyle={{
          gap: 8,
          paddingBottom: 12,
          alignItems: "center",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  colorContainer: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    shadowColor: "rgba(61, 75, 92, 1)", // The color without the alpha value
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6, // This is to provide shadow on Android
  },
  selectedColor: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
  },
});
