import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

const write = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files", "fileToWrite.txt");
  const sourceStream = createWriteStream(sourcePath);
  stdin.on("data", (data) => {
    sourceStream.write(data);
  });
};

await write();
