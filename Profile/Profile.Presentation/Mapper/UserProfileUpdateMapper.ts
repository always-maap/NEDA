import { z } from "zod";

import { UserProfileUpdateParam } from "Profile.Application";
import { UserProfileUpdateSchema } from "../Validations/UserProfileUpdateValidations";

type x = z.infer<typeof UserProfileUpdateSchema>;

export function UserProfileUpdateMapper(req: x): UserProfileUpdateParam {
  return {
    Age: req.age,
    Bio: req.bio,
    Education: req.education,
    Location: {
      City: req.location.city,
      Country: req.location.country,
      State: req.location.state,
    },
    LookingFor: req.lookingFor,
  };
}
