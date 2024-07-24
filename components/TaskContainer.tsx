import { View, Text, FlatList } from "react-native";
import React from "react";
import { MinifiedTaskType } from "@/types/Task.type";
import Task from "./Task/Task";

export const renderTasks = ({ item }: { item: any }) => {
  const minifyTask: MinifiedTaskType = {
    ...item,
  };
  return <Task {...minifyTask} />;
};

export default function TaskContainer({ tasks = {}, taskKey = "result" }: any) {
  return (
    <FlatList
      style={[
        {
          height: "100%",
        },
      ]}
      data={tasks[taskKey] || []}
      renderItem={renderTasks}
      keyExtractor={(item) => {
        return `${item?.id || item?.tasks_id}`;
      }}
      getItemLayout={(data, index) => ({
        length: 60,
        offset: 60 * index,
        index,
      })}
    ></FlatList>
  );
}
