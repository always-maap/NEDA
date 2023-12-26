import type { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { IAuthenticationService } from "IAM.Application";
import { OtpSchema, VerifySchema } from "IAM.Contracts";
import { OtpRequestToAuthenticationParam } from "../Mapper/OtpRequest-AuthenticationParam";
import { VerifyCodeRequestToVerifyCodeParam } from "../Mapper/VerifyCodeRequest-VerifyCodeParam";
import { AuthenticationResultToAuthenticationResponse } from "../Mapper/AuthenticationResult-AuthenticationResponse";

export class AuthController {
  private readonly _authenticationService: IAuthenticationService;

  constructor(authenticationService: IAuthenticationService) {
    this._authenticationService = authenticationService;
  }

  public Otp = async (req: Request, res: Response) => {
    const OtpBody = OtpSchema.parse(req.body);
    const mappedParam = OtpRequestToAuthenticationParam(OtpBody);
    const x = await this._authenticationService.Handle(mappedParam);
    res.json({ message: "nice" }).send();
  };

  public Verify = async (req: Request, res: Response) => {
    const verifyBody = VerifySchema.parse(req.body);
    const mappedParam = VerifyCodeRequestToVerifyCodeParam(verifyBody);
    const x = await this._authenticationService.HandleVerifyCode(mappedParam);
    const resp = AuthenticationResultToAuthenticationResponse(x);

    res.status(StatusCodes.OK).send(resp);
  };
}
