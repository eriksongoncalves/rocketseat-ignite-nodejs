import { NextFunction, Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

export async function ensureAdmin(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const { isAdmin } = req.user;

  if (!isAdmin) {
    throw new AppError("User isn't admin!");
  }

  return next();
}
