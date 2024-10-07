import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createHash } from "crypto";
import { createReadStream } from "node:fs";
import { stdout } from "node:process";
import { pipeline } from "stream/promises";

const calculateHash = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files", "fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const sourceSream = createReadStream(sourcePath);
  try {
    await pipeline(sourceSream, hash);
  } finally {
    stdout.write(`${hash.digest("hex")}\n`);
  }
};

await calculateHash();
