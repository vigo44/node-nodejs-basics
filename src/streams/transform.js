import { stdin, stdout } from "node:process";
import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseStream = new Transform({
    transform(chunk, _, callback) {
      const reverseChunk = chunk.toString().trim().split("").reverse().join("");
      callback(null, `${reverseChunk}\n`);
    },
  });
  pipeline(stdin, reverseStream, stdout);
};

await transform();
