import { NextFunction, Request, Response } from 'express';
import { AppError } from '../../utils/AppError';
import { ResponseCode } from '../../utils/ResponseCode';

export default function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (error instanceof AppError) {
    return response.status(error.status).json({
      status: error.status,
      message: error.message,
      path: request.path,
    });
  }

  return response.status(ResponseCode.InternalServerError).json({
    message: 'Internal server error',
    status: ResponseCode.InternalServerError,
    path: request.path,
  });
}
