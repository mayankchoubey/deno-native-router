# Deno native router
A zero dependency simple native router in Deno. Only router, nothing else.

# Basic usage

## Create router

To create router, import the Router class:

```ts
import { Router } from "https://deno.land/x/nativerouter/mod.ts";
const router=new Router();
```

## Add routes
The routes can be added by calling the following functions: 
- ```router.get()``` 
- ```router.post()``` 
- ```router.put()```
- ```router.patch()```
- ```router.options()```
- ```router.head()``` 
- ```router.trace()```

Each of these function expects two inputs:
- Path name to route
  - path name could contain variables like /api/rest/something/:someId/somethingelse/:someElseId)

- Callback handler
  - The async handler must take two inputs: Request & Params and must return a Response object
```ts
router.add(
  '/something/:someId/somethingelse/:someElseId', 
  async (req:Request, params:Record<string, string>) => new Response()
);
```

## Route request
Any incoming request, represented by the ```Request``` object, can be routed using ```router.route()``` function. The only input is the ```Request``` object. The router function would look for handlers. If found, the request would be forwarded over to the handler. If not found, a 404 response would be sent. The expected output from the handler is a ```Response``` object.

```ts
await router.route(request);
```

# A sample app
```ts
import { Router } from "https://deno.land/x/nativerouter/mod.ts";
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
# Usage
Check [Examples](./example.ts).
