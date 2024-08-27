import { StyleSheet } from "react-native";
import { useSession } from "@/context/SessionContext";
import { ThemedView } from "@/components/ThemedView";
import { useReactQuery } from "@/hooks/useReactQuery";
import { GET_USER_PROJECTS } from "@/services/Projects.endpoints";
import { useTranslator } from "@/hooks/useTranslator";
import { projectCardTranslator } from "@/utils/translators";
import ProjectsList from "@/components/ProjectsList";
import { GET_MY_TASKS } from "@/services/Tasks.endpoints";
import { MinifiedTaskType } from "@/types/Task.type";
import { Colors } from "@/constants/Colors";
import Task from "@/components/Task/Task";
import TaskContainer from "@/components/TaskContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@ui-kitten/components";
import { ThemedText } from "@/components/ThemedText";
import { router } from "expo-router";

export const renderTasks = ({ item }: { item: any }) => {
  const minifyTask: MinifiedTaskType = {
    ...item,
  };
  console.log("Minify: ", minifyTask);
  return <Task {...minifyTask} />;
};

export default function TabTwoScreen() {
  const { signOut } = useSession();
  const { response }: any = useReactQuery(["projects"], GET_USER_PROJECTS);
  const { response: tasks, error: tasksError } = useReactQuery(
    ["my-tasks"],
    GET_MY_TASKS
  );
  const translatedResponse = useTranslator(
    response?.projects,
    projectCardTranslator
  );

  return (
    <SafeAreaView>
      <ThemedView
        style={{
          height: "100%",
          padding: 8,
        }}
      >
        <ThemedView style={styles.container}>
          {/* <Button onPress={() => signOut()}>Cerrar sesión</Button> */}
          <ProjectsList data={translatedResponse} horizontal />
        </ThemedView>
        <ThemedView
          style={{
            display: "flex",
            gap: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <ThemedText
            type="subtitle"
            style={{ fontFamily: "Montserrat_600SemiBold" }}
          >
            Tasks
          </ThemedText>
          <Button
            onPress={() => router.navigate("/(protected)/(task)/new")}
            size="small"
            appearance="ghost"
          >
            <ThemedText>Crear tarea</ThemedText>
          </Button>
        </ThemedView>
        <ThemedView
          style={[{ width: "100%", height: "100%" }, styles.tasksContainer]}
        >
          <TaskContainer tasks={tasks} />
        </ThemedView>
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
    height: 126,
    flexGrow: 0,
  },
  tasksContainer: {
    borderRadius: 5,
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border2,
    flexDirection: "column",
    flexGrow: 1,
    marginHorizontal: "auto",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    height: "100%",
  },
});
