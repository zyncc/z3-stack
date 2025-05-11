import { createContext } from "@/trpc/context";
import { appRouter } from "@/trpc/init";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { NextRequest } from "next/server";

const handler = (req: NextRequest) => {
  return fetchRequestHandler({
    router: appRouter,
    endpoint: "/api/trpc",
    req,
    createContext: () => createContext(req),
    onError: ({ error }) => {
      console.error(error);
    },
  });
};

export { handler as GET, handler as POST };
