import { type Request, type Response } from "express";
import RepositoryService from "../services/repository.service.js";

class RepositoryController {
  constructor(private readonly repository_service: RepositoryService) {}

  public getAll = (_req: Request, res: Response): void => {
    const repositories = this.repository_service.getAll();

    res.status(200).json(repositories);
  };

  public create = (req: Request, res: Response): void => {
    const repository = req.body;
    const created_repository = this.repository_service.create(repository);

    res.status(201).json(created_repository);
  };

  public getById = (req: Request, res: Response): void => {
    const id = req.params.id;
    const repository = this.repository_service.getById(id);

    if (repository) {
      res.status(200).json(repository);
    } else {
      res.status(404).json({ error: `Repository ${id} not found` });
    }
  };

  public deleteById = (req: Request, res: Response): void => {
    const id = req.params.id;

    if (this.repository_service.deleteById(id)) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: `Repository ${id} not found` });
    }
  };
}

export default RepositoryController;
