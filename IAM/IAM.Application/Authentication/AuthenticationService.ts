import { IOutboxRepository, ISmsSender, IUnitOfWork } from "@neda/framework";

import { AuthenticationParam } from "./AuthenticationParam";
import { IUserRepository } from "../Common/IUserRepository";
import { IVerifyCodeCacheProvider } from "../Common/IVerifyCodeCacheProvider";
import { IVerifyCodeGenerator } from "../Common/IVerifyCodeGenerator";
import { AuthenticationResult } from "./AuthenticationResult";
import { VerifyParam } from "./VerifyParam";
import { IJwtTokenGenerator } from "IAM.Application";
import { IAuthenticationService } from "./IAuthenticationService";
import { IVerifyStrategy } from "./IVerifyStrategy";
import { VerifySignInStrategy } from "./VerifySignInStrategy";
import { VerifySignUpStrategy } from "./VerifySignUpStrategy";

export class AuthenticationService implements IAuthenticationService {
  private readonly _userRepository: IUserRepository;
  private readonly _verifyCodeCache: IVerifyCodeCacheProvider;
  private readonly _smsSender: ISmsSender;
  private readonly _verifyCodeGenerator: IVerifyCodeGenerator;
  private readonly _jwtTokenGenerator: IJwtTokenGenerator;
  private readonly _unitOfWork: IUnitOfWork;
  private readonly _outboxRepository: IOutboxRepository;

  constructor(
    userRepository: IUserRepository,
    verifyCodeCache: IVerifyCodeCacheProvider,
    smsSender: ISmsSender,
    verifyCodeGenerator: IVerifyCodeGenerator,
    jwtTokenGenerator: IJwtTokenGenerator,
    unitOfWork: IUnitOfWork,
    outboxRepository: IOutboxRepository
  ) {
    this._userRepository = userRepository;
    this._verifyCodeCache = verifyCodeCache;
    this._smsSender = smsSender;
    this._verifyCodeGenerator = verifyCodeGenerator;
    this._jwtTokenGenerator = jwtTokenGenerator;
    this._unitOfWork = unitOfWork;
    this._outboxRepository = outboxRepository;
  }

  public async Handle(params: AuthenticationParam) {
    const x = await this._userRepository.GetUserByPhone(params.Phone);
    const verifyCode = this._verifyCodeGenerator.GenerateCode();
    this._verifyCodeCache.set(params.Phone, verifyCode);
    this._smsSender.SendSms({
      template: "verify",
      phoneNumber: params.Phone,
      message: verifyCode.toString(),
    });
  }

  public async HandleVerifyCode(params: VerifyParam) {
    const verifyCode = await this._verifyCodeCache.get(params.Phone);
    if (verifyCode !== params.Code) {
      throw new Error("login first");
    }

    const userExists = await this._userRepository.GetUserByPhone(params.Phone);

    const verifySignInStrategy = new VerifySignInStrategy(this._userRepository);
    const verifySignUpStrategy = new VerifySignUpStrategy(
      this._userRepository,
      this._unitOfWork,
      this._outboxRepository
    );

    const verifyCodeStrategy: IVerifyStrategy = userExists ? verifySignInStrategy : verifySignUpStrategy;

    const user = await verifyCodeStrategy.Apply(params.Phone);

    const token = this._jwtTokenGenerator.GenerateToken(user);

    const authenticationResult: AuthenticationResult = {
      Token: token,
      User: user,
    };
    return authenticationResult;
  }
}
