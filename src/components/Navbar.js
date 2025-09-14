import React from "react";
import { link } from "react-router-dom";

function Navbar() {
    return(
  <nav className="bg-gray-800 p-4 text-white flex justify-around">
    <link to="/"> Dashboard</link>
    <link to="/order"> Order</link>
    <link to="/menu"> Menu</link>
    <link to="/login"> Login</link>
  </nav>
    );
}
export default Navbar;

