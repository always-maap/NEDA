import { IOutboxRepository, IUnitOfWork } from "@neda/framework";

import { User } from "IAM.Domain";
import { IVerifyStrategy } from "./IVerifyStrategy";
import { IUserRepository } from "IAM.Application";

export class VerifySignUpStrategy implements IVerifyStrategy {
  private readonly _userRepository: IUserRepository;
  private readonly _unitOfWork: IUnitOfWork;
  private readonly _outboxRepository: IOutboxRepository;

  constructor(userRepository: IUserRepository, unitOfWork: IUnitOfWork, outboxRepository: IOutboxRepository) {
    this._userRepository = userRepository;
    this._unitOfWork = unitOfWork;
    this._outboxRepository = outboxRepository;
  }

  async Apply(phone: string) {
    await this._unitOfWork.Begin();

    const user = User.Create("", "", phone, "", "");

    try {
      await this._userRepository.Add(user);
      await this._outboxRepository.AddMany(user.GetDomainEvents());
      await this._unitOfWork.Commit();
    } catch (e) {
      console.log(e);
      await this._unitOfWork.Rollback();
    }

    return user;
  }
}
