import { UserCreateParam } from "./UserProfileCreateParam";

export interface IUserProfileService {
  HandleCreate(params: UserCreateParam): void;
  HandleUpdate(): void;
}
