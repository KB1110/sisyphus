import { Router } from "express";

import HealthController from "../controllers/health.controller.js";
import HealthService from "../services/health.service.js";

const router = Router();

const health_service = new HealthService();
const health_controller = new HealthController(health_service);

router.get("/", health_controller.getHealth);

export default router;
