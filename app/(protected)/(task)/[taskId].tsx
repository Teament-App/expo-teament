import { SafeAreaView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useRoute } from "@react-navigation/native";
import { Button, Input, InputProps } from "@ui-kitten/components";

import { TaskContext } from "@/context/TaskContext";
import { ProjectSelect } from "@/components/ProjectSelector";
import UsersPopover from "@/components/Popovers/UsersPopover";
import PriorityPopover from "@/components/Popovers/PriorityPopover";

const useInputState = (initialValue = ""): InputProps => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const TaskDetail = () => {
  const { task, setTaskId, updateTask } = useContext(TaskContext);
  const { params }: any = useRoute();
  const multilineInputState = useInputState();

  useEffect(() => {
    if (params?.taskId) {
      setTaskId(params?.taskId);
    }
  }, [params?.taskId]);

  return (
    <SafeAreaView>
      <ThemedView style={{ padding: 12 }}>
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
            anchorLabel={"Teammates"}
            dataToCompare={task?.managers}
          />
        </ThemedView>
        <ThemedView style={{ marginTop: 8 }}>
          <UsersPopover
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
        <ThemedView>
          <Button>Archivos</Button>
        </ThemedView>
      </ThemedView>
    </SafeAreaView>
  );
};

export default TaskDetail;
