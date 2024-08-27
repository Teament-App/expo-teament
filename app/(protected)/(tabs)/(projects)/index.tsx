import { StyleSheet } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { SessionProvider, useSession } from "@/context/SessionContext";
import { ThemedView } from "@/components/ThemedView";
import { useReactQuery } from "@/hooks/useReactQuery";
import { GET_USER_PROJECTS } from "@/services/Projects.endpoints";
import ProjectsList from "@/components/ProjectsList";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const { signOut } = useSession();
  const { response: projects, error: projectError }: any = useReactQuery(
    ["projects"],
    GET_USER_PROJECTS
  );
  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <ThemedView style={styles.container}>
        <ProjectsList data={projects?.projects} />
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    padding: 8,
    height: "100%",
  },
});
