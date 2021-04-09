import { inject, injectable } from 'tsyringe';
import fs from 'fs';
import csvParse from 'csv-parse';

import ICategoryRepository from '@modules/cars/repositories/ICategoryRepository';

interface IImportCategory {
  name: string;
  description: string;
}

@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  private loadCategories(
    file: Express.Multer.File
  ): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = csvParse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', err => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadCategories(file);

    categories.map(async category => {
      const { name, description } = category;

      const categoryExists = await this.categoryRepository.findByName(name);

      if (!categoryExists) {
        await this.categoryRepository.create({ name, description });
      }
    });
  }
}

export default ImportCategoryUseCase;
