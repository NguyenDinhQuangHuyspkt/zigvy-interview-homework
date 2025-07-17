import { toast } from "react-toastify";
import { ERROR_NETWORK, ERROR_SYSTEM } from "../constanst/errors.const";

interface IErrorResponse {
  data: {
    code: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

export interface IErrorObject {
  errors?: string[];
  response?: IErrorResponse;
  message?: string;
  [key: string]: any;
}

export const toastErrorHandler = (
  err: IErrorObject,
  msg?: string
): void => {
  const showToastError = (message?: string): void => {
    toast.error(message ?? ERROR_SYSTEM, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (err.message === "Network Error") {
    return showToastError(ERROR_NETWORK,);
  }

  return showToastError(msg);
};

export const toastSuccessHandler = (message: string): void => {
  toast.success(message, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
