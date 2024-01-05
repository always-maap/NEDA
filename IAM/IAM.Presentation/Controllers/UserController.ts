import { UserUpdateRequestSchema } from "IAM.Contracts";
import { UserUpdateRequestToUserUpdateParam } from "../Mapper/UserUpdateRequest-UserUpdateParam";
import type { Request, Response } from "express";

export class UserController {
  public Get(req: Request, res: Response) {}

  public Update(req: Request, res: Response) {
    const updateUserBody = UserUpdateRequestSchema.parse(req.body);
    const mappedParam = UserUpdateRequestToUserUpdateParam(updateUserBody);
    // const x = await this._userService.Update(mappedParam);

    res.json({ message: "nice" }).send();
  }
}
