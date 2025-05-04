import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { Orders } from "./pages/Orders";
import "./App.css";
import { CheckoutPage } from "./pages/CheckoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
    </>
  );
}

export default App;
