import Specification from '../models/Specification';
import ISpecificationRepository, {
  ICreateSpecificationDTO
} from './ISpecificationRepository';

class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date()
    });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification | undefined {
    return this.specifications.find(cat => cat.name === name);
  }
}

export default SpecificationRepository;
