import type { Request, Response } from "express";

import { IUserProfileService } from "Profile.Application";
import { UserProfileUpdateSchema } from "../Validations/UserProfileUpdateValidations";
import { UserProfileUpdateMapper } from "../Mapper/UserProfileUpdateMapper";

export class UserProfileController {
  private readonly _userProfileService: IUserProfileService;

  constructor(userProfileService: IUserProfileService) {
    this._userProfileService = userProfileService;
  }

  public Update(req: Request, res: Response) {
    const body = UserProfileUpdateSchema.parse(req.body);
    const params = UserProfileUpdateMapper(body);
    this._userProfileService.HandleUpdate(params);
  }
}
