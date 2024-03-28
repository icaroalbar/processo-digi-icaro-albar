import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Home from "./pages/home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
