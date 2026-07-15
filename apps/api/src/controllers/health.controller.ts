import { type Request, type Response } from "express";
import HealthService from "../services/health.service.js";

class HealthController {
  constructor(private readonly health_service: HealthService) {}

  public getHealth = (_req: Request, res: Response): void => {
    const health = this.health_service.getHealth();

    res.status(200).json(health);
  };
}

export default HealthController;
