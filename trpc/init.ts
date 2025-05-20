import { initTRPC, TRPCError } from "@trpc/server";
import db from "@/lib/db";
import { getServerSession } from "@/lib/get-server-session";
import { cache } from "react";

export const createTRPCContext = cache(async () => {
  const session = await getServerSession();
  return {
    db,
    session,
  };
});

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;

export const t = initTRPC.context<Context>().create();
export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;

export const auth = t.middleware(async ({ ctx, next }) => {
  const session = ctx.session;
  if (!session?.user) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authorized to perform this action",
    });
  }
  return next({ ctx });
});

export const admin = t.middleware(async ({ ctx, next }) => {
  const session = ctx.session;
  if (session?.user.role !== "admin") {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You are forbidden from performing this action",
    });
  }
  return next({ ctx });
});

export const publicProcedure = t.procedure;
export const authProcedure = t.procedure.use(auth);
export const adminProcedure = t.procedure.use(admin);

export const appRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return {
      response: "Hello World",
    };
  }),
});

export type AppRouter = typeof appRouter;
