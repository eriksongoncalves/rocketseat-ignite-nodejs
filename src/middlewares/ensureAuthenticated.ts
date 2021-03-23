import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import UserRepository from '../modules/accounts/repositories/implementations/UserRepository';

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export async function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error('Token is missing');
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
      throw new Error('User does not exists');
    }

    return next();
  } catch {
    throw new Error('Invalid Token');
  }
}
