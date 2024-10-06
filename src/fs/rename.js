import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { rename as renameFile, access } from "node:fs/promises";

const ERROR_TEXT = "FS operation failed";
const ERROR_NEW_NAME = "renamePath_not_avalible";

const rename = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files", "wrongFilename.txt");
  const renamePath = join(dirName, "files", "properFilename.md");
  try {
    await access(sourcePath);
    try {
      await access(renamePath);
      throw new Error(ERROR_NEW_NAME);
    } catch (err) {
      if (err.message === ERROR_NEW_NAME) {
        throw new Error(ERROR_TEXT);
      }
    }
    await renameFile(sourcePath, renamePath);
  } catch (error) {
    throw new Error(ERROR_TEXT);
  }
};

await rename();
