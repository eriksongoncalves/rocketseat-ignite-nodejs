import { getRepository, Repository } from 'typeorm';

import {
  ISpecificationRepository,
  ICreateSpecificationDTO
} from '@modules/cars/repositories/ISpecificationRepository';
import Specification from '../entities/Specification';

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

    return this.repository.save(specification);
  }

  async list() {
    return this.repository.find();
  }

  async findByName(name: string) {
    return this.repository.findOne({ name });
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    return this.repository.findByIds(ids);
  }
}

export default SpecificationRepository;
