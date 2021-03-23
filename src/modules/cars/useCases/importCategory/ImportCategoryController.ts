import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ImportCategoryUseCase from './ImportCategoryUseCase';

class ListCategoriesController {
  async handle(req: Request, res: Response) {
    const { file } = req;

    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return res.send();
  }
}

export default ListCategoriesController;
