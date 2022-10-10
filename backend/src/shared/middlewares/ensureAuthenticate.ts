import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../../utils/AppError';
import { ResponseCode } from '../../utils/ResponseCode';

export default function ensureAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new AppError({
      message: 'Token is missing',
      status: ResponseCode.Unauthorized,
    });
  }

  const [, token] = authorization.split(' ');
  const secret = process.env.JSON_WEB_TOKEN_SECRET || 'senhadomeujsonwebtoken';
  try {
    const decoded = verify(token, secret);
    const userId = decoded.sub as string;

    request.user = {
      id: userId,
    };

    next();
  } catch (error) {
    throw new AppError({
      message: 'Invalid token',
      status: ResponseCode.Unauthorized,
    });
  }
}
