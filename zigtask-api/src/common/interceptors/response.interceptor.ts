import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { ESuccessCodes } from 'src/constanst/api.const';
import { IResponseApi } from '../types/api.type';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, IResponseApi<T>>
{
  intercept(
    _context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<IResponseApi<T>> {
    return next.handle().pipe(
      map((data: T) => {
        const response: IResponseApi<T> = {
          code: ESuccessCodes.Success,
          message: 'Success',
        };
        if (data !== undefined) {
          response.data = data;
        }
        return response;
      }),
    );
  }
}
