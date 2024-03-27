import { ThemeProvider } from "@/components/theme-provider";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

import { Nav } from "./partials/nav.tsx";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Nav />
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
);
