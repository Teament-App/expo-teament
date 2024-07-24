import React, { useEffect, useState } from "react";
import { EmptyTask, TaskType } from "@/types/Task.type";
import { useReactQuery } from "@/hooks/useReactQuery";
import { GET_TASK } from "@/services/Tasks.endpoints";
import { UseQueryResult } from "react-query";

export const TaskContext = React.createContext<{
  task: TaskType;
  updateTask: (e: any) => void;
  setTaskId: (e: any) => void;
}>({
  task: EmptyTask,
  updateTask: () => {},
  setTaskId: () => {},
});

export const TaskProvider = (props: React.PropsWithChildren) => {
  const [taskId, setTaskId] = useState<any>();
  const [task, setTask] = useState<TaskType>(EmptyTask);
  const {
    response,
    refetch,
  }: { response: TaskType; refetch: UseQueryResult["refetch"] } =
    useReactQuery<TaskType>(["task", taskId], GET_TASK, {
      enabled: false,
    });

  useEffect(() => {
    console.log(taskId);
    if (taskId) {
      refetch();
    }
  }, [taskId]);

  useEffect(() => {
    console.log("response: ", response);
    if (response) {
      updateTask(response);
    }
  }, [response]);

  const updateTask = (e: any) => {
    setTask((prev) => ({
      ...prev,
      ...e,
    }));
  };
  return (
    <TaskContext.Provider
      value={{
        task,
        updateTask,
        setTaskId,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
