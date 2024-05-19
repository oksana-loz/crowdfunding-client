import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_BASE_API_URL as string;

export const $baseAPI = axios.create({
  baseURL: BASE_URL,
});

$baseAPI.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
