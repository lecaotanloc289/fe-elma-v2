import { useAuthStore } from '@/store/auth.store';
import { useLoadingStore } from '@/store/loading.store';
import { willExpireIn } from '@/utils/jwt-decode';
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8080/api/v2';

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const apiPublic: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

let isRefreshing = false;
let pendingQueue: {
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
  config: AxiosRequestConfig;
}[] = [];

function processQueue(error: any, token?: string) {
  pendingQueue.forEach(({ resolve, reject, config }) => {
    if (error) {
      reject(error);
    } else {
      if (token && config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      resolve(api(config));
    }
  });
  pendingQueue = [];
}

async function refreshTokens() {
  try {
    const response = await api.post(`auth/refresh`);
    const access_token = response?.data?.data?.access_token;
    if (!access_token) {
      throw new Error('Missing access token in refresh response');
    }
    useAuthStore.getState().setTokens(access_token);
    return access_token;
  } catch (error) {
    useAuthStore.getState().clear();
    throw error;
  }
}

api.interceptors.request.use(
  async config => {
    useLoadingStore.getState().start();
    const { access_token } = useAuthStore.getState();

    if ((config.url || '').includes('/auth/refresh')) return config;

    if (access_token && config.headers) {
      if (willExpireIn(access_token, 60) && !isRefreshing) {
        try {
          isRefreshing = true;
          const new_access_token = await refreshTokens();
          (config.headers as any).Authorization = `Bearer ${new_access_token}`;
        } finally {
          isRefreshing = false;
        }
      } else {
        (config.headers as any).Authorization = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  error => {
    useLoadingStore.getState().stop();
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  res => {
    useLoadingStore.getState().stop();
    return res;
  },
  async (error: AxiosError) => {
    const original = error.config!;
    const status = error.response?.status;

    if (status === 401 && !(original as any)._retried) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          pendingQueue.push({ resolve, reject, config: { ...original } });
        });
      }
      (original as any)._retried = true;

      try {
        isRefreshing = true;
        const newAccess = await refreshTokens();
        isRefreshing = false;

        processQueue(null, newAccess);
        if (original.headers) {
          (original.headers as any).Authorization = `Bearer ${newAccess}`;
        }
        console.log(original.headers);
        return api(original);
      } catch (refreshErr) {
        isRefreshing = false;
        processQueue(refreshErr, undefined);
        useAuthStore.getState().clear?.();
        return Promise.reject(refreshErr);
      }
    }
    useLoadingStore.getState().stop();
    return Promise.reject(error);
  }
);

export default api;
