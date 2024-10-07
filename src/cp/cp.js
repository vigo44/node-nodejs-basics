import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { fork } from "child_process";

const spawnChildProcess = async (args) => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const sourcePath = join(dirName, "files", "script.js");
  fork(sourcePath, args);
};

spawnChildProcess([
  "someArgument1",
  "someArgument2",
  "someArgument3",
  "someArgument4",
]);
