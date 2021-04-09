import User from '@modules/accounts/infra/typeorm/entities/User';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import IUserRepository from '../IUserRepository';

class CategoriesRepositoryInMemory implements IUserRepository {
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(u => u.email === email);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  users: User[] = [];

  async create({
    driver_license,
    email,
    name,
    password
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      driver_license,
      email,
      name,
      password
    });

    this.users.push(user);
  }
}

export default CategoriesRepositoryInMemory;
