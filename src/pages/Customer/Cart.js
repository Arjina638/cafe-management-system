import { useCart } from "../../context/CartContext";
import axios from "axios";

export default function Cart() {
  const { cart, incQty, decQty, removeItem, total } = useCart();

  const placeOrder = async () => {
    await axios.post("http://localhost:3000/api/orders", {
      userId: "123",
      items: cart.map(c => ({
        menuId: c._id,
        qty: c.qty,
        price: c.price
      })),
      total,
      status: "Pending"
    });

    alert("Order placed!");
  };

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item._id}>
          {item.name} — Rs {item.price} × {item.qty}

          <button onClick={() => decQty(item._id)}>-</button>
          <button onClick={() => incQty(item._id)}>+</button>
          <button onClick={() => removeItem(item._id)}>Remove</button>
        </div>
      ))}

      <h3>Total: Rs {total}</h3>

      <button disabled={!cart.length} onClick={placeOrder}>
        Place Order
      </button>
    </div>
  );
}
