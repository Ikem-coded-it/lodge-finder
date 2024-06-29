import axios, { AxiosRequestConfig } from "axios";
import { requestInterceptor, responseErrorInterceptor } from "@/app/lib/utils/$http";
import { v4 as uuidv4 } from "uuid";

const cacheSetup = (axiosConfig: AxiosRequestConfig) => {
  const $axios = axios.create(axiosConfig);
  return {
    $http: $axios,
    $axios,
  };
};

export const { $http, $axios } = cacheSetup({
  baseURL: process.env.BASE_API_URL,
  headers: {
    requestSession: JSON.stringify({
      processId: Date.now(),
      userSystemId: uuidv4(),
    }),
  },
});

$http.interceptors.request.use(requestInterceptor);

$http.interceptors.response.use((res) => res, responseErrorInterceptor);

export default $http;
