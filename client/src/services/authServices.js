// src/services/authService.js
import { axiosInstance } from "../api/axiosInstance";
import { storeToken, clearToken } from "./tokenService";
import { jwtDecode } from "jwt-decode";

export const authService = {
  async login(loginData) {
    try {
      const response = await axiosInstance.post("/auth/login", loginData);
      storeToken(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Login failed");
      } else if (error.request) {
        throw new Error("No response from server");
      } else {
        throw new Error("Login request failed");
      }
    }
  },

  async signup(signupData) {
    try {
      const response = await axiosInstance.post("/auth/signup", {
        ...signupData,
        role: "customer", // Default role for your single-seller shop
      });
      storeToken(response.data.token);
      return response.data;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message || "Signup failed");
      } else if (error.request) {
        throw new Error("No response from server");
      } else {
        throw new Error("Signup request failed");
      }
    }
  },

  async getCurrentUser() {
    const token = localStorage.getItem("token");
    if (!token) {
      return null; // No user is logged in
    }
    try {
      const decodedToken = jwtDecode(token);
      console.log("Decoded Token:", decodedToken);
      const res = await axiosInstance.get(
        `/shared/user/${decodedToken.userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Current User:", res.data.user);
      return res.data.user;
    } catch (error) {
      console.error("Failed to parse token", error);
      return null; // Invalid token
    }
  },

  logout() {
    clearToken();
    // Optional: Add any additional cleanup here
  },
};
