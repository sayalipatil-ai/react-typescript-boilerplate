// src/api/apiClient.ts

import axios, {
    AxiosError,
    AxiosInstance,
    InternalAxiosRequestConfig,
    AxiosResponse,
    AxiosRequestConfig,
  } from 'axios';
  
  
  const UNAUTHENTICATED_PATHS = ['/login', '/signup'];

  const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://wft-geo-db.p.rapidapi.com/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const isAxiosDebugActive = process.env.REACT_APP_AXIOS_DEBUG === 'true' || true;
 
  apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      if (isAxiosDebugActive) {

        console.log('Request:', config);
      }
  
      const token = localStorage.getItem('token');

      if (!UNAUTHENTICATED_PATHS.includes(config.url || '')) {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        } else {
          const noTokenError = new Error('No authentication token found');
          // Uncomment and implement your logging utility
          // printLog(noTokenError);
          console.error(noTokenError);
          throw noTokenError; // This will interrupt the request
        }
      }
  
      return config;
    },
    (error: AxiosError) => {
      if (isAxiosDebugActive) {
        // Uncomment and implement your logging utility
        // printLog(error);
        console.error('Request Error:', error);
      }
      return Promise.reject(error);
    }
  );
  
  // Response Interceptor
  apiClient.interceptors.response.use(
    (response: AxiosResponse) => {
      if (isAxiosDebugActive) {
        // Uncomment and implement your logging utility
        // printLog('Response:', response);
        console.log('Response:', response);
      }
      return response;
    },
    (error: AxiosError) => {
      if (isAxiosDebugActive) {
        console.error('Response Error:', error);
      }
  
      if (error.response) {
        const { status } = error.response;
        if (status >= 300 && status < 400) {
          console.error('Redirection Error:', error.response.data);
        } else if (status >= 400 && status < 500) {
          // Redirect to login page if unauthorized
          if (status === 401) {
            window.location.href = '/login';
          }
  
          console.error('Client Error:', error.response.data);
        } else if (status >= 500) {
          console.error('Server Error:', error.response.data);
        }
      } else if (error.request) {
        console.error('No Response Received:', error.request);
      } else {
        console.error('Error Setting Up Request:', error.message);
      }
      return Promise.reject(error);
    }
  );
  
  export default apiClient;
  