import React from "react";
import { Dimensions, StyleSheet, View, useColorScheme } from "react-native";
import { Link, router } from "expo-router";
import { MinifiedTaskType } from "../../types/Task.type";
import TaskUsers from "./TaskUsers";
import { Colors, ColorsInterface } from "@/constants/Colors";
import { Text } from "@ui-kitten/components";
import CheckComplete from "../svg/CheckGreen";
import CalendarSvg from "../svg/Calendar";
import FlagSvg from "../svg/FlagsSvg";
import ClipboardSvg from "../svg/ClipboardSvg";
import { fontFamilyRegular } from "@/utils/styles.util";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemedText } from "../ThemedText";

const Task = ({
  status,
  title,
  tittle,
  priority,
  projects_id,
  managers,
  delivery_date,
  initial_delivery_date,
  id,
  tasks_id,
}: MinifiedTaskType) => {
  const theme = useColorScheme();
  const taskStyles = taskStylesMethod(theme as string);
  const complete = status === "Completed";
  if (!title && !tittle) {
    return;
  }
  const goToTaskDetail = () => {
    router.push(`/(protected)/(task)/${id || tasks_id}`);
  };
  return (
    <View
      style={[
        taskStyles.taskContainer,
        complete && taskStyles.completeContainer,
      ]}
    >
      <View
        style={[
          taskStyles.topContainer,
          complete && taskStyles.completeOpacity,
        ]}
      >
        <CheckComplete
          width={18}
          height={18}
          {...(complete ? { stroke: "#73bd50" } : {})}
        />
        <TouchableOpacity onPress={goToTaskDetail}>
          <ThemedText style={{ fontSize: 12, fontFamily: fontFamilyRegular }}>
            {title || tittle}
          </ThemedText>
        </TouchableOpacity>
      </View>
      <View
        style={[
          taskStyles.bottomContainer,
          complete && taskStyles.completeOpacity,
        ]}
      >
        <View style={[taskStyles.actionsContainer]}>
          <Link
            href={{
              pathname: "/task",
              params: {
                taskId: 1,
                taskDate: new Date().toString(),
                type: "calendar",
                taskData: JSON.stringify({
                  delivery_date: delivery_date,
                  initial_delivery_date: initial_delivery_date,
                }),
              },
            }}
            asChild
          >
            <CalendarSvg width={18} height={18} />
          </Link>
          <Link
            href={{
              pathname: "/task",
              params: {
                taskId: 1,
                taskDate: new Date().toString(),
                type: "priority",
                taskData: JSON.stringify({
                  priority,
                }),
              },
            }}
            asChild
          >
            <FlagSvg
              stroke={
                priority === "Low"
                  ? "#34BE44"
                  : priority === "Medium"
                  ? "#F2D146"
                  : "#FF5858"
              }
              width={18}
              height={18}
            />
          </Link>
          <ClipboardSvg
            stroke={projects_id && Colors.dark.setAction}
            width={18}
            height={18}
          />
        </View>
        <View>
          {/* <Avatar width={1s8} height={18} /> */}
          <TaskUsers
            mainUser={managers[0].image_url || ""}
            totalUsers={managers?.length}
          />
        </View>
      </View>
    </View>
  );
};

const taskStylesMethod = (theme: string) =>
  StyleSheet.create({
    taskContainer: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      height: 60,
      paddingLeft: 12,
      paddingRight: 12,
      flexGrow: 0,
      width: Dimensions.get("window").width - 52,
      borderRadius: 5,
      backgroundColor: Colors[theme as keyof ColorsInterface]?.gray_1,
      fontSize: 12,
      marginBottom: 8,
    },
    completeContainer: {
      backgroundColor: `${
        Colors[theme as keyof ColorsInterface]?.greenSuccess
      }30`,
    },
    completeOpacity: {
      opacity: 0.5,
    },
    taskFontSize: {
      fontSize: 12,
    },
    topContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
    },
    bottomContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8,
    },
    actionsContainer: {
      display: "flex",
      flexDirection: "row",
      gap: 8,
    },
  });

export default Task;
