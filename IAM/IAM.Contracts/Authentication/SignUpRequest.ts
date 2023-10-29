import { z } from "zod";

export const SignUpSchema = z.object({ phone: z.string() });

export type SignUpRequest = z.infer<typeof SignUpSchema>;
