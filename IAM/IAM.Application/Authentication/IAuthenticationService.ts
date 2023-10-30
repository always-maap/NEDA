import { AuthenticationResult } from "./AuthenticationResult";
import { VerifyParam } from "./VerifyParam";
import { AuthenticationParam } from "./AuthenticationParam";

export interface IAuthenticationService {
  Handle(params: AuthenticationParam): Promise<void>;
  HandleVerifyCode(params: VerifyParam): Promise<AuthenticationResult>;
}
