import { AuthenticationResult } from "../AuthenticationResult";
import { VerifyCodeParam } from "../VerifyCodeParam";
import { SignUpParam } from "./SignUpParam";

export interface ISignUpService {
  Handle(params: SignUpParam): Promise<void>;
  HandleVerifyCode(params: VerifyCodeParam): Promise<AuthenticationResult>;
}
