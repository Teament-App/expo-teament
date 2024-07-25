import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { ThemedText } from "../ThemedText";

export default function ProjectNextTasks() {
  return (
    <>
      <View style={{ marginBottom: 6 }}>
        <ThemedText
          style={{
            fontSize: 12,
            marginBottom: -2,
            color: Colors.dark.gray_2,
            fontWeight: 500,
          }}
        >
          Próxima tarea destacada
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Sin tarea destacada
        </ThemedText>
      </View>
      <View>
        <ThemedText
          style={{
            fontSize: 12,
            marginBottom: -2,
            color: Colors.dark.gray_2,
            fontWeight: 500,
          }}
        >
          Próxima Tarea por Completar
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Sin tareas por entregar
        </ThemedText>
      </View>
    </>
  );
}
