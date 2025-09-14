import React, { useState } from "react";
function OrderForm() {
  const [name, setName] = useState("");
  const [item, setItem] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert('Name:${name}\nItem:${item');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Place Order</h2>
        <label className="block mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <label className="block mb-2">Item</label>
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Place Order
        </button>
      </form>
    </div>
  );
}
export default OrderForm;