import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // intercept response data from a request
  // optionally, transform the response by modifying `locals`
  console.log(context.url.pathname);
  if (context.url.pathname === "/") {
    console.log("here we are at the root");
    context.locals.user = "homie";
    return next();
  }
  if (context.url.pathname === "/about") {
    console.log("here we are at the about");
    context.locals.user = "aboutie";
    return next();
  }

  return next();
});
