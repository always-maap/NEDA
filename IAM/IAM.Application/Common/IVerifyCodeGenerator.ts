import { User } from "IAM.Domain";

export interface IVerifyCodeGenerator {
  GenerateCode(): number;
}
