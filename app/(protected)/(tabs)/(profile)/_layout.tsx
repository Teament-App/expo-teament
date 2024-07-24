import { Slot, Stack, Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Stack initialRouteName="user">
      <Stack.Screen
        name="user"
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="modal"
        options={{
          headerTitle: "Editar perfil",
          presentation: "modal",
          headerBackTitle: "Regresar",
        }}
      ></Stack.Screen>
    </Stack>
  );
}
