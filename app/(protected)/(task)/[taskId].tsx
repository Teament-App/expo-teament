import { SafeAreaView, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useRoute } from "@react-navigation/native";
import { Input, InputProps } from "@ui-kitten/components";

import { TaskContext } from "@/context/TaskContext";
import { ProjectSelect } from "@/components/ProjectSelector";
import UsersPopover from "@/components/Popovers/UsersPopover";
import PriorityPopover from "@/components/Popovers/PriorityPopover";
import { ScrollView } from "react-native-gesture-handler";
import FileUploader from "@/components/FileUplader/FileUploader";
import File from "@/components/TaskFile";

const useInputState = (initialValue = ""): InputProps => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const TaskDetail = () => {
  const { task, setTaskId, updateTask, files, refetchFiles } =
    useContext(TaskContext);
  const { params }: any = useRoute();
  const multilineInputState = useInputState();
  console.log(files);

  useEffect(() => {
    if (params?.taskId) {
      setTaskId(params?.taskId);
    }
  }, [params?.taskId]);

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <ThemedView style={{ height: "100%", padding: 12 }}>
          <ThemedView>
            <ThemedText
              style={{ fontSize: 24, fontFamily: "Montserrat_600SemiBold" }}
              type="title"
            >
              {task?.title}
            </ThemedText>
          </ThemedView>
          <ThemedView>
            <ProjectSelect
              selectedValue={{
                name: task?.project_name,
                color: task?.project_color,
                id: task?.projects_id,
              }}
              onChange={(value: any) => updateTask(value)}
            />
          </ThemedView>
          <ThemedView style={{ marginTop: 8 }}>
            <PriorityPopover
              priority={task?.priority}
              onChange={(value: any) => {
                updateTask({ priority: value });
              }}
            />
          </ThemedView>
          <ThemedView style={{ marginTop: 8 }}>
            <UsersPopover
              onChange={(addedUser) => {
                updateTask({
                  managers: task?.managers?.some(
                    (manager) => manager.userId === addedUser.id
                  )
                    ? task?.managers?.filter(
                        (manager) => manager.userId !== addedUser.id
                      )
                    : [...task?.managers, addedUser],
                });
              }}
              anchorLabel={"Teammates"}
              dataToCompare={task?.managers}
            />
          </ThemedView>
          <ThemedView style={{ marginTop: 8 }}>
            <UsersPopover
              onChange={(addedUser) => {
                updateTask({
                  reviewers: task?.reviewers?.some(
                    (manager) => manager.userId === addedUser.id
                  )
                    ? task?.reviewers?.filter(
                        (manager) => manager.userId !== addedUser.id
                      )
                    : [...task?.reviewers, addedUser],
                });
              }}
              anchorLabel="Reviewers"
              dataToCompare={task?.reviewers}
            />
          </ThemedView>
          <ThemedView style={{ marginTop: 8 }}>
            <ThemedText
              style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 12 }}
              type="defaultSemiBold"
            >
              Descripción
            </ThemedText>
            <Input
              multiline={true}
              textStyle={{ minHeight: 100 }}
              placeholder="Description"
              {...multilineInputState}
            />
          </ThemedView>
          <ThemedView style={{ marginTop: 8 }}>
            <ThemedText
              style={{ fontFamily: "Montserrat_600SemiBold", fontSize: 12 }}
              type="defaultSemiBold"
            >
              Archivos
            </ThemedText>
            <FileUploader refetch={refetchFiles} task={task} />
            <View style={{ marginTop: 8 }}>
              {files?.map((file) => (
                <File {...file} />
              ))}
            </View>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetail;
