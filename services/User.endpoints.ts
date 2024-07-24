import apiClient from "./Axios.client";

export type UserInformation = {
  birth_date?: string;
  holidays?: string;
  image_url?: string;
  job?: string;
  last_name?: string;
  message?: string;
  name?: string;
  phone_number?: string;
};

export const GET_INFO_USER = async () => {
  try {
    return await apiClient({
      method: "get",
      url: "/infoUser",
    });
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const UPDATE_USER_INFO = async (data: UserInformation) => {
  try {
    return await apiClient({
      method: "patch",
      url: "/infoUser",
      data,
    });
  } catch (e) {
    console.log(JSON.stringify(e, null, 2));
    return e;
  }
};

export const GET_USERS_SIMPLIFIED = async () => {
  try {
    return await apiClient({
      url: "/users/list",
      method: "get",
      params: {
        page: 1,
        page_size: 100,
      },
    });
  } catch (e) {
    return e;
  }
};

export const GET_TEAM_USERS = async () => {
  try {
    return await apiClient({
      url: `/users/team`,
      method: "get",
    });
  } catch (error) {
    return error;
  }
};
