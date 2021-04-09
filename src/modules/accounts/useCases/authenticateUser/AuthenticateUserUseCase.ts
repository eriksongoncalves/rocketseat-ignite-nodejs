import { inject, injectable } from 'tsyringe';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import AppError from '@shared/errors/AppError';
import IUserRepository from '@modules/accounts/repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    const comparePassword = await compare(password, user.password);

    if (!comparePassword) {
      throw new AppError('Email or password incorrect');
    }

    const token = jwt.sign({}, '5fa9e349e5c126f4bf0471e715787692', {
      subject: user.id,
      expiresIn: '1d'
    });

    return {
      user: {
        name: user.name,
        email: user.email
      },
      token
    };
  }
}

export default AuthenticateUserUseCase;
