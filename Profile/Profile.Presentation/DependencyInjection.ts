import { UserProfileService } from "Profile.Application";
import { InjectInfraDependencies } from "Profile.Infrastructure";
import { UserCreatedConsumer } from "Profile.Subscriber";
import { UserProfileController } from "./Controllers/UserProfileController";

export const InjectDependencies = async () => {
  const { userProfileRepository } = await InjectInfraDependencies();

  const profileService = new UserProfileService(userProfileRepository);

  const x = new UserCreatedConsumer(profileService).Consume();

  const profileController = new UserProfileController(profileService);

  return { profileController };
};
