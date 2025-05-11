// import { TRPCError } from "@trpc/server";
// import { middleware } from "../init";

// export const admin = middleware(async ({ ctx, next }) => {
//   const session = ctx.session;
//   if (session?.user.role !== "admin") {
//     throw new TRPCError({
//       code: "FORBIDDEN",
//       message: "You are forbidden from performing this action",
//     });
//   }
//   return next({ ctx });
// });
