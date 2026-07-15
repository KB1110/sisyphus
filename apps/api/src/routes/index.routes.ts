import { Router } from "express";

import IndexController from "../controllers/index.controller.js";
import IndexService from "../services/index.service.js";

const router = Router();

const index_service = new IndexService();
const index_controller = new IndexController(index_service);

router.get("/", index_controller.getIndex);

export default router;
