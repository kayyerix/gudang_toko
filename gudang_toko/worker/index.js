export default {
  async fetch(request, env) {
    return new Response("Hello from Gudang Worker!", {
      headers: { "content-type": "text/plain" },
    });
  },
};
