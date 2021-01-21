"use strict";

let swRegistration = null;

function showNotificatiion() {
  console.log("try Show");
}

if ("serviceWorker" in navigator) {
  console.log("Service Worker is supported");
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").then(
      function (swReg) {
        console.log("Service Worker is registered", swReg);
        swRegistration = swReg;
      },
      function (error) {
        console.error("Service Worker Error", error);
      }
    );
  });
}
