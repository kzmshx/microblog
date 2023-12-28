import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "modern-css-reset";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
