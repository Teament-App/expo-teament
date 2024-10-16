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
import { Button, Input, InputProps, Layout } from "@ui-kitten/components";

import { TaskContext } from "@/context/TaskContext";
import { ProjectSelect } from "@/components/ProjectSelector";
import UsersPopover from "@/components/Popovers/UsersPopover";
import PriorityPopover from "@/components/Popovers/PriorityPopover";
import { ScrollView } from "react-native-gesture-handler";
import FileUploader from "@/components/FileUplader/FileUploader";
import File from "@/components/TaskFile";
import DateDisplay from "@/components/DateDisplay";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { UPDATE_TASK } from "@/services/Tasks.endpoints";
import { useQueryClient } from "react-query";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import PriorityAnchor from "@/components/PriorityAnchor";
import Priority from "@/components/ModalComponents/Priority";

const useInputState = (initialValue = ""): InputProps => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const TaskDetail = () => {
  const queryClient = useQueryClient();
  const { task, setTaskId, updateTask, files, refetchFiles } =
    useContext(TaskContext);
  const { params }: any = useRoute();
  const multilineInputState = useInputState(task?.description);
  const [dirty, setDirty] = useState<Set<string>>(new Set([]));
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [openPriority, setOpenPriority] = useState(false);
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean | string>(
    false
  );
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  useEffect(() => {
    if (params?.taskId) {
      setTaskId(params?.taskId);
    }
  }, [params?.taskId]);

  const save = async () => {
    try {
      const keys = Array.from(dirty);
      const request: any = {};
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
      const ans = await UPDATE_TASK({ taskId: task?.id, data: request });
      queryClient.invalidateQueries(["my-tasks"]);
      router.navigate("(protected)/(tabs)/(dashboard)");
    } catch (e) {
      console.log(e);
    }
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
      />
    ),
    []
  );

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
            <PriorityAnchor
              priority={task?.priority}
              toggle={() => {
                setOpenBottomSheet("priority");
              }}
            />
            {/* <PriorityPopover
              priority={task?.priority}
              onChange={(value: any) => {
                updateTask({ priority: value });
                setDirty((prev: Set<any>) => new Set([...prev, "priority"]));
              }}
            /> */}
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
                setDirty((prev: Set<any>) => new Set([...prev, "reviewers"]));
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
              value={task?.description}
              onChangeText={(value) => {
                updateTask({ description: value });
                setDirty((prev: Set<any>) => new Set([...prev, "description"]));
              }}
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
      {openBottomSheet && (
        <View
          style={[
            {
              flex: 1,
              padding: 24,
              backgroundColor: "#80808060",
              zIndex: 100,
              height: "100%",
              width: "100%",
              position: "absolute",
            },
          ]}
        >
          <BottomSheet
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            // snapPoints={[50, 125]}
            enableDynamicSizing
            enablePanDownToClose
            onClose={() => setOpenBottomSheet(false)}
            backdropComponent={renderBackdrop}
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
              <Layout
                style={{
                  width: "100%",
                }}
              >
                {openBottomSheet === "priority" && (
                  <Priority
                    priority={task?.priority}
                    title={false}
                    onChange={(value: any) => {
                      updateTask({ priority: value });
                      setDirty(
                        (prev: Set<any>) => new Set([...prev, "priority"])
                      );
                    }}
                  />
                )}
              </Layout>
            </BottomSheetView>
          </BottomSheet>
        </View>
      )}
      {dirty?.size > 0 && !openBottomSheet && (
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={[50, 125]}
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
            <Button appearance="outline" size="small">
              <ThemedText>Cancelar</ThemedText>
            </Button>
          </BottomSheetView>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default TaskDetail;
