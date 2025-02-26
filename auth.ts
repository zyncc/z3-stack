import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import db from "./lib/db";
// import { genUUID } from "./lib/uuid-generator";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    // generateId: () => genUUID(),
    generateId: false,
  },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 31, // 31 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies(), admin()],
});

export type Session = typeof auth.$Infer.Session;
