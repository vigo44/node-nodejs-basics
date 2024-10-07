import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createUnzip } from "node:zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const fileToCompressPath = join(dirName, "files", "fileToCompress.txt");
  const archivePath = join(dirName, "files", "archive.gz");
  const readStream = createReadStream(archivePath);
  const writeStream = createWriteStream(fileToCompressPath);
  const unzip = createUnzip();
  await pipeline(readStream, unzip, writeStream);
};

await decompress();
