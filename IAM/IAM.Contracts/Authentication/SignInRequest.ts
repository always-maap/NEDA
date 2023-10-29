import { z } from "zod";

export const SignInSchema = z.object({ phone: z.string() });

export type SignInRequest = z.infer<typeof SignInSchema>;
