import type { CreateContext } from "astro/middleware";

export const GET = (context: CreateContext) => {
  console.log(context.request.mode);
  return new Response(
    JSON.stringify({
      message: "This was a GET!",
    })
  );
};

export const POST = (context: CreateContext) => {
  return new Response(
    JSON.stringify({
      message: "This was a POST!",
    })
  );
};

export const DELETE = (context: CreateContext) => {
  return new Response(
    JSON.stringify({
      message: "This was a DELETE!",
    })
  );
};

export const ALL = (context: CreateContext) => {
  return new Response(
    JSON.stringify({
      message: `This was a ${context.request.method}!`,
    })
  );
};
