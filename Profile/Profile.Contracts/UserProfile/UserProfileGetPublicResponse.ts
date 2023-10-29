import { z } from "zod";

export const UserProfileGetPublicSchema = z.object({ userId: z.string() });

export type UserProfileGetPublicRequest = z.infer<typeof UserProfileGetPublicSchema>;
