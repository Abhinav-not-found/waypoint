import axios, {
  type AxiosError,
  type InternalAxiosRequestConfig,
} from 'axios';

import { OpenAPI } from './core/OpenAPI';

interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}

let refreshPromise: Promise<void> | null = null;

axios.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as RetryConfig | undefined;

    if (!originalRequest || error.response?.status !== 401) {
      return Promise.reject(error);
    }

    const url = originalRequest.url ?? '';

    // Don't refresh when login, registration or refresh itself fails.
    if (
      url.includes('/auth/login') ||
      url.includes('/auth/register') ||
      url.includes('/auth/refresh') ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      // Prevent multiple simultaneous refresh requests.
      if (!refreshPromise) {
        refreshPromise = axios
          .post(
            `${OpenAPI.BASE}/auth/refresh`,
            undefined,
            { withCredentials: true },
          )
          .then(() => undefined)
          .finally(() => {
            refreshPromise = null;
          });
      }

      await refreshPromise;

      // Retry the original request.
      originalRequest.withCredentials = true;

      return axios(originalRequest);

    } catch (refreshError) {
      window.dispatchEvent(new Event('auth:session-expired'));

      return Promise.reject(refreshError);
    }
  },
);