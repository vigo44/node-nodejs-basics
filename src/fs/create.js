import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { writeFile } from "node:fs/promises";

const ERROR_TEXT = "FS operation failed";
const TEXT = "I am fresh and young";

const create = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const filePath = join(dirName, "files", "fresh.txt");
  try {
    await writeFile(filePath, TEXT, { flag: "wx" });
  } catch (error) {
    throw new Error(ERROR_TEXT);
  }
};

await create();
