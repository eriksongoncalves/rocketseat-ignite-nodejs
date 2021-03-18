import ICategoryRepository from '../../repositories/ICategoryRepository';

class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute() {
    return this.categoryRepository.list;
  }
}

export default ListCategoriesUseCase;
