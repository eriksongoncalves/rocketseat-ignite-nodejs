import Category from '../models/Category';
import ICategoryRepository, { ICreateCategoryDTO } from './ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: CategoryRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository();
    }

    return CategoryRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | undefined {
    return this.categories.find(cat => cat.name === name);
  }
}

export default CategoryRepository;
