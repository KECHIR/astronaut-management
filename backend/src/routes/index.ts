import { Router } from "express";
import { createAstronautRoutes } from "./astronaut.route";

export function createApiRoutes(): Router {
  const router: Router = Router();
  router.use("/astronaut", createAstronautRoutes());
  return router;
}
