console.log("Service worker startups.");

const Records = require("./database/model");

self.addEventListener("install", function (event) {
  console.log("Service worker installed.");
});

self.addEventListener("activate", function (event) {
  console.log("Service worker activated.");
  setInterval(async () => {
    console.log("Hello from inside the setInterval sw");
    const record = await Records.create({ name: "Server worker" });
  }, 2000);
});

self.addEventListener("fetch", function (event) {
  console.log("Caught a fetch!");

  event.respondWith(new Response("Hello world!"));
});
