import { ThemeProvider } from "@/components/theme-provider";
import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";

import { Nav } from "./partials/Nav/index.tsx";
import { Router } from "./router";
import Footer from "./partials/footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Nav />
      <Router />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
);
