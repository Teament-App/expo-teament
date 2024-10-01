import React, { useEffect, useState } from "react";
import { EmptyTask, TaskType } from "@/types/Task.type";
import { useReactQuery } from "@/hooks/useReactQuery";
import { GET_TASK, GET_TASK_FILES } from "@/services/Tasks.endpoints";
import { UseQueryResult } from "react-query";

export const TaskContext = React.createContext<{
  task: TaskType;
  updateTask: (e: any) => void;
  setTaskId: (e: any) => void;
  files?: any[];
  refetchFiles?: () => void;
}>({
  task: EmptyTask,
  updateTask: () => {},
  setTaskId: () => {},
  files: [],
});

export const TaskProvider = (props: React.PropsWithChildren) => {
  const [taskId, setTaskId] = useState<any>();
  const [files, setFiles] = useState<any[]>([]);
  const [task, setTask] = useState<TaskType>(EmptyTask);
  const {
    response,
    refetch,
  }: { response: TaskType; refetch: UseQueryResult["refetch"] } =
    useReactQuery<TaskType>(["task", taskId], GET_TASK, {
      enabled: false,
    });
  const {
    response: responseFiles,
    refetch: refetchFiles,
    error,
    isRefetching,
    isLoading,
  }: {
    response: {
      authorId: number;
      authorName: string;
      filePath: string;
      project: string;
    }[];
    refetch: UseQueryResult["refetch"];
    error: UseQueryResult["error"];
    isRefetching: UseQueryResult["isRefetching"];
    isLoading: UseQueryResult["isLoading"];
  } = useReactQuery<
    {
      authorId: number;
      authorName: string;
      filePath: string;
      project: string;
    }[]
  >(["task-files", taskId], GET_TASK_FILES, {
    enabled: false,
  });

  useEffect(() => {
    if (taskId) {
      refetch();
      refetchFiles();
    }
  }, [taskId]);

  useEffect(() => {
    if (response) {
      updateTask(response);
    }
  }, [response]);
  useEffect(() => {
    if (responseFiles) {
      setFiles(responseFiles);
    }
  }, [responseFiles, isRefetching, isLoading]);

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
        files,
        refetchFiles,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
