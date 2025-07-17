import { AxiosInstance } from "../axios-instance.svc";
import { TResponse } from "../type";
import { TRequestLogin, TRequestRegister, TResponseLogin, TResponseRegister } from "./types";

export const API_AUTH_ENDPOINT = {
  GET: {
    userInfo: "auth/userinfo",
  },
  POST: {
    login: "auth/signin",
    register: "auth/signup",
  },
};

export const login = async (payload: TRequestLogin): Promise<TResponse<TResponseLogin>> => {
  const res = await AxiosInstance.post(API_AUTH_ENDPOINT.POST.login, payload);
  return res.data;
};

export const register = async (payload: TRequestRegister) : Promise<TResponse<TResponseRegister>>=> {
  const res = await AxiosInstance.post(
    API_AUTH_ENDPOINT.POST.register,
    payload,
  );
  return res.data;
};
