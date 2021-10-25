# deno-native-router
A zero dependency simple native router in Deno. Only router, nothing else.

# Usage
Check [Examples](./example.ts).

## A sample app
```ts
import { Router } from "./mod.ts";
import { listenAndServe } from "https://deno.land/std/http/mod.ts";

const router = new Router();
router.get("/", async (r: Request, p: Record<string, string>) => {
  return new Response("Hello from / handler");
});
router.put(
  "/users/:userId/attachments",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from PUT /users/:userId/attachments handler, params=" +
        Object.entries(p).join(", "),
    );
  },
);
listenAndServe(":3000", async (r) => await router.route(r));
```
