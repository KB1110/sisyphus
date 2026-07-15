import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import index_router from "./routes/index.routes.js";
import health_router from "./routes/health.routes.js";
import repository_router from "./routes/repository.routes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", index_router);
app.use("/health", health_router);
app.use("/repositories", repository_router);

export default app;
