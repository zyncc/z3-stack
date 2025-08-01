import { env } from "@/env/server";
import type { Config } from "drizzle-kit";

export default {
  out: "./src/db/migrations",
  schema: "./src/db/schema/index.ts",
  breakpoints: true,
  verbose: true,
  strict: true,
  dialect: "postgresql",
  casing: "snake_case",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
} satisfies Config;
