import { Gender } from "./Gender";

export interface CreateUserFactoryOptions {
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
  gender: Gender;
}
