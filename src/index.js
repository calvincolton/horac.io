import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import App from "./App";

// sentry Raven
// async function importErrorReporting() {
//   // do not load Sentry's error reporting module in the development environment
//   if (process.env.NODE_ENV !== "development") {
//     console.log("Sentry, reporting for production!");
//     await import("./errorReporting");
//   }
// }
// importErrorReporting();

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
