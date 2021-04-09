import Category from '@modules/cars/entities/Category';
import ICategoryRepository, {
  ICreateCategoryDTO
} from '../ICategoryRepository';

class CategoriesRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description
    });

    this.categories.push(category);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async findByName(name: string): Promise<Category | undefined> {
    const category = this.categories.find(cat => cat.name === name);
    return category;
  }
}

export default CategoriesRepositoryInMemory;
