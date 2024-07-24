import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, Stack, Tabs, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "@mobiscroll/react/dist/css/mobiscroll.scss";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemeContext } from "@/context/theme.context";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { SessionProvider, useSession } from "@/context/SessionContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="(tabs)"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="(project)"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="(task)"
      />
    </Stack>
  );
}
