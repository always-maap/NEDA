import { CreateUserOptions } from "Profile.Domain/UserProfile/CreateUserOptions";

export function UserProfileModelToUserProfileMapper(
  userProfileModel: any
): CreateUserOptions {
  return {
    age: userProfileModel.Age,
    bio: userProfileModel.Bio,
    education: userProfileModel.Education,
    firstName: userProfileModel.FirstName,
    gender: userProfileModel.Gender,
    lastName: userProfileModel.LastName,
    location: userProfileModel.Location,
    lookingFor: userProfileModel.LookingFor,
    phone: userProfileModel.Phone,
    picture: userProfileModel.Picture,
    pictures: userProfileModel.Pictures,
    userId: userProfileModel.UserId,
  };
}
