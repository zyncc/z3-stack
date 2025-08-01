import z from "zod";
import {
  accountSchema,
  sessionSchema,
  userSchema,
  verificationSchema,
} from "./zod-schemas";

export type User = z.infer<typeof userSchema>;
export type Session = z.infer<typeof sessionSchema>;
export type Account = z.infer<typeof accountSchema>;
export type Verification = z.infer<typeof verificationSchema>;
