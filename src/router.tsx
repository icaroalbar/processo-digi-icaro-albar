import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
