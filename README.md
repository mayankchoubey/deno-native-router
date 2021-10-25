# deno-native-router
A zero dependency simple native router in Deno. Only router, nothing else.

# Usage
Check [Examples](./example.ts).

## Create router
To create router, import the Router class:
```ts
import { Router } from "./mod.ts";
const router=new Router();
```
## Add routes
The routes can be added by calling any of the following functions: 
- ```router.get``` 
- ```router.post``` 
- ```router.put```
- ```router.patch```
- ```router.options```
- ```router.head``` 
- ```router.trace```

Each of these function expects two inputs:
- Path name to route
path name could contain variables like /api/rest/something/:someId/somethingelse/:someElseId)

- Callback handler (The async handler must take two inputs: Request & Params and must return a Response object)
```ts
router.add('/something/:someId/somethingelse/:someElseId', async (req:Request, params:Record<string, string>) => new Response());
```


# A sample app
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
