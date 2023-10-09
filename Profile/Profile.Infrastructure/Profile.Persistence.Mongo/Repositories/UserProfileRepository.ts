import { IUserProfileRepository } from "Profile.Application";
import { UserProfile } from "Profile.Domain";
import { UserProfileModel } from "../Configurations/UserProfileConfiguration";

export class UserProfileRepository implements IUserProfileRepository {
  async UserIdExists(userId: string) {
    return false;
  }

  async Add(userProfile: UserProfile) {
    const user = new UserProfileModel(userProfile);

    await user.save();
  }
}
