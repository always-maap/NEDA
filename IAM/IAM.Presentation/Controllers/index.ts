import { Router } from "express";

import { InjectDependencies } from "../DependencyInjection";

export const MapRoutes = async () => {
  const { authController, userController } = await InjectDependencies();

  const routes = Router();

  routes.post("/sign-up", authController.SignUp);
  routes.post("/sign-in", authController.SignIn);
  routes.post("/verify", authController.VerifyCode);

  routes.get("/user", userController.Get);

  return routes;
};
