import { IUserProfileRepository } from "Profile.Application";
import { UserProfile } from "Profile.Domain";
import { UserProfileModel } from "../Configurations/UserProfileConfiguration";

export class UserProfileRepository implements IUserProfileRepository {
  async GetByUserId(userId: string) {
    return await UserProfileModel.findOne({ UserId: userId });
  }

  async Update(userId: string, userProfile: UserProfile) {
    await UserProfileModel.updateOne({ UserId: userId }, userProfile);
    throw new Error("Method not implemented.");
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
