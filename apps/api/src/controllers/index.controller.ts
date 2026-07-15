import { type Request, type Response } from "express";
import IndexService from "../services/index.service.js";

class IndexController {
  constructor(private readonly index_service: IndexService) {}

  public getIndex = (_req: Request, res: Response) => {
    const index = this.index_service.getIndex();

    res.status(200).json(index);
  };
}

export default IndexController;
