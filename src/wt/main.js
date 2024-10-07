import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { cpus } from "node:os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const workerPath = join(dirName, "worker.js");
  const workersAmount = cpus().length;

  function runWorker(index) {
    return new Promise((resolve, _) => {
      const worker = new Worker(workerPath, { workerData: index + 10 });
      worker.on("message", (data) => {
        resolve({
          status: "resolved",
          data,
        });
      });
      worker.on("error", () => {
        resolve({ status: "error", data: null });
      });
    });
  }

  const workersArr = [];
  for (let i = 0; i < workersAmount; i++) {
    workersArr.push(runWorker(i));
  }

  console.log(await Promise.all(workersArr));
};

await performCalculations();
