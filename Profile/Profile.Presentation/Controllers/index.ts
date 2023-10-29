import { Router } from "express";

import { InjectDependencies } from "../DependencyInjection";

export const MapRoutes = async () => {
  const { profileController, recommendationController } = await InjectDependencies();

  const routes = Router();

  routes.get("/user-profile", profileController.Get);
  routes.get("/user-profile/:userId", profileController.GetPublic);
  routes.put("/user-profile", profileController.Update);

  // return paginated list of recommended profiles
  routes.get("/recommend", recommendationController.Get);
  routes.get("/recommend/accept");
  routes.get("/recommend/reject");

  // return all the matches of the user
  routes.get("/match");
  routes.delete("/match/:userId");

  return routes;
};
