import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
import { readdir, access } from "node:fs/promises";

const ERROR_TEXT = "FS operation failed";

const list = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files");
  try {
    await access(sourcePath);
    const files = await readdir(sourcePath);
    files.forEach((elem) => {
      if (extname(elem)) console.log(elem);
    });
  } catch (error) {
    throw new Error(ERROR_TEXT);
  }
};

await list();
