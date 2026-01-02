import { useState } from "react";
import { Navigation } from "../src/components/layout/Navbar";
import { Landing } from "../src/components/pages/LandingPage";
import { About } from "../src/components/pages/AllAboutUs";
import { Services } from "../src/components/services/cafeServices";
import { Auth } from "./components/pages/Auth";
import {Reservation} from "../src/components/Reservation/reservation-form"
import { UserDashboard } from "../src/components/pages/user/user-dashboard";
import AdminDashboard from "../src/components/pages/admin/admin-dashboard";
import { AuthProvider } from "../src/context/AuthContex";
import { Toaster } from "react-hot-toast";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Landing />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "Reservation":
        return <Reservation />;
      case "login":
        return <Auth mode="login" onPageChange={setCurrentPage} />;
      case "signup":
        return <Auth mode="signup" onPageChange={setCurrentPage} />;
      case "user-dashboard":
        return <UserDashboard />;
      case "admin-dashboard":
        return <AdminDashboard />;
      default:
        return <Landing onPageChange={setCurrentPage} />;
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-background text-text">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        
        <main>{renderPage()}</main>
        <Toaster position="top-right" />
      </div>
    </AuthProvider>
  );
}

export default App;
