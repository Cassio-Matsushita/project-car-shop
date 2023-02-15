import { NextFunction, Request, Response } from 'express';
import HttpError from '../utils/HttpError';

export default class ErrorHandler {
  public static handle(
    error: HttpError,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.status).json({ message: error.message });
    next();
  }
}