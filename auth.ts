import "server-only";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { ulid } from "ulid";
import db from "./lib/db";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    generateId: () => ulid(),
    // generateId: false,
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
    provider: "pg",
  }),
  socialProviders: {
    google: {
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies(), admin()],
});

export type Session = typeof auth.$Infer.Session;
