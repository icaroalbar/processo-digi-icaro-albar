import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Product from "./pages/product";
import Home from "./pages/home";
=======
import Home from "./pages/home";
import Product from "./pages/product";
import Cart from "./pages/cart";
>>>>>>> 5ecf89cce3c42b27884e4b3d5d491e41205af041

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
<<<<<<< HEAD
=======
        <Route path="/cart" element={<Cart />} />
>>>>>>> 5ecf89cce3c42b27884e4b3d5d491e41205af041
      </Routes>
    </BrowserRouter>
  );
}
