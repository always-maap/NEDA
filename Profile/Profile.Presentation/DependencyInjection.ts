import { RecommendationService, UserProfileService } from "Profile.Application";
import { InjectInfraDependencies } from "Profile.Infrastructure";
import { InjectSubscriberDependencies, UserCreatedConsumer } from "Profile.Subscriber";
import { UserProfileController } from "./Controllers/UserProfileController";
import { RecommendationController } from "./Controllers/RecommendationController";

export const InjectDependencies = async () => {
  const { userProfileRepository } = await InjectInfraDependencies();
  const _ = await InjectSubscriberDependencies();

  const profileService = new UserProfileService(userProfileRepository);
  const recommendationService = new RecommendationService();

  const x = new UserCreatedConsumer(profileService).Consume();

  const profileController = new UserProfileController(profileService);
  const recommendationController = new RecommendationController(recommendationService);

  return { profileController, recommendationController };
};
