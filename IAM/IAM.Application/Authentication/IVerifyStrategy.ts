import { User } from "IAM.Domain";

export interface IVerifyStrategy {
  Apply(phone: string): Promise<User>;
}
