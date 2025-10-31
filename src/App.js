import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Menu from "./pages/Menu";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import AboutUs from "./components/AboutUs";
import AllAboutUs from "./pages/AllAboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<AllAboutUs />} />
      

      {/* <Route path= "/order" element={<AdminDashboard />} />
      <Route path= "/home" element={<CustomerDashboard />}/>
      <Route path= "/dashboard" element={<EmployeeDashboard />} 
      */}
    </Routes>
  );
}

export default App;
