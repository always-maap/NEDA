import { AuthenticationParam } from "IAM.Application";
import { OtpRequest } from "IAM.Contracts";

export function OtpRequestToAuthenticationParam(req: OtpRequest): AuthenticationParam {
  return {
    Phone: req.phone,
  };
}
