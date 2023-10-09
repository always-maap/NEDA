import { IUserProfileService } from "Profile.Application";

export class UserCreatedConsumer {
  private readonly _userProfileService: IUserProfileService;

  constructor(userProfileService: IUserProfileService) {
    this._userProfileService = userProfileService;
  }

  async Consume() {
    const message = {
      UserId: "1",
      FirstName: "mohammad",
      LastName: "alipanah",
      Phone: "989197532677",
      Picture: "img",
      Gender: "male",
    };

    await this._userProfileService.HandleCreate(message);
  }
}
