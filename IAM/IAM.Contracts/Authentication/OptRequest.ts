import { z } from "zod";

export const OtpSchema = z.object({ phone: z.string() });

export type OtpRequest = z.infer<typeof OtpSchema>;
