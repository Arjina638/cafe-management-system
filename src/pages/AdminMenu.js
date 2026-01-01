import React, { useState, useEffect } from "react";

const AdminMenu = () => {
  const [menu, setMenu] = useState([]);
  const [item, setItem] = useState({ name: "", price: 0 });

  const token = localStorage.getItem("token");

 useEffect(() => {
  if (!token) return;

  fetch("http://localhost:5000/api/menu", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => setMenu(data))
    .catch((err) => console.error(err));
}, [token]);


  const addItem = async () => {
    if (!item.name || !item.price) return alert("Enter name & price");

    const res = await fetch("http://localhost:5000/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(item)
    });

    const data = await res.json();
    setMenu([...menu, data]);
    setItem({ name: "", price: 0 });
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/menu/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    setMenu(menu.filter(m => m.id !== id)); 
  };

  const toggleAvailability = async (id, status) => {
    const res = await fetch(`http://localhost:5000/api/menu/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ available: !status })
    });

    const updatedItem = await res.json();

    setMenu(menu.map(m => (m.id === id ? updatedItem : m))); 
  };


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Menu Management</h2>

      {/* Add Item Form */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Item Name"
          value={item.name}
          onChange={e => setItem({ ...item, name: e.target.value })}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          value={item.price}
          onChange={e => setItem({ ...item, price: Number(e.target.value) })}
          className="border p-2 mr-2"
        />
        <button onClick={addItem} className="bg-green-500 text-white p-2">
          Add Item
        </button>
      </div>

      {/* Menu List */}
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Available</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {menu.map(m => (
            <tr key={m.id}>
              <td className="border p-2">{m.name}</td>
              <td className="border p-2">{m.price}</td>
              <td className="border p-2">
                <input
                  type="checkbox"
                  checked={m.available}
                  onChange={() => toggleAvailability(m.id, m.available)}
                />
              </td>
              <td className="border p-2">
                <button
                  onClick={() => deleteItem(m.id)}
                  className="bg-red-500 text-white p-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminMenu;
