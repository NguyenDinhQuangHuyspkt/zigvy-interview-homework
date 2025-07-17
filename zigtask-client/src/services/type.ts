import { EErrorCodes, ESuccessCodes } from "../constanst/app.const";

export type TResponse<T> ={
  data: T;
  message: string;
  code: ESuccessCodes | EErrorCodes;
}
