import CategoryRepository from 'src/repositories/CategoryRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute({ name, description }: IRequest) {
    const categoryExists = this.categoryRepository.findByName(name);

    if (categoryExists) {
      throw new Error('Category already exists');
    }

    this.categoryRepository.create({ name, description });
  }
}

export default CreateCategoryService;
