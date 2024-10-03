import { Task, View } from "react-native";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useRoute } from "@react-navigation/native";
import { Button, Input, InputProps } from "@ui-kitten/components";

import { TaskContext } from "@/context/TaskContext";
import { ProjectSelect } from "@/components/ProjectSelector";
import UsersPopover from "@/components/Popovers/UsersPopover";
import PriorityPopover from "@/components/Popovers/PriorityPopover";
import { ScrollView } from "react-native-gesture-handler";
import DateDisplay from "@/components/DateDisplay";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { CREATE_TASK, UPDATE_TASK } from "@/services/Tasks.endpoints";
import { useQueryClient } from "react-query";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "@/context/SessionContext";

const useInputState = (initialValue = ""): InputProps => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const TaskDetail = () => {
  const queryClient = useQueryClient();
  const { user } = useSession();
  const { task, setTaskId, updateTask } = useContext(TaskContext);
  const { params }: any = useRoute();
  const multilineInputState = useInputState(task?.description);
  const [dirty, setDirty] = useState<Set<string>>(new Set([]));
  const bottomSheetRef = useRef<BottomSheet>(null);

  const goBack = () => {
    router.back();
  };

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    if (task && !task?.managers?.length) {
      updateTask({
        managers: [
          { userId: user?.userId, name: `${user?.name} ${user?.last_name}` },
        ],
      });
      setDirty((prev: Set<any>) => new Set([...prev, "managers"]));
    }
  }, []);

  useEffect(() => {
    if (params?.taskId) {
      setTaskId(params?.taskId);
    }
  }, [params?.taskId]);

  const save = async () => {
    try {
      const keys = Array.from(dirty);
      const request: any = {
        delayed: 0,
        delivery_date: null,
        description: null,
        end_date: null,
        estimated_start_date: null,
        highlighted: 0,
        id: null,
        is_subtasks: false,
        last_task_recurrent: null,
        managers: [],
        priority: "Low",
        projects_id: null,
        recurrence_rule: "never",
        recurrence_until: null,
        reviewers: [],
        start_date: null,
        status: "Not started",
        subtasks: [],
        tasks_id: null,
        title: "",
        nomenclature: "",
      };
      keys.forEach((key) => {
        if (key === "managers") {
          const auxArr = task?.managers?.map((manager) => manager.userId);
          request[key] = auxArr;
        } else if (key === "reviewers") {
          const auxArr = task?.reviewers?.map((manager) => manager.userId);
          request[key] = auxArr;
        } else if (key === "project") {
          request["projects_id"] = task?.projects_id;
        } else {
          request[key] = task[key as keyof Task];
        }
      });
      await CREATE_TASK(request);
      queryClient.invalidateQueries(["my-tasks"]);
      router.navigate("/(protected)/(tabs)/(dashboard)");
    } catch (e) {
      console.log(JSON.stringify(e, null, 2));
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={{ height: "100%" }}>
      <ScrollView>
        <ThemedView style={{ height: "100%", padding: 12 }}>
          <ThemedView>
            <ThemedText
              style={{
                fontSize: 12,
                marginBottom: -2,
                fontFamily: "Montserrat_600SemiBold",
              }}
            >
              Título de la tarea
            </ThemedText>
            <Input
              onChangeText={(e) => {
                updateTask({ title: e });
                setDirty((prev: Set<any>) => new Set([...prev, "title"]));
              }}
              value={task?.title}
              textStyle={{ fontSize: 18, fontFamily: "Montserrat_600SemiBold" }}
              placeholder="Escribe el título de la tarea"
            />
          </ThemedView>
          <ThemedView>
            <ProjectSelect
              selectedValue={{
                name: task?.project_name,
                color: task?.project_color,
                id: task?.projects_id,
              }}
              onChange={(value: any) => {
                updateTask(value);
                setDirty((prev: Set<any>) => new Set([...prev, "project"]));
              }}
            />
          </ThemedView>
          <ThemedView>
            <ThemedText
              style={{
                fontSize: 12,
                marginBottom: -6,
                fontFamily: "Montserrat_600SemiBold",
              }}
              type="title"
            >
              Fecha de entrega
            </ThemedText>
            <DateDisplay
              startDate={task?.initial_delivery_date}
              endDate={task?.delivery_date}
            />
          </ThemedView>
          <ThemedView style={{ marginTop: 8 }}>
            <PriorityPopover
              priority={task?.priority}
              onChange={(value: any) => {
                console.log("value", value);
                updateTask({ priority: value });
                setDirty((prev: Set<any>) => new Set([...prev, "priority"]));
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
                setDirty((prev: Set<any>) => new Set([...prev, "managers"]));
              }}
              anchorLabel={"Teammates"}
              dataToCompare={task?.managers}
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
              value={task?.description}
              onChangeText={(value) => {
                updateTask({ description: value });
                setDirty((prev: Set<any>) => new Set([...prev, "description"]));
              }}
            />
          </ThemedView>
        </ThemedView>
      </ScrollView>
      {dirty?.size > 0 && (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={[150, 150]}
        >
          <BottomSheetView
            style={[
              {
                display: "flex",
                flexDirection: "column",
                gap: 8,
                paddingHorizontal: 16,
              },
            ]}
          >
            <Button
              disabled={!task?.title || !task?.managers?.length}
              size="small"
              onPress={save}
            >
              <ThemedText>Guardar</ThemedText>
            </Button>
            <Button onPress={goBack} appearance="outline" size="small">
              <ThemedText>Cancelar</ThemedText>
            </Button>
          </BottomSheetView>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default TaskDetail;
