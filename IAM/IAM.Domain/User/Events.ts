import { DomainEvent } from "@neda/framework";

import { User } from "./User";

export class UserCreatedEvent extends DomainEvent {
  Id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Gender: string;
  Avatar: string;
  CreatedAt: Date;
  UpdatedAt: Date;

  constructor(user: User) {
    super();
    this.Id = user.Id;
    this.FirstName = user.FirstName;
    this.LastName = user.LastName;
    this.Phone = user.Phone;
    this.Gender = user.Gender;
    this.Avatar = user.Avatar;
    this.CreatedAt = user.CreatedAt;
    this.UpdatedAt = user.UpdatedAt;
  }
}
