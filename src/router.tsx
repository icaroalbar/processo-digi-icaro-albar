import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import Home from "./pages/home";
import Cart from "./pages/cart";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
