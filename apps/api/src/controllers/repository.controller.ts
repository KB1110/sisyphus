import { type Request, type Response } from "express";
import {
  type Repository,
  type CreateRepositoryRequest,
} from "../types/repository.js";
import RepositoryService from "../services/repository.service.js";

class RepositoryController {
  constructor(private readonly repository_service: RepositoryService) {}

  public getAll = (_req: Request, res: Response): void => {
    const repositories: Repository[] = this.repository_service.getAll();

    res.status(200).json(repositories);
  };

  public create = (req: Request, res: Response): void => {
    const repository: CreateRepositoryRequest = req.body;
    const created_repository = this.repository_service.create(repository);

    res.status(201).json(created_repository);
  };

  public getById = (req: Request, res: Response): void => {
    const id = req.params.id;
    if (typeof id === "string") {
      const repository: Repository | undefined = this.repository_service.getById(id);

      if (repository) {
        res.status(200).json(repository);
      } else {
        res.status(404).json({ error: `Repository ${id} not found` });
      }
    } else {
      res.status(400).json({ error: "Malformed request: id must be a string" });
    }
  };

  public deleteById = (req: Request, res: Response): void => {
    const id = req.params.id;
    if (typeof id === "string") {
      if (this.repository_service.deleteById(id)) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ error: `Repository ${id} not found` });
      }
    } else {
      res.status(400).json({ error: "Malformed request: id must be a string" });
    }
  };
}

export default RepositoryController;
