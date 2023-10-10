import { UserProfileService } from "Profile.Application";
import { InjectInfraDependencies } from "Profile.Infrastructure";
import { UserCreatedConsumer } from "./IAM/UserCreatedConsumer";

export const x = async () => {
  const { userProfileRepository } = await InjectInfraDependencies();
  const profileService = new UserProfileService(userProfileRepository);

  const x = new UserCreatedConsumer(profileService).Consume();
};
