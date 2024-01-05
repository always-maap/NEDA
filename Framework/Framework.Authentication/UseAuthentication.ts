import { NextFunction, Response, Request } from "express";
import jwt from "jsonwebtoken";

const jwtSettings = {
  secret: process.env.secret!,
  issuer: process.env.issuer!,
  audience: process.env.audience!,
  expiryMinutes: process.env.expiryMinutes!,
};

type RequestWithUser = Request & { user: any };

export function UseAuthentication(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];
  if (token !== undefined) {
    Object.assign(req, { user: null });
    next();
  }
  const t = token!.slice(7);
  const x = jwt.verify(t, jwtSettings.secret);
  (req as RequestWithUser).user = x;
  next();
}
