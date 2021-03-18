import ISpecificationRepository from '../../repositories/ISpecificationRepository';

class ListSpecificationsUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute() {
    return this.specificationRepository.list();
  }
}

export default ListSpecificationsUseCase;
