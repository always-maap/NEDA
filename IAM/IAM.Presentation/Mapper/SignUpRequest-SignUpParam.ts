import { SignUpParam } from "IAM.Application";
import { SignUpRequest } from "IAM.Contracts";

export function SignUpRequestToSignUpParam(req: SignUpRequest): SignUpParam {
  return {
    FirstName: req.firstName,
    LastName: req.lastName,
    Phone: req.phone,
    Gender: req.gender,
    Picture: req.picture,
  };
}