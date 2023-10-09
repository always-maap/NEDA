import { IUserProfileService } from "./IUserProfileService";
import { IUserProfileRepository } from "../Common/IUserProfileRepository";
import { UserProfile } from "Profile.Domain";
import { UserCreateParam } from "./UserProfileCreateParam";
import { Gender } from "Profile.Domain/UserProfile/Gender";

export class UserProfileService implements IUserProfileService {
  private readonly _repository: IUserProfileRepository;

  constructor(repository: IUserProfileRepository) {
    this._repository = repository;
  }

  async HandleCreate(params: UserCreateParam) {
    const userExists = await this._repository.UserIdExists(params.UserId);
    if (userExists) {
      throw new Error("Method not implemented.");
    }

    const profile = UserProfile.Create({
      userId: params.UserId,
      firstName: params.FirstName,
      lastName: params.LastName,
      gender: Gender.Male,
      phone: params.Phone,
      picture: params.Picture,
    });

    await this._repository.Add(profile);
  }

  HandleUpdate(): void {
    throw new Error("Method not implemented.");
  }
}
