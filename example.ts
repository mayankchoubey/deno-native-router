import { Router } from "https://deno.land/x/nativerouter/mod.ts";
import { listenAndServe } from "https://deno.land/std/http/mod.ts";

const router = new Router();
router.get("/", async (r: Request, p: Record<string, string>) => {
  return new Response("Hello from / handler");
});
router.get(
  "/users/:userId",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from /users/:userId handler, params=" +
        Object.entries(p).join(", "),
    );
  },
);
router.put(
  "/users",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from PUT /users handler",
    );
  },
);
router.put(
  "/users/:userId/attachments",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from PUT /users/:userId/attachments handler, params=" +
        Object.entries(p).join(", "),
    );
  },
);
router.get(
  "/users/:userId/attachments/:attachmentId",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from /users/:userId handler, params=" +
        Object.entries(p).join(", "),
    );
  },
);
router.post(
  "/users",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from POST /users handler",
    );
  },
);
router.patch(
  "/users/:userId",
  async (r: Request, p: Record<string, string>) => {
    return new Response(
      "Hello from POST /users handler",
    );
  },
);

listenAndServe(":3000", async (r) => await router.route(r));
