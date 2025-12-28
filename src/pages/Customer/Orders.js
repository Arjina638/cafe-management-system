import axios from "axios";
import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/orders/user/123")
    .then(res => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>My Orders</h2>

      {orders.map(o => (
        <div key={o._id}>
          <p>Date: {new Date(o.createdAt).toLocaleString()}</p>
          <p>Status: {o.status}</p>
          <p>Total: Rs {o.total}</p>
        </div>
      ))}
    </div>
  );
}
