import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

import IUserRepository from '../../repositories/IUserRepository';

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
      throw new Error('User already exists');
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
