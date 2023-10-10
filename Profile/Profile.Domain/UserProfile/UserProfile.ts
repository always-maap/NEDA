import { Entity } from "@neda/framework";

import { Education } from "./Education";
import { Gender } from "./Gender";
import { Location } from "./Location";
import { LookingFor } from "./LookingFor";
import { CreateUserOptions } from "./CreateUserOptions";
import { CreateUserFactoryOptions } from "./CreateUserFactoryOptions";
import { UpdateUserProfileOptions } from "./UpdateUserProfileOptions";

export class UserProfile extends Entity {
  UserId: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  Picture: string;
  Gender: Gender;
  Location: Location | null;
  Age: string | null;
  LookingFor: LookingFor;
  Bio: string | null;
  Education: Education | null;
  Pictures: string[];

  private constructor(options: CreateUserOptions) {
    super();
    this.UserId = options.userId;
    this.FirstName = options.firstName;
    this.LastName = options.lastName;
    this.Phone = options.phone;
    this.Picture = options.picture;
    this.Location = options.location;
    this.Gender = options.gender;
    this.Age = options.age;
    this.LookingFor = options.lookingFor;
    this.Bio = options.bio;
    this.Education = options.education;
    this.Pictures = options.pictures;
  }

  public static Create(options: CreateUserFactoryOptions) {
    return new UserProfile({
      ...options,
      location: null,
      age: null,
      lookingFor: LookingFor.NotSure,
      pictures: [],
      bio: null,
      education: Education.PreferNotToSay,
    });
  }

  public UpdateUserProfile(options: UpdateUserProfileOptions) {
    if (options.Age) {
      this.Age = options.Age;
    }
    if (options.Bio) {
      this.Bio = options.Bio;
    }
    if (options.Education) {
      this.Education = options.Education as Education;
    }
    if (options.Location) {
      this.Location = options.Location;
    }
    if (options.LookingFor) {
      this.LookingFor = options.LookingFor as LookingFor;
    }
  }
}
