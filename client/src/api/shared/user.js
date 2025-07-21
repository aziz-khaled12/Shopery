import { useAuthStore } from "../../store/authStore";
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

export const updateUser = async (userId, userData) => {
  const { setUser } = useAuthStore.getState();
  try {
    const res = await axiosInstance.put(
      `/shared/user/update/${userId}`,
      userData
    );
    console.log("updated user: ", res.data.updatedUser);
    setUser(res.data.updatedUser);
    return res.data.updatedUser;
  } catch (error) {
    console.error("Error updating user");
    throw error;
  }
};

export const updateBillingInfo = async (userId, billingInfo) => {
  try {
    const res = await axiosInstance.put(
      `/shared/user/update/billing/${userId}`,
      billingInfo
    );
    console.log("billing response: ", res.data)
    return res.data.user;
  } catch (error) {
    console.error("Error updating user");
    throw error;
  }
};
