import { UserProfileUpdateParam } from "Profile.Application";
import { UpdateUserProfileRequest } from "Profile.Contracts";

export function UserProfileUpdateRequestToUserProfileUpdateParam(
  req: UpdateUserProfileRequest
): UserProfileUpdateParam {
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
