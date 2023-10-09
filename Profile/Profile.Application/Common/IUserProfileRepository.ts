import { UserProfile } from "Profile.Domain/UserProfile/UserProfile";

export interface IUserProfileRepository {
  UserIdExists(userId: string): Promise<boolean>;
  Add(userProfile: UserProfile): Promise<void>;
}
