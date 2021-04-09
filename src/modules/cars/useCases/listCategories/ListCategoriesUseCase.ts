import { inject, injectable } from 'tsyringe';

import ICategoryRepository from '@modules/cars/repositories/ICategoryRepository';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute() {
    const categories = await this.categoryRepository.list();

    return categories;
  }
}

export default ListCategoriesUseCase;
