import { z } from "zod";

export const VerifyCodeSchema = z.object({ phone: z.string(), code: z.string() });

export type VerifyCodeRequest = z.infer<typeof VerifyCodeSchema>;
