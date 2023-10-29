import { AuthenticationResponse } from "IAM.Contracts";
import { AuthenticationResult } from "IAM.Application/Authentication/AuthenticationResult";

export function AuthenticationResultToAuthenticationResponse(res: AuthenticationResult): AuthenticationResponse {
  return {
    id: res.User.Id,
    firstName: res.User.FirstName,
    lastName: res.User.LastName,
    createdAt: res.User.CreatedAt.toISOString(),
    updatedAt: res.User.UpdatedAt.toISOString(),
    gender: res.User.Gender,
    phone: res.User.Phone,
    avatar: res.User.Avatar,
    token: res.Token,
  };
}
