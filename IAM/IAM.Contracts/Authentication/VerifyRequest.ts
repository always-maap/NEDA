import { z } from "zod";

export const VerifySchema = z.object({ phone: z.string(), code: z.number() });

export type VerifyRequest = z.infer<typeof VerifySchema>;
