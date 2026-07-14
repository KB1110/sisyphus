import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import indexRouter from "./routes/index.routes.js";
import healthRouter from "./routes/health.routes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", indexRouter);
app.use("/health", healthRouter);

export default app;
