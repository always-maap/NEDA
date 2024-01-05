import { IUserRepository, UserUpdateParam } from "IAM.Application";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
  private readonly _userRepository: IUserRepository;
  private readonly _currentUser: ICurrentUser;

  constructor(userRepository: IUserRepository, currentUser: ICurrentUser) {
    this._userRepository = userRepository;
    this._currentUser = currentUser;
  }

  async Update(param: UserUpdateParam) {
    const currentUserPhone = this._currentUser.getPhone();
    const existingUser = await this._userRepository.GetUserByPhone(currentUserPhone);

    if (!existingUser) {
      throw new Error("user not found");
    }

    existingUser.FirstName = param.FirstName;
    existingUser.LastName = param.LastName;

    await this._userRepository.Update(existingUser);
  }
}
