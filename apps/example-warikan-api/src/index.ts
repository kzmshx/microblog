import { createApp } from "./app";
import { config } from "@repo/example-warikan-config";

let app;

if (process.env.DATA_PATH) {
  const data_path = process.env.DATA_PATH;
  app = createApp(`${data_path}/groups.json`, `${data_path}/expenses.json`);
} else {
  throw new Error();
}

app.listen(config.apiPort, () => {
  console.log(`Start on port ${config.apiPort}`);
});
