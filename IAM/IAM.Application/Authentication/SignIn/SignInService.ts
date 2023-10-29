import { ISmsSender } from "@neda/framework";

import { SignInParam } from "./SignInParam";
import { ISignInService } from "./ISignInService";
import { IUserRepository } from "../../Common/IUserRepository";
import { IVerifyCodeCacheProvider } from "../../Common/IVerifyCodeCacheProvider";
import { IVerifyCodeGenerator } from "../../Common/IVerifyCodeGenerator";
import { AuthenticationResult } from "../AuthenticationResult";
import { VerifyCodeParam } from "../VerifyCodeParam";
import { IJwtTokenGenerator } from "IAM.Application";

export class SignInService implements ISignInService {
  private readonly _userRepository: IUserRepository;
  private readonly _verifyCodeCache: IVerifyCodeCacheProvider;
  private readonly _smsSender: ISmsSender;
  private readonly _verifyCodeGenerator: IVerifyCodeGenerator;
  private readonly _jwtTokenGenerator: IJwtTokenGenerator;

  constructor(
    userRepository: IUserRepository,
    verifyCodeCache: IVerifyCodeCacheProvider,
    smsSender: ISmsSender,
    verifyCodeGenerator: IVerifyCodeGenerator,
    jwtTokenGenerator: IJwtTokenGenerator
  ) {
    this._userRepository = userRepository;
    this._verifyCodeCache = verifyCodeCache;
    this._smsSender = smsSender;
    this._verifyCodeGenerator = verifyCodeGenerator;
    this._jwtTokenGenerator = jwtTokenGenerator;
  }

  public async Handle(params: SignInParam) {
    const x = await this._userRepository.GetUserByPhone(params.Phone);
    const verifyCode = this._verifyCodeGenerator.GenerateCode();
    this._verifyCodeCache.set(params.Phone, verifyCode);
    this._smsSender.SendSms({
      template: "verify",
      phoneNumber: params.Phone,
      message: verifyCode.toString(),
    });
  }

  public async HandleVerifyCode(params: VerifyCodeParam) {
    const verifyCode = await this._verifyCodeCache.get(params.Phone);
    if (verifyCode !== params.Code) {
      throw new Error("login first");
    }

    const user = await this._userRepository.GetUserByPhone(params.Phone);
    const token = this._jwtTokenGenerator.GenerateToken(user);

    const authenticationResult: AuthenticationResult = {
      Token: token,
      User: user,
    };
    return authenticationResult;
  }
}
