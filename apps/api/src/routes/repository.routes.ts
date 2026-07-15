import { Router } from "express";

import RepositoryController from "../controllers/repository.controller.js";
import RepositoryService from "../services/repository.service.js";

const router = Router();

const repository_service = new RepositoryService();
const repository_controller = new RepositoryController(repository_service);

router.get("/", repository_controller.getAll);
router.post("/", repository_controller.create);
router.get("/:id", repository_controller.getById);
router.delete("/:id", repository_controller.deleteById);

export default router;
