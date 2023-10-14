import type { Request, Response } from "express";

import { ISignInService, ISignUpService, IVerifyCodeService } from "IAM.Application";
import { SignInRequest, SignUpRequest, VerifyCodeRequest } from "IAM.Contracts";
import { SignUpRequestToSignUpParam } from "../Mapper/SignUpRequest-SignUpParam";
import { SignInMapper } from "../Mapper/SignInMapper";
import { VerifyCodeMapper } from "../Mapper/VerifyCodeMapper";
import { AuthenticationResultToAuthenticationResponse } from "../Mapper/AuthenticationResult-AuthenticationResponse";

export class AuthController {
  private readonly _signUpService: ISignUpService;
  private readonly _signInService: ISignInService;
  private readonly _verifyService: IVerifyCodeService;

  constructor(signUpService: ISignUpService, signInService: ISignInService, verifyCodeService: IVerifyCodeService) {
    this._signUpService = signUpService;
    this._signInService = signInService;
    this._verifyService = verifyCodeService;
  }

  public SignUp = async (req: Request, res: Response) => {
    const body: SignUpRequest = req.body;
    const mappedParam = SignUpRequestToSignUpParam(body);

    const authenticationResult = await this._signUpService.Handle(mappedParam);

    const resp = AuthenticationResultToAuthenticationResponse(authenticationResult);
    res.status(201).send(resp);
  };

  public SignIn = async (req: Request, res: Response) => {
    const body: SignInRequest = req.body;
    const mappedParam = SignInMapper(body);
    const x = await this._signInService.Handle(mappedParam);
    res.send("nice");
  };

  public VerifyCode = async (req: Request, res: Response) => {
    const body: VerifyCodeRequest = req.body;
    const mappedParam = VerifyCodeMapper(body);
    const x = await this._verifyService.Handle(mappedParam);
    res.send(x);
  };
}
