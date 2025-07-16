import { EErrorCodes, ESuccessCodes } from 'src/constanst/api.const';

export interface IResponseApi<T = unknown> {
  code: ESuccessCodes | EErrorCodes;
  message: string;
  data?: T;
}
