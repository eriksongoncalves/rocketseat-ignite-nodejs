import { getRepository, Repository } from 'typeorm';

import Category from '../../entities/Category';
import ICategoryRepository, {
  ICreateCategoryDTO
} from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ name, description }: ICreateCategoryDTO) {
    const category = this.repository.create({
      name,
      description
    });

    await this.repository.save(category);
  }

  async list() {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string) {
    const category = await this.repository.findOne({ name });

    return category;
  }
}

export default CategoryRepository;
