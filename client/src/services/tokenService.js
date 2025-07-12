import { axiosInstance } from "../api/axiosInstance";

// src/services/tokenService.js
const TOKEN_KEY = 'token';

export const storeToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
  // Also set it as a default header for axios
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
  delete axiosInstance.defaults.headers.common['Authorization'];
};

// Initialize axios headers when app starts
export const initAuth = () => {
  const token = getToken();
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
};