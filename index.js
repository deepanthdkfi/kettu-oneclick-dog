import { definePlugin } from "@kettu/plugin";

export default definePlugin({
  name: "OneClickDog",
  description: "Send a random dog image with one click",
  authors: [{ name: "deepanthdkfi" }],
  version: "1.0.0",

  commands: [
    {
      name: "dog",
      description: "Send a random dog image",
      execute: async (ctx) => {
        try {
          const res = await fetch("https://dog.ceo/api/breeds/image/random");
          const data = await res.json();

          await ctx.sendMessage({
            content: data.message
          });
        } catch (e) {
          await ctx.sendMessage({
