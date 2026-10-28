import { closeDb, initDB } from "./db/db.js";
import { routes } from "./routes/financeRoutes.js";

initDB()

const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "GET, POST, PUT, PATCH, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function withCors(response) {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(corsHeaders)) {
    headers.set(name, value);
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

const preflight = () => withCors(new Response(null, { status: 204 }));
const corsRoutes = Object.fromEntries(
  Object.entries(routes).map(([path, handlers]) => [path, {
    ...Object.fromEntries(
      Object.entries(handlers).map(([method, handler]) => [
        method,
        async (req) => withCors(await handler(req)),
      ]),
    ),
    OPTIONS: preflight,
  }]),
);

const server = Bun.serve( {
    routes: corsRoutes,
    fetch(req) {
    if (req.method === "OPTIONS") return preflight();
    return withCors(new Response("Not Found", { status: 404 }));
  },
  error(error) {
    console.error(error);
    return withCors(Response.json({ error: "Internal Server Error" }, { status: 500 }));
  },
})
console.log(`Server running on ${server.url}`);

process.on('SIGINT', () => {
  closeDb();
  console.log(`\n Server is closed`);
  process.exit(0);
});
