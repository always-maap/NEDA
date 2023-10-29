import { AuthenticationResult } from "../AuthenticationResult";
import { VerifyCodeParam } from "../VerifyCodeParam";
import { SignInParam } from "./SignInParam";

export interface ISignInService {
  Handle(params: SignInParam): Promise<void>;
  HandleVerifyCode(params: VerifyCodeParam): Promise<AuthenticationResult>;
}
