import { Router } from "express";

import { InjectDependencies } from "../DependencyInjection";

export const MapRoutes = async () => {
  const { authController, userController } = await InjectDependencies();

  const routes = Router();

  routes.post("/otp", authController.Otp);
  routes.post("/verify", authController.Verify);

  routes.get("/user", userController.Get);

  return routes;
};
