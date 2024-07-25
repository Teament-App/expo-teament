import { View, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Colors, ColorsInterface } from "@/constants/Colors";
import { useReactQuery } from "@/hooks/useReactQuery";
import { useRoute } from "@react-navigation/native";
import { GET_PROJECT_DETAILS } from "@/services/Projects.endpoints";
import ProjectHeader from "@/components/Project/ProjectHeader";
import ProjectSectionContainer from "@/components/Project/ProjectSectionContainer";
import { ThemedView } from "@/components/ThemedView";
import ProjectNextTasks from "@/components/Project/ProjectNextTasks";
import { GET_PROJECT_TASKS } from "@/services/Tasks.endpoints";
import TaskContainer from "@/components/TaskContainer";
import { useQueryClient } from "react-query";
import { ThemedText } from "@/components/ThemedText";

export default function Project() {
  const queryClient = useQueryClient();
  const { params }: any = useRoute();
  const { response }: any = useReactQuery(
    ["project", params?.projectId],
    GET_PROJECT_DETAILS
  );
  const { response: taskResponse } = useReactQuery(
    ["project-tasks", params?.projectId],
    GET_PROJECT_TASKS
  );

  console.log("Response: ", response);

  return (
    <SafeAreaView>
      <ProjectHeader
        members={response?.members}
        color={response?.color}
        projectName={response?.name}
      />
      <ThemedView
        style={{
          height: "100%",
          //   backgroundColor: "green",
          padding: 12,
        }}
      >
        <ProjectSectionContainer>
          <ProjectNextTasks />
        </ProjectSectionContainer>
        <View style={{ marginTop: 12 }}>
          <ThemedText
            style={{
              color: Colors.light.gray_2,
              fontWeight: 700,
              fontSize: 16,
              marginBottom: 4,
            }}
          >
            Tareas
          </ThemedText>
          <ProjectSectionContainer>
            <TaskContainer tasks={taskResponse} taskKey={"tasks"} />
          </ProjectSectionContainer>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const getStyles = (theme: string) => {
  const fontColor = theme === "dark" ? "light" : "dark";
  return StyleSheet.create({
    projectHeader: {
      backgroundColor: Colors[theme as keyof ColorsInterface].primary,
      height: 60,
      paddingHorizontal: 12,
      display: "flex",
      justifyContent: "center",
    },
    projectText: {
      color: Colors[fontColor as keyof ColorsInterface].text,
      fontWeight: "700",
    },
  });
};
