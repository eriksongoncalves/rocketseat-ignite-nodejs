import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import IUserRepository from '@modules/accounts/repositories/IUserRepository';
import User from '../entities/User';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    id,
    avatar
  }: ICreateUserDTO) {
    const user = this.repository.create({
      id,
      name,
      email,
      driver_license,
      password,
      avatar
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string) {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findById(id: string) {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export default UserRepository;
