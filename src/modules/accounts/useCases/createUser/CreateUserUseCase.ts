import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import AppError from '@errors/AppError';
import IUserRepository from '@modules/accounts/repositories/IUserRepository';
import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, driver_license, password }: ICreateUserDTO) {
    const passwordHash = await hash(password, 8);

    const userExists = await this.userRepository.findByEmail(email);

    if (userExists) {
      throw new AppError('User already exists');
    }

    await this.userRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash
    });
  }
}

export default CreateUserUseCase;
