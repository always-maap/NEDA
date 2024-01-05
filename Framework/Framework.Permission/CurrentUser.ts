import { Request } from "express";
import { ICurrentUser } from "./ICurrentUser";

export class CurrentUser implements ICurrentUser {
  private readonly _request: Request;

  constructor(request: Request) {
    this._request = request;
  }

  getPhone() {
    const phone = this._request.user.phone;

    return phone;
  }
}
