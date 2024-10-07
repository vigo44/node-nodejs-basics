import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";

const read = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files", "fileToRead.txt");
  const sourceStream = createReadStream(sourcePath);
  sourceStream.on("data", (chunk) => stdout.write(chunk));
  sourceStream.on("close", () => {
    stdout.write("\n");
  });
};

await read();
