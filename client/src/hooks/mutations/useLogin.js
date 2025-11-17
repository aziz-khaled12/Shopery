import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../store/authStore";
import { axiosInstance } from "../../api/axiosInstance";


export const useLogin = () => {
  const { loginSuccess, setError } = useAuthStore();

  return useMutation({
    mutationFn: async (loginData) => {
      console.log("login data: ", loginData);
      const res = await axiosInstance.post(`/auth/login`, loginData);
      return res.data.token;
    },
    onSuccess: (token) => {
      loginSuccess(token);
      window.location.href = "/";
    },
    onError: (error) => {
      const msg =
        error.response?.status === 401
          ? "Invalid email or password, please try again"
          : "Something went wrong";
      setError(msg);
    },
  });
};
