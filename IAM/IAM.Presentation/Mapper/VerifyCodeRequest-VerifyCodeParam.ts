import { VerifyParam } from "IAM.Application";
import { VerifyRequest } from "IAM.Contracts";

export function VerifyCodeRequestToVerifyCodeParam(req: VerifyRequest): VerifyParam {
  return {
    Phone: req.phone,
    Code: req.code,
  };
}
