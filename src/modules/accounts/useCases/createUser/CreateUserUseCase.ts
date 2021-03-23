import { inject, injectable } from 'tsyringe';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

import IUserRepository from '../../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ name, email, driver_license, password }: ICreateUserDTO) {
    await this.userRepository.create({
      name,
      email,
      driver_license,
      password
    });
  }
}

export default CreateUserUseCase;
