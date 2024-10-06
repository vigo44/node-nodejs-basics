import { fileURLToPath } from "url";
import { dirname, join, extname } from "path";
import { readFile, access } from "node:fs/promises";

const ERROR_TEXT = "FS operation failed";

const read = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files", "fileToRead.txt");
  try {
    await access(sourcePath);
    const file = await readFile(sourcePath, { encoding: "utf8" });
    console.log(file);
  } catch (error) {
    throw new Error(ERROR_TEXT);
  }
};

await read();
