import { type Request, type Response } from "express";

function notFoundMiddleware(_req: Request, res: Response): void {
  res.status(404).json({
    error: "Route not found",
  });
}

export { notFoundMiddleware };
