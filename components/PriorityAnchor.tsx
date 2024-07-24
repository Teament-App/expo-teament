import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { commonColors } from "@/constants/Colors";
import { ThemedText } from "./ThemedText";
import FlagSvg from "./svg/FlagsSvg";

export default function PriorityAnchor({
  priority,
  toggle,
}: {
  priority: string;
  toggle: () => void;
}) {
  const color =
    priority === "Low"
      ? commonColors.green
      : priority === "Medium"
      ? commonColors.yellow
      : commonColors.red;
  const text =
    priority === "Low" ? "Baja" : priority === "Medium" ? "Media" : "Alta";
  return (
    <View>
      <ThemedText
        style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 12 }}
        type="defaultSemiBold"
      >
        Prioridad
      </ThemedText>
      <TouchableOpacity
        onPress={toggle}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
        }}
      >
        <FlagSvg stroke={color} />
        <ThemedText type="defaultSemiBold" style={{ color }}>
          {text}
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}
