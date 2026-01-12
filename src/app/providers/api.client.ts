import { getAuthorization } from '@/shared';
import axios from 'axios';

export const apiClient = axios.create({
  withCredentials: true,
});

apiClient.interceptors.request.use(
  (config) => {
    const authorization = getAuthorization();
    if (authorization) {
      config.headers.setAuthorization(authorization, true);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
