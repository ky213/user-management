import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App";
import { setupStore } from "src/data/store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <CssBaseline />
      <App />
    </Provider>
  </React.StrictMode>
);
