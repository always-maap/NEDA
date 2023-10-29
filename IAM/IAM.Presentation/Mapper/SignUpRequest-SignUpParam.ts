import { SignUpParam } from "IAM.Application";
import { SignUpRequest } from "IAM.Contracts";

export function SignUpRequestToSignUpParam(req: SignUpRequest): SignUpParam {
  return {
    Phone: req.phone,
  };
}
