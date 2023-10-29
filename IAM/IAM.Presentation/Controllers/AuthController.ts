import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { ISignInService, ISignUpService } from "IAM.Application";
import { SignInSchema, SignUpSchema, VerifyCodeSchema } from "IAM.Contracts";
import { SignUpRequestToSignUpParam } from "../Mapper/SignUpRequest-SignUpParam";
import { SignInMapper } from "../Mapper/SignInMapper";
import { VerifyCodeMapper } from "../Mapper/VerifyCodeMapper";
import { AuthenticationResultToAuthenticationResponse } from "../Mapper/AuthenticationResult-AuthenticationResponse";

export class AuthController {
  private readonly _signUpService: ISignUpService;
  private readonly _signInService: ISignInService;

  constructor(signUpService: ISignUpService, signInService: ISignInService) {
    this._signUpService = signUpService;
    this._signInService = signInService;
  }

  public SignUp = async (req: Request, res: Response) => {
    const body = SignUpSchema.parse(req.body);
    const mappedParam = SignUpRequestToSignUpParam(body);
    const x = await this._signUpService.Handle(mappedParam);
    res.send("nice");
  };

  public SignUpVerifyCode = async (req: Request, res: Response) => {
    const body = VerifyCodeSchema.parse(req.body);
    const mappedParam = VerifyCodeMapper(body);
    const resp = await this._signUpService.HandleVerifyCode(mappedParam);
    res.status(StatusCodes.CREATED).send(resp);
  };

  public SignIn = async (req: Request, res: Response) => {
    const body = SignInSchema.parse(req.body);
    const mappedParam = SignInMapper(body);
    const x = await this._signInService.Handle(mappedParam);
    res.send("nice");
  };

  public SignInVerifyCode = async (req: Request, res: Response) => {
    const body = VerifyCodeSchema.parse(req.body);
    const mappedParam = VerifyCodeMapper(body);
    const x = await this._signInService.HandleVerifyCode(mappedParam);
    res.send(x);
  };
}
