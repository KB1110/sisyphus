import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    name: "Sisyphus API",
    version: "0.1.0",
  });
});

export default router;
