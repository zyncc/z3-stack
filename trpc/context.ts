import db from "@/lib/db";
import { getServerSession } from "@/lib/get-server-session";
import { NextRequest } from "next/server";

export async function createContext(req: NextRequest) {
  const session = await getServerSession();
  return {
    req,
    db,
    session,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
