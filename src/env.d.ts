/// <reference types="astro/client" />
declare namespace App {
  interface Locals {
    user: string;
    welcomeTitle: () => string;
    orders: Map<string, object>;
  }
}
