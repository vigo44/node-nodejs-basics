import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { rm } from "node:fs/promises";

const ERROR_TEXT = "FS operation failed";

const remove = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files", "fileToRemove.txt");
  try {
    await rm(sourcePath);
  } catch {
    throw new Error(ERROR_TEXT);
  }
};

await remove();
