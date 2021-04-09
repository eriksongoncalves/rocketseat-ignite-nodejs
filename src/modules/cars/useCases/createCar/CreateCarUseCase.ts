import { inject, injectable } from 'tsyringe';

import ICarRepository from '@modules/cars/repositories/ICarRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject('CarRepository')
    private carRepository: ICarRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id
  }: IRequest) {
    const carExists = await this.carRepository.findByLicensePlate(
      license_plate
    );

    if (carExists) {
      throw new AppError('Car already exists');
    }

    const car = await this.carRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });

    return car;
  }
}

export default CreateCarUseCase;
