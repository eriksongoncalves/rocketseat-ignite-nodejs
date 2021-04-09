import { getRepository, Repository } from 'typeorm';

import Specification from '@modules/cars/entities/Specification';
import ISpecificationRepository, {
  ICreateSpecificationDTO
} from '../ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO) {
    const specification = this.repository.create({
      name,
      description
    });

    await this.repository.save(specification);
  }

  async list() {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findByName(name: string) {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}

export default SpecificationRepository;
