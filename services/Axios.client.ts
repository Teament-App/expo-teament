import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { InternalAxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.verkian.com",
});

apiClient.interceptors.request.use(
  async (requestConfig: InternalAxiosRequestConfig): Promise<any> => {
    requestConfig.headers["User-Agent"] = "VerkianApp/0.0.1";
    const accessToken = await AsyncStorage.getItem("accessToken");
    if (accessToken) {
      requestConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return requestConfig;
  }
);

export default apiClient;
