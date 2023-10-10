import { UserProfile } from "Profile.Domain";
import { UserProfileCreateParam } from "./UserProfileCreateParam";
import { UserProfileUpdateParam } from "./UserProfileUpdateParam";

export interface IUserProfileService {
  HandleCreate(params: UserProfileCreateParam): Promise<UserProfile>;
  HandleUpdate(params: UserProfileUpdateParam): void;
}
