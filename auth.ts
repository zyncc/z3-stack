import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { genUUID } from "./lib/uuid-generator";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    generateId: () => genUUID(),
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
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies(), admin()],
});
