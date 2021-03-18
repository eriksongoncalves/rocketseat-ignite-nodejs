import { Request, Response } from 'express';

import ImportCategoryUseCase from './ImportCategoryUseCase';

class ListCategoriesController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

  handle(req: Request, res: Response) {
    const { file } = req;

    this.importCategoryUseCase.execute(file);

    return res.send();
  }
}

export default ListCategoriesController;
