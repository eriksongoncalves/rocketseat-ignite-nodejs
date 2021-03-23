import Specification from '../entities/Specification';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;

  list(): Promise<Specification[]>;

  findByName(name: string): Promise<Specification | undefined>;
}

export default ISpecificationRepository;
