import { TaskProvider } from "@/context/TaskContext";
import { Stack } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Stack
      initialRouteName="index"
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
        name="index"
        options={{
          headerTitle: "Tareas",
          headerShown: true,
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
