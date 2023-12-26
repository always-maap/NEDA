import { Entity } from "@neda/framework";
import * as uuid from "uuid";

import { UserCreatedEvent } from "./events/UserCreatedEvent";
import { UserUpdatedEvent } from "./events/UserUpdatedEvent";
import { CreateUserOptions } from "./options/CreateUserOptions";
import { UpdateUserOptions } from "./options/UpdateUserOptions";

export class User extends Entity {
  Id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Gender: string;
  Avatar: string;
  CreatedAt: Date;
  UpdatedAt: Date;

  constructor(
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    gender: string,
    avatar: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    super();
    this.Id = id;
    this.FirstName = firstName;
    this.LastName = lastName;
    this.Phone = phone;
    this.Gender = gender;
    this.Avatar = avatar;
    this.CreatedAt = createdAt;
    this.UpdatedAt = updatedAt;
  }

  public static Create(options: CreateUserOptions) {
    const user = new User(
      uuid.v4(),
      options.firstName,
      options.lastName,
      options.phone,
      options.gender,
      options.avatar,
      new Date(),
      new Date()
    );

    return user;
  }

  public Update(options: UpdateUserOptions) {
    const profileCompleted = this.IsProfileComplete();

    this.FirstName = options.firstName;
    this.LastName = options.lastName;
    this.Gender = options.gender;
    this.Avatar = options.avatar;
    this.UpdatedAt = new Date();

    if (profileCompleted) {
      this.AddDomainEvent(new UserCreatedEvent(this));
    } else {
      this.AddDomainEvent(new UserUpdatedEvent(this));
    }

    return this;
  }

  private IsProfileComplete() {
    return this.FirstName && this.LastName && this.Gender && this.Avatar;
  }
}
