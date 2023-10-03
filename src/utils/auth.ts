import type { AstroCookies } from "astro";

export const hasJWT = (cookie: AstroCookies) => {
  return cookie.has("jwt");
};
