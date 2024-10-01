import { StyleSheet, Task, View } from "react-native";
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
import {
  CREATE_TASK,
  GET_MY_TASKS,
  UPDATE_TASK,
} from "@/services/Tasks.endpoints";
import { useQueryClient } from "react-query";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSession } from "@/context/SessionContext";
import { useReactQuery } from "@/hooks/useReactQuery";
import { Colors } from "@/constants/Colors";
import TaskContainer from "@/components/TaskContainer";

const useInputState = (initialValue = ""): InputProps => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const TaskDetail = () => {
  const queryClient = useQueryClient();
  const { user } = useSession();
  const { response: tasks, error: tasksError } = useReactQuery(
    ["my-tasks"],
    GET_MY_TASKS
  );

  return (
    <SafeAreaView
      style={{ height: "99%", marginTop: -8, paddingHorizontal: 8 }}
    >
      <ThemedView
        style={[{ width: "100%", height: "100%" }, styles.tasksContainer]}
      >
        <TaskContainer tasks={tasks} />
      </ThemedView>
    </SafeAreaView>
  );
};

export default TaskDetail;

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
