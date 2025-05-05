import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { Orders } from "./pages/Orders";
import "./App.css";
import { CheckoutPage } from "./pages/CheckoutPage";
import axios from "axios";
function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios.get("/api/cart-items").then((response) => {
      setCart(response.data);
    });
  }, []);
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
