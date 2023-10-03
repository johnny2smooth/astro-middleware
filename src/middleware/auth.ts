import { defineMiddleware, sequence } from "astro:middleware";

const authUser = defineMiddleware(async (context, next) => {
  return next();
  // if (context.url.pathname.split("/")[1] !== "dashboard") {
  //   console.log(context.url.pathname.split("/")[1]);
  //   console.log("safe route");
  //   return next();
  // }
  // if (context.cookies.has("jwt")) {
  //   console.log("he valid");
  //   return next();
  // } else {
  //   return new Response(null, {
  //     status: 200,
  //   });

  // }
});

const redirectUnauthorizedUser = defineMiddleware(async (context, next) => {
  return next();
});

export const auth = sequence(authUser, redirectUnauthorizedUser);
