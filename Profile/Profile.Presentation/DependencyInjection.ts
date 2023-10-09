import { UserProfileService } from "Profile.Application";
import { InjectInfraDependencies } from "Profile.Infrastructure";
import { UserCreatedConsumer } from "Profile.Subscriber";
import { ProfileController } from "./Controllers/ProfileController";

export const InjectDependencies = async () => {
  const { userProfileRepository } = await InjectInfraDependencies();

  const profileService = new UserProfileService(userProfileRepository);

  // new UserCreatedConsumer(profileService).Consume();

  const profileController = new ProfileController();

  return { profileController };
};
