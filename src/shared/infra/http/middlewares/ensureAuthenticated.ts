import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import UserRepository from '@modules/accounts/infra/typeorm/repositories/UserRepository';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token is missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(
      token,
      '5fa9e349e5c126f4bf0471e715787692'
    ) as ITokenPayload;

    const { sub: userId } = decodedToken;

    const usersRepository = new UserRepository();
    const user = await usersRepository.findById(userId);

    if (!user) {
      throw new AppError('User does not exists');
    }

    req.user = {
      id: user.id,
      isAdmin: user.isAdmin
    };

    return next();
  } catch {
    throw new AppError('Invalid Token', 401);
  }
}
