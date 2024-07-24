import { Slot, Stack, Tabs } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

export default function TabLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="[projectId]"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
