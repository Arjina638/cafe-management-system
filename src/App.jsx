import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./components/pages/LandingPage";
import Dashboard from "./pages/Customer/Dashboard";
import GuestMenu from "./pages/GuestMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AllAboutUs from "./components/pages/AllAboutUs";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminMenu from "./pages/AdminMenu";
import Orders from "./pages/Customer/Orders";
import Cart from "./pages/Customer/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Login />} />
        <Route path="/menu" element={<GuestMenu />} />
        <Route path="/about" element={<AllAboutUs />} />

        <Route
          path="/admin/menu"
          element={
            <ProtectedRoute role="admin">
              <AdminMenu />
            </ProtectedRoute>
          }
        />

        <Route path="/customer/dashboard" element={<Dashboard />} />

        <Route
          path="/customer/orders"
          element={
            <ProtectedRoute role="customer">
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
    </CartProvider>
  );
}

export default App;

// export default function App() {
//   return <h1>Frontend is working</h1>;
// }

