import { defineMiddleware, sequence } from "astro:middleware";

const validation = defineMiddleware(async (context, next) => {
  console.log("validation request");
  const response = await next();
  console.log("validation response");
  return response;
});

const auth = defineMiddleware(async (context, next) => {
  console.log("auth request");
  const response = await next();
  console.log("auth response");
  return response;
});

export const handlePaths = defineMiddleware((context, next) => {
  console.log("This is the next thing that happens");
  if (context.url.pathname === "/") {
    console.log("here we are at the root");
    context.locals.user = "homie";
    return next();
  }
  if (context.url.pathname === "/about") {
    context.locals.user = "aboutie";
    context.locals.welcomeTitle = () => {
      return "welcome " + context.locals.user + "!";
    };
    return next();
  }

  return next();
});

export const onRequest = sequence(validation, auth, handlePaths);
