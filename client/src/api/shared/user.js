import { axiosInstance } from "../axiosInstance";

export const fetchUser = async (userId) => {
  try {
    const res = await axiosInstance.get(`/shared/user/${userId}`);
    return res.data.user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};
