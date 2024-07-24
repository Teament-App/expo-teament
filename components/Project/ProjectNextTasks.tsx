import { View, Text } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

export default function ProjectNextTasks() {
  return (
    <>
      <View style={{ marginBottom: 6 }}>
        <Text
          style={{
            fontSize: 12,
            marginBottom: -2,
            color: Colors.dark.gray_2,
            fontWeight: 500,
          }}
        >
          Próxima tarea destacada
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Sin tarea destacada
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 12,
            marginBottom: -2,
            color: Colors.dark.gray_2,
            fontWeight: 500,
          }}
        >
          Próxima Tarea por Completar
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 700,
          }}
        >
          Sin tareas por entregar
        </Text>
      </View>
    </>
  );
}
