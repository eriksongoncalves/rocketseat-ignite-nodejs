import { inject, injectable } from 'tsyringe';

import ICategoryRepository from '../../repositories/ICategoryRepository';
import AppError from '../../../../errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ name, description }: IRequest) {
    const categoryExists = await this.categoryRepository.findByName(name);

    if (categoryExists) {
      throw new AppError('Category already exists');
    }

    this.categoryRepository.create({ name, description });
  }
}

export default CreateCategoryUseCase;
