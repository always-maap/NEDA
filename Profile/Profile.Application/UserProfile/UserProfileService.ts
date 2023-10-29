import { EnsureDomainIsNotNull } from "@neda/framework";

import { IUserProfileService } from "./IUserProfileService";
import { IUserProfileRepository } from "../Common/IUserProfileRepository";
import { UserProfile } from "Profile.Domain";
import { UserProfileCreateParam } from "./UserProfileCreateParam";
import { Gender } from "Profile.Domain/UserProfile/Gender";
import { UserProfileUpdateParam } from "./UserProfileUpdateParam";
import { UpdateUserProfileOptions } from "Profile.Domain";
import { UserProfileGetPublicParam } from "./UserProfileGetPublicParam";

export class UserProfileService implements IUserProfileService {
  private readonly _repository: IUserProfileRepository;

  constructor(repository: IUserProfileRepository) {
    this._repository = repository;
  }

  async HandleCreate(params: UserProfileCreateParam) {
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
      avatar: params.Avatar,
    });

    await this._repository.Add(profile);

    return profile;
  }

  async HandleUpdate(params: UserProfileUpdateParam) {
    const profile = await this._repository.GetByUserId("1");

    EnsureDomainIsNotNull(profile);

    const options: UpdateUserProfileOptions = {
      Age: params.Age,
      Bio: params.Bio,
      Education: params.Education,
      Location: params.Location,
      LookingFor: params.LookingFor,
    };

    profile.UpdateUserProfile(options);

    await this._repository.Update("1", profile);
  }

  async HandleGet() {
    const profile = await this._repository.GetByUserId("1");

    EnsureDomainIsNotNull(profile);

    return profile;
  }

  async HandleGetPublic(params: UserProfileGetPublicParam) {
    const profile = await this._repository.GetByUserId(params.UserId);

    EnsureDomainIsNotNull(profile);

    return profile;
  }
}
