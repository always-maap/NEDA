import { UserProfile } from "Profile.Domain/UserProfile/UserProfile";

export interface IUserProfileRepository {
  UserIdExists(userId: string): Promise<boolean>;
  GetByUserId(userId: string): Promise<UserProfile | null>;
  Add(userProfile: UserProfile): Promise<void>;
  Update(userId: string, userProfile: UserProfile): Promise<void>;
}
