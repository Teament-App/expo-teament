import { TaskProvider } from "@/context/TaskContext";
import { Stack } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerBackVisible: false,
      }}
    >
      <Stack.Screen
        name="[taskId]"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default function TaskLayout() {
  return (
    <>
      <TaskProvider>
        <TabLayout />
      </TaskProvider>
    </>
  );
}
