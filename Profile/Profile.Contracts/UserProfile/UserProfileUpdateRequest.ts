import { z } from "zod";

export const UserProfileUpdateSchema = z.object({
  location: z.object({
    country: z.string(),
    state: z.string(),
    city: z.string(),
  }),
  age: z.string(),
  bio: z.string(),
  lookingFor: z.string(),
  education: z.string(),
});

export type UserProfileUpdateRequest = z.infer<typeof UserProfileUpdateSchema>;
