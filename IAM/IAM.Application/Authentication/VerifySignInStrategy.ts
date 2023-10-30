import { User } from "IAM.Domain";
import { IVerifyStrategy } from "./IVerifyStrategy";
import { IUserRepository } from "IAM.Application";

export class VerifySignInStrategy implements IVerifyStrategy {
  private readonly _userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this._userRepository = userRepository;
  }

  async Apply(phone: string) {
    return this._userRepository.GetUserByPhone(phone) as Promise<User>;
  }
}
