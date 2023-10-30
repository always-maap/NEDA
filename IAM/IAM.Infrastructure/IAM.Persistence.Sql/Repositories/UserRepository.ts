import { ITransaction } from "@neda/framework";

import { IUserRepository } from "IAM.Application";
import { User } from "IAM.Domain";
import { UserModel } from "../Configurations/UserConfiguration";
import { UserMapper } from "../Mapper/UserMapper";

export class UserRepository implements IUserRepository {
  private readonly _transaction: ITransaction;

  constructor(transaction: ITransaction) {
    this._transaction = transaction;
  }

  async Add(user: User) {
    const mappedUser = UserMapper(user);

    await UserModel.create(mappedUser, {
      transaction: this._transaction.GetTransaction(),
    });
  }

  async GetUserByPhone(phone: string) {
    const user = await UserModel.findOne({ where: { Phone: phone } });

    if (!user) {
      return null;
    }

    const u = new User(
      user.Id,
      user.FirstName,
      user.LastName,
      user.Phone,
      user.Gender,
      user.Avatar,
      new Date(user.CreatedAt),
      new Date(user.UpdatedAt)
    );

    return u;
  }
}
