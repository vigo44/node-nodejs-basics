import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { cp } from "node:fs/promises";

const ERROR_TEXT = "FS operation failed";

const copy = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files");
  const copyPath = join(dirName, "files_copy");
  try {
    await cp(sourcePath, copyPath, {
      errorOnExist: true,
      force: false,
      recursive: true,
    });
  } catch (error) {
    throw new Error(ERROR_TEXT);
  }
};

await copy();
