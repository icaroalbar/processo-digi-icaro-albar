import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/cart";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart/" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
