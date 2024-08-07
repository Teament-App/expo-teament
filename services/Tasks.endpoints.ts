import apiClient from "./Axios.client";

export const GET_MY_TASKS = async () => {
  try {
    return await apiClient.get("/task/me", {
      params: {
        page_size: 100,
        page: 1,
      },
    });
  } catch (e) {}
};

export const GET_PROJECT_TASKS = async ({ queryKey }: any) => {
  const [, projects_id, filters] = queryKey;
  try {
    return await apiClient.get("/task/list", {
      params: {
        projects_id,
        allTask: 1,
        page_size: 100,
        page: 1,
      },
    });
  } catch (e) {}
};

export const GET_TASK = async ({ queryKey }: any) => {
  const [, taskId] = queryKey;
  try {
    return await apiClient.get(`/task/${taskId}`);
  } catch (e) {
    throw e;
  }
};

export const GET_TASK_FILES = async ({ queryKey }: any) => {
  const [, taskId] = queryKey;
  try {
    return await apiClient.get(`/task/files?taskId=${taskId}`);
  } catch (e) {
    throw e;
  }
};

export const UPDATE_TASK = async ({ taskId, data }: any) => {
  try {
    return await apiClient.patch(`/task/${taskId}`, data);
  } catch (e) {
    throw e;
  }
};
