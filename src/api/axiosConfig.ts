import { useAuthStore } from '@/store';
import axios from 'axios';

export const BASE_URL = 'http://localhost:8080/api/v2/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const access_token = useAuthStore.getState().access_token;
    if (access_token) {
      config.headers['Authorization'] = `Bearer ${access_token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
