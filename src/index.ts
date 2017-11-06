import runtime from "serviceworker-webpack-plugin/lib/runtime";

if ("serviceWorker" in navigator) {
  const registration = runtime.register();

  registration
    .then(function(reg) {
      // registration worked
      console.log("Registration succeeded. Scope is " + reg.scope);
      fetch("/api/test")
        .then(res => res.text())
        .then(console.log);
    })
    .catch(function(error) {
      // registration failed
      console.log("Registration failed with " + error);
    });
}
