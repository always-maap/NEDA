import { IUserProfileRepository } from "Profile.Application";
import { UserProfile } from "Profile.Domain";
import { UserProfileModel } from "../Configurations/UserProfileConfiguration";
import { UserProfileModelToUserProfileMapper } from "../Mapper/UserProfileModel-UserProfile";

export class UserProfileRepository implements IUserProfileRepository {
  async GetByUserId(userId: string) {
    const x = await UserProfileModel.findOne({ UserId: userId });

    if (!x) {
      return null;
    }

    const z = UserProfileModelToUserProfileMapper(x);

    return new UserProfile(z);
  }

  async Update(userId: string, userProfile: UserProfile) {
    await UserProfileModel.updateOne({ UserId: userId }, userProfile);
  }

  async UserIdExists(userId: string) {
    const userProfile = await UserProfileModel.findOne({ UserId: userId });

    return !!userProfile;
  }

  async Add(userProfile: UserProfile) {
    const user = new UserProfileModel(userProfile);

    await user.save();
  }
}
