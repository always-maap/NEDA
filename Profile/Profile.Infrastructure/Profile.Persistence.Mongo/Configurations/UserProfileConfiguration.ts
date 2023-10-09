import { Education, Gender, LookingFor, UserProfile } from "Profile.Domain";
import { Schema, model } from "mongoose";

const userProfileSchema = new Schema({
  UserId: { type: String, required: true },
  FirstName: { type: String },
  LastName: { type: String },
  Phone: { type: String },
  Picture: { type: String },
  Gender: { type: String, enum: Object.values(Gender), required: true },
  Location: {
    Country: { type: String },
    State: { type: String },
    City: { type: String },
  },
  Age: { type: String },
  LookingFor: { type: String, enum: Object.values(LookingFor) },
  Bio: { type: String },
  Education: { type: String, enum: Object.values(Education) },
  Pictures: { type: [String] },
});

export const UserProfileModel = model<UserProfile>("User", userProfileSchema);
