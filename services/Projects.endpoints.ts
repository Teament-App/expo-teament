import apiClient from "./Axios.client";

export const GET_USER_PROJECTS = async () => {
  try {
    return await apiClient.get("/projects", {
      params: {
        page_size: 100,
        page: 1,
      },
    });
  } catch (e) {}
};

export const GET_PROJECT_DETAILS = async (keys: any) => {
  const { queryKey } = keys;
  const [, id] = queryKey;
  try {
    return await apiClient.get(`/projects/${id}`);
  } catch (e) {}
};

export const UPDATE_PROJECT = async ({ projectId, data }: any) => {
  try {
    return await apiClient.patch(`/projects/${projectId}`, data);
  } catch (e) {
    throw e;
  }
};
