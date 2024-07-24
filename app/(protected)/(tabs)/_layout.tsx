import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import "@mobiscroll/react/dist/css/mobiscroll.scss";
import { Avatar, Icon, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import DashboardIcon from "../../../assets/images/Dashboard.svg";
import ProjectsIcon from "../../../assets/images/Proyectos.svg";
import { Colors, commonColors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useColorScheme();
  console.log("THEME: ", theme);
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <Tabs>
        <Tabs.Screen
          name="(dashboard)"
          options={{
            tabBarLabel: "Dashboard",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <DashboardIcon fill={focused ? commonColors.primary : "#000"} />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="(projects)"
          options={{
            tabBarLabel: "Proyectos",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <ProjectsIcon fill={focused ? commonColors.primary : "#000"} />
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="(profile)"
          options={{
            tabBarLabel: "Perfil",
            headerShown: false,
            tabBarIcon: () => (
              <Avatar
                size="tiny"
                source={{
                  uri: `https://cdn.verkian.com/resources/avatar_1.png`,
                }}
              />
            ),
          }}
        ></Tabs.Screen>
      </Tabs>
    </>
  );
}
