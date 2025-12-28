
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../../context/CartContext";
import GuestMenu from "../GuestMenu";
export default function Menu() {

  const { addToCart } = useCart();   // 👈 get cart functions here
  const [menu, setMenu] = useState([]);

  // 👇 fetch menu items from backend
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/menu")   // <-- change if your route is different
      .then((res) => setMenu(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-[#fbf7f2] min-h-screen p-10">
      <h2 style={{ marginBottom: "20px" }}>Menu</h2>

      {menu.map((item) => (
        <div
          key={item._id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>Rs {item.price}</p>

          {/* 👇 this adds item to cart */}
          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
      <GuestMenu />
    </div>
  );
}
