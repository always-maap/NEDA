import { Gender } from "./Gender";

export interface CreateUserFactoryOptions {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  picture: string;
  gender: Gender;
}
