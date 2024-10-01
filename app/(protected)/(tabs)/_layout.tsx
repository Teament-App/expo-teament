import { Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";
import { Avatar, Icon, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import DashboardIcon from "../../../assets/images/Dashboard.svg";
import ProjectsIcon from "../../../assets/images/Proyectos.svg";
import { Colors, commonColors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Image, View } from "react-native";
import CheckComplete from "@/components/svg/CheckGreen";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const theme = useColorScheme();
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
          name="(new)"
          options={{
            headerShown: true,
            tabBarLabel: "",
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  backgroundColor: commonColors.primary,
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://cdn.verkian.com/resources/add_plus.png",
                  }}
                  style={{ width: 32, height: 32 }}
                />
              </View>
            ),
          }}
        ></Tabs.Screen>
        <Tabs.Screen
          name="(list)"
          options={{
            tabBarLabel: "Tareas",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <CheckComplete stroke={focused ? commonColors.primary : "#000"} />
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
