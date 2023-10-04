import { ProfileController } from "./Controllers/ProfileController";

export const InjectDependencies = async () => {
  const profileController = new ProfileController();

  return { profileController };
};
