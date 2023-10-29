import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { IUserProfileService } from "Profile.Application";
import { UserProfileUpdateSchema, UserProfileGetPublicSchema } from "Profile.Contracts";
import { UserProfileUpdateRequestToUserProfileUpdateParam } from "../Mapper/UserProfileUpdateRequest-UserProfileUpdateParam";

export class UserProfileController {
  private readonly _userProfileService: IUserProfileService;

  constructor(userProfileService: IUserProfileService) {
    this._userProfileService = userProfileService;
  }

  public Update = async (req: Request, res: Response) => {
    const body = UserProfileUpdateSchema.parse(req.body);
    const params = UserProfileUpdateRequestToUserProfileUpdateParam(body);
    await this._userProfileService.HandleUpdate(params);
    res.send("ok");
  };

  public Get = async (req: Request, res: Response) => {
    const x = await this._userProfileService.HandleGet();

    res.status(StatusCodes.OK).send(x);
  };

  public GetPublic = async (req: Request, res: Response) => {
    const params = UserProfileGetPublicSchema.parse(req.params);
    const x = await this._userProfileService.HandleGetPublic(params.userId);

    res.status(StatusCodes.OK).send(x);
  };
}
