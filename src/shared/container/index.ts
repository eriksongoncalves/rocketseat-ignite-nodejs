import { container } from 'tsyringe';

import IUserRepository from '@modules/accounts/repositories/IUserRepository';
import UserRepository from '@modules/accounts/infra/typeorm/repositories/UserRepository';
import ICategoryRepository from '@modules/cars/repositories/ICategoryRepository';
import CategoryRepository from '@modules/cars/infra/typeorm/repositories/CategoryRepository';
import ISpecificationRepository from '@modules/cars/repositories/ISpecificationRepository';
import SpecificationRepository from '@modules/cars/infra/typeorm/repositories/SpecificationRepository';

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationRepository
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
