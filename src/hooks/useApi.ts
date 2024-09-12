// src/hooks/useApi.ts
import axios, { AxiosInstance } from 'axios';

const useApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: 'http://127.0.0.1:8000', // Base URL for your backend API
  });

  // Add access token to all requests
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Handle token refresh if access token expires
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await api.post('/auth/token/refresh/', { refresh: refreshToken });
        const newAccessToken = response.data.access;

        localStorage.setItem('accessToken', newAccessToken);
        api.defaults.headers.Authorization = `Bearer ${newAccessToken}`;
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      }
      return Promise.reject(error);
    }
  );

  return api;
};

export default useApi;
