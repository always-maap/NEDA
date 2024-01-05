import { z } from "zod";

export const UserUpdateRequestSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  avatar: z.string(),
});

export type UserUpdateRequest = z.infer<typeof UserUpdateRequestSchema>;
