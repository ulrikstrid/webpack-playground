import swToolbox from "sw-toolbox";

const assets = (self as any).serviceWorkerOption.assets;

self.addEventListener("install", (event: InstallEvent) => {
  event.waitUntil(
    caches.open("v1").then(cache => {
      return cache.addAll(assets);
    })
  );
});

swToolbox.router.get(
  "/api/test",
  (req, values: any) =>
    new Response(
      JSON.stringify({
        message: "Hello",
        values
      })
    )
);
