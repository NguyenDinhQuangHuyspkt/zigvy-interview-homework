import axios from "axios";
import QueryString from "qs";
import { getAccessTokenFromCookie } from "../utils/auth.utils";

export const AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER || "",
  withCredentials: true,
  paramsSerializer: (params) => {
    return QueryString.stringify(params);
  },
});

AxiosInstance.defaults.headers.post["Content-Type"] = "application/json";
AxiosInstance.defaults.headers["Accept"] = "application/json";
AxiosInstance.defaults.headers["Content-Type"] = "application/json";

AxiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessTokenFromCookie();

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
