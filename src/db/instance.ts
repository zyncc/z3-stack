import * as schema from "@/db/schema/index";
import { env } from "@/env/server";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const driver = postgres(env.DATABASE_URL);

export const db = drizzle({
  client: driver,
  schema: schema,
  casing: "snake_case",
  logger: {
    logQuery(query) {
      console.log(`Executing query: ${query}`);
    },
  },
});
