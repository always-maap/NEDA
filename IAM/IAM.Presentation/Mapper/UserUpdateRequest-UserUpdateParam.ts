import { UserUpdateParam } from "IAM.Application";
import { UserUpdateRequest } from "IAM.Contracts";

export function UserUpdateRequestToUserUpdateParam(req: UserUpdateRequest): UserUpdateParam {
  return {
    FirstName: req.firstName,
    LastName: req.lastName,
    Gender: req.gender,
    Avatar: req.avatar,
  };
}
