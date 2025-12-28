import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Customer/Dashboard";
import GuestMenu from "./pages/GuestMenu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import AboutUs from "./components/AboutUs";
import AllAboutUs from "./pages/AllAboutUs";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminMenu from "./pages/AdminMenu";
import Orders from "./pages/Customer/Orders";
import Cart from "./pages/Customer/Cart";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <Router>
    <CartProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<Login />} />

      <Route path="/Menu" element={<GuestMenu />} />
      <Route path="/about" element={<AllAboutUs />} />
      <Route path="/admin/menu" element={<ProtectedRoute role="admin"><AdminMenu /></ProtectedRoute>} />

      <Route path="/customer/dashboard" element={<Dashboard />}/>
      <Route path="/customer/orders" element={<ProtectedRoute role="customer"><Orders /></ProtectedRoute>} />
      {/* <Route path="/customer/menu" element={<CustomerMenu />}/>
      <Route path="/customer/cart" element={<CustomerCart />}/>
      <Route path="/customer/orders" element={<CustomerOrder />}/>
      <Route path="/customer/profile" element={<CustomerProfile />}/> */}

    </Routes>
    </CartProvider>
    </Router>
  );
}

export default App;
