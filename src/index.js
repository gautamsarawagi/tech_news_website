import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Context";

ReactDOM.render(
  <AppProvider>
  <App />
  </AppProvider>,
  document.getElementById("root")
);
