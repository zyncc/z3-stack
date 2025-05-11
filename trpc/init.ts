import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";

export const t = initTRPC.context<Context>().create();
const { router } = t;

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

export const appRouter = router({
  hello: publicProcedure.query(() => {
    return {
      response: "Hello World",
    };
  }),
});

export type AppRouter = typeof appRouter;
