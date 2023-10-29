import { Entity } from "@neda/framework";

import { UserCreatedEvent } from "./Events";

export class User extends Entity {
  Id: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Gender: string;
  Avatar: string;
  CreatedAt: Date;
  UpdatedAt: Date;

  private constructor(
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

  public static Create(id: string, firstName: string, lastName: string, phone: string, gender: string, avatar: string) {
    const user = new User(id, firstName, lastName, phone, gender, avatar, new Date(), new Date());

    user.AddDomainEvent(new UserCreatedEvent(user));

    return user;
  }
}
