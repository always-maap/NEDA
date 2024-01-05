import * as uuid from "uuid";
import jwt from "jsonwebtoken";

import { User } from "IAM.Domain";
import { IJwtTokenGenerator } from "IAM.Application";

const jwtSettings = {
  secret: process.env.secret!,
  issuer: process.env.issuer!,
  audience: process.env.audience!,
  expiryMinutes: +process.env.expiryMinutes!,
};

export class JWTTokenGenerator implements IJwtTokenGenerator {
  GenerateToken(user: User) {
    const claims = {
      sub: `${user.FirstName} ${user.LastName}`,
      user: user.Phone,
      jti: uuid.v4(),
    };

    const token = jwt.sign(claims, jwtSettings.secret, {
      issuer: jwtSettings.issuer,
      audience: jwtSettings.audience,
      expiresIn: jwtSettings.expiryMinutes * 60, // Convert minutes to seconds
    });

    return token;
  }
}
