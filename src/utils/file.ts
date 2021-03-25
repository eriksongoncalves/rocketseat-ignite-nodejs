import fs from 'fs';

// eslint-disable-next-line consistent-return
export const deleteFile = async (filename: string) => {
  try {
    await fs.promises.stat(filename);
    await fs.promises.unlink(filename);
  } catch (error) {
    return null;
  }
};
