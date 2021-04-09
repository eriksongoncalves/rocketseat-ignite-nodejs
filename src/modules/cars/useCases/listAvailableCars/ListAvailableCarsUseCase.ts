import { inject, injectable } from 'tsyringe';

import ICarRepository from '@modules/cars/repositories/ICarRepository';

interface IRequest {
  brand?: string;
  category_id?: string;
  name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject('CarRepository')
    private carRepository: ICarRepository
  ) {}

  async execute({ brand, category_id, name }: IRequest) {
    const cars = await this.carRepository.findAvailable(
      brand,
      category_id,
      name
    );

    return cars;
  }
}

export default ListAvailableCarsUseCase;
