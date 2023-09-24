import { Router } from "express";
import { create as createAstronautController } from "../controllers/AstronautController";

export function createAstronautRoutes(): Router {
  const router: Router = Router();
  router.get("/list", createAstronautController().getAstronauts);
  router.post("/add", createAstronautController().addAstronaut);
  router.patch("/:id/update", createAstronautController().updateAstronaut);
  router.delete("/:id/delete", createAstronautController().deleteAstronaut);
  return router;
}
