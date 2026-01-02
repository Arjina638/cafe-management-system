import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };
    return(
  <nav className="bg-[#6b4f3b] text-white p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="text-2xl font-bold">Aromalaya☕</div>
      <ul className="flex gap-6">
        <li>
<Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>        </li>
        <li>
          <Link to="/GuestMenu" className="hover:text-yellow-300">Menu</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300">About Us</Link>
        </li>
        <li>
        <Link to="/cart">Cart</Link>
        </li>
      <li>
          <Link to="/login" className="hover:text-yellow-300">Sign up</Link>
        </li>
       {token && (
            <button onClick={logout} className="hover:text-yellow-300">
              Logout
            </button>
       )}
      </ul>
    
    </nav>

    );
}
export default Navbar;

