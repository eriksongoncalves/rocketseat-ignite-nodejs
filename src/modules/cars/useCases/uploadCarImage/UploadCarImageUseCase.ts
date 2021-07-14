import { inject, injectable } from 'tsyringe';

import { CarsImagesRepository } from '@modules/cars/infra/typeorm/repositories/CarsImagesRepository';

import CarRepository from '@modules/cars/infra/typeorm/repositories/CarRepository';
import { UploadCarImageError } from './UploadCarImagesError';

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject('CarsImagesRepository')
    private carsImagesRepository: CarsImagesRepository,

    @inject('CarRepository')
    private carRepository: CarRepository
  ) {}

  async execute({ car_id, images_name }: IRequest): Promise<void> {
    const car = await this.carRepository.findById(car_id);
    if (!car) {
      throw new UploadCarImageError();
    }

    images_name.map(async image => {
      await this.carsImagesRepository.create(car_id, image);
    });
  }
}

export { UploadCarImagesUseCase };
