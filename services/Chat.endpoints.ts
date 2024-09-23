import apiClient from "./Axios.client";

export type ChatToken = {};

export const GET_CHAT_TOKEN = async () => {
  try {
    return await apiClient.post('/chat/login')
  } catch (e) {
    console.log(e);
    return e;
  }
};






