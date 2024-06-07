const { serve } = require("bun");

const server = serve({
  port: 3000,
  fetch(request) {
    return new Response(Bun.file("index.html"));
  },
});

console.log(`Server running on http://localhost:${server.port}`);