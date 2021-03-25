import { inject, injectable } from 'tsyringe';

import IUserRepository from '../../repositories/IUserRepository';
import AppError from '../../../../errors/AppError';

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest) {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new AppError('User does not exists');
    }

    user.avatar = avatar_file;

    await this.userRepository.create(user);
  }
}

export default UpdateUserAvatarUseCase;
