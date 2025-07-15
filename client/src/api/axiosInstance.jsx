import axios from "axios";
import { useAuthStore } from "../store/authStore";

// Create the instance
export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});

// REQUEST INTERCEPTOR - Add token to headers automatically
axiosInstance.interceptors.request.use(
  (config) => {
    const { accessToken, validateToken } = useAuthStore.getState();

    if (accessToken && validateToken()) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Optional: Export a function to manually refresh the token in headers
export const refreshAxiosToken = () => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    axiosInstance.defaults.headers.common["Authorization"] = accessToken;
  } else {
    delete axiosInstance.defaults.headers.common["Authorization"];
  }
};
