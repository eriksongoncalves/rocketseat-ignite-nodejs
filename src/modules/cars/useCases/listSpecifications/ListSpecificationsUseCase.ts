import { inject, injectable } from 'tsyringe';

import ISpecificationRepository from '../../repositories/ISpecificationRepository';

@injectable()
class ListSpecificationsUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute() {
    const specifications = await this.specificationRepository.list();

    return specifications;
  }
}

export default ListSpecificationsUseCase;
