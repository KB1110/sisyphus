import { env } from "./config/env.js";
import app from "./app.js";

app.get("/", (_, res) => {
  res.status(200).json({
    name: "Sisyphus API",
    version: "0.1.0",
  });
});

app.listen(env.PORT, () => {
  console.log(`Sisyphus API listening on port ${env.PORT}`);
});
