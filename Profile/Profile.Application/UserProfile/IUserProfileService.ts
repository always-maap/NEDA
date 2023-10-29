import { UserProfile } from "Profile.Domain";
import { UserProfileCreateParam } from "./UserProfileCreateParam";
import { UserProfileUpdateParam } from "./UserProfileUpdateParam";
import { UserProfileGetPublicParam } from "./UserProfileGetPublicParam";

export interface IUserProfileService {
  HandleCreate(params: UserProfileCreateParam): Promise<UserProfile>;
  HandleUpdate(params: UserProfileUpdateParam): void;
  HandleGet(): Promise<UserProfile>;
  HandleGetPublic(params: UserProfileGetPublicParam): Promise<UserProfile>;
}
