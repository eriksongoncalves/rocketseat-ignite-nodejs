import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
}

export default IUserRepository;
