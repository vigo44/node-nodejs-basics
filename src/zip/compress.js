import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createGzip } from "node:zlib";
import { pipeline } from "stream/promises";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const fileToCompressPath = join(dirName, "files", "fileToCompress.txt");
  const archivePath = join(dirName, "files", "archive.gz");
  const readStream = createReadStream(fileToCompressPath);
  const writeStream = createWriteStream(archivePath);
  const gzip = createGzip();
  await pipeline(readStream, gzip, writeStream);
};

await compress();
