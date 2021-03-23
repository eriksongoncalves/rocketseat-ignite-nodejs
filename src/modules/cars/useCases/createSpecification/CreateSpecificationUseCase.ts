import { inject, injectable } from 'tsyringe';

import ISpecificationRepository from '../../repositories/ISpecificationRepository';
import AppError from '../../../../errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ name, description }: IRequest) {
    const specificationExists = await this.specificationRepository.findByName(
      name
    );

    if (specificationExists) {
      throw new AppError('Specification already exists');
    }

    this.specificationRepository.create({ name, description });
  }
}

export default CreateSpecificationUseCase;
