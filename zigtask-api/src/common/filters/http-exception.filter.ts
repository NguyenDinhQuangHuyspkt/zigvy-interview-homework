import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { IResponseApi } from '../types/api.type';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response<IResponseApi>>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorResponse = {
      code: status,
      message:
        exception instanceof HttpException
          ? typeof exception.getResponse() === 'object'
            ? JSON.stringify(exception.getResponse())
            : String(exception.getResponse().toString)
          : 'Internal server error',
    };

    response.status(status).json(errorResponse);
  }
}
