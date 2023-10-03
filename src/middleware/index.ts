import { defineMiddleware, sequence } from "astro:middleware";

export const handlePaths = defineMiddleware((context, next) => {
  if (context.url.pathname === "/") {
    context.locals.user = "homie";
    return next();
  }

  if (context.url.pathname === "/about") {
    context.locals.user = "abooter";
    context.locals.welcomeTitle = () => {
      return "welcome " + context.locals.user + "!";
    };
    return next();
  }

  return next();
});

export const onRequest = sequence(handlePaths);
