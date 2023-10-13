import { Router } from "express";

import { InjectDependencies } from "../DependencyInjection";

export const MapRoutes = async () => {
  const { profileController } = await InjectDependencies();

  const routes = Router();

  routes.put("/", profileController.Update);

  return routes;
};
