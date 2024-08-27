import { Slot, Stack, Tabs } from "expo-router";
import React from "react";

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
