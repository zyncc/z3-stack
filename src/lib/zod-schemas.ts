import { account, session, user, verification } from "@/db/schema";
import { createSelectSchema } from "drizzle-zod";

export const userSchema = createSelectSchema(user);
export const sessionSchema = createSelectSchema(session);
export const accountSchema = createSelectSchema(account);
export const verificationSchema = createSelectSchema(verification);
