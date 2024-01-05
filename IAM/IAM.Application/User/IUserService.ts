import { UserUpdateParam } from "./UserUpdateParam";

export interface IUserService {
  Update(param: UserUpdateParam): Promise<void>;
}
