// import { TRPCError } from "@trpc/server";
// import { middleware } from "../init";

// export const authenticated = middleware(async ({ ctx, next }) => {
//   const session = ctx.session;
//   if (!session?.user) {
//     throw new TRPCError({
//       code: "UNAUTHORIZED",
//       message: "You are not authorized to perform this action",
//     });
//   }
//   return next({ ctx });
// });
