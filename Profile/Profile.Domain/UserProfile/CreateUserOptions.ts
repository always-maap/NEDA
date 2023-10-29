import { Education } from "./Education";
import { Gender } from "./Gender";
import { Location } from "./Location";
import { LookingFor } from "./LookingFor";

export interface CreateUserOptions {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
  gender: Gender;
  location: Location | null;
  age: string | null;
  lookingFor: LookingFor;
  bio: string | null;
  education: Education | null;
  pictures: string[];
}
