"use client"

import { useState } from "react"
import { Plus, Edit2, Trash2 } from "lucide-react"

// Mock menu data
const MOCK_MENU = [
  { id: "1", name: "Espresso", category: "Coffee", price: 3.5, description: "Strong and rich espresso shot", available: true },
  { id: "2", name: "Cappuccino", category: "Coffee", price: 4.5, description: "Espresso with steamed milk and foam", available: true },
  { id: "3", name: "Latte", category: "Coffee", price: 4.75, description: "Smooth espresso with velvety steamed milk", available: true },
  { id: "4", name: "Croissant", category: "Pastry", price: 4.25, description: "Buttery, flaky French pastry", available: false },
]

export default function MenuManager() {
  const [menu, setMenu] = useState(MOCK_MENU)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({})

  const categories = Array.from(new Set(menu.map((item) => item.category)))

  const handleEdit = (item) => {
    setEditingId(item.id)
    setFormData(item)
  }

  const handleSave = () => {
    if (!editingId) return
    setMenu(menu.map((item) => (item.id === editingId ? { ...item, ...formData } : item)))
    setEditingId(null)
    setFormData({})
  }

  const handleDelete = (id) => setMenu(menu.filter((item) => item.id !== id))
  const handleToggleAvailability = (id) => setMenu(menu.map((item) => (item.id === id ? { ...item, available: !item.available } : item)))

  const handleAddNew = () => {
    const newItem = { id: Date.now().toString(), name: "New Item", category: categories[0] || "Coffee", price: 0, description: "Item description", available: true }
    setMenu([...menu, newItem])
    handleEdit(newItem)
  }

  return (
    <div className="space-y-8">
      <button onClick={handleAddNew} className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors">
        <Plus className="w-5 h-5" /> Add New Item
      </button>

      <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
        <div className="p-6 border-b-2 border-border">
          <h3 className="text-xl font-bold text-text">Menu Items</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-background border-b-2 border-border">
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Category</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Price</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item) => (
                <tr key={item.id} className="border-b border-border hover:bg-background transition-colors">
                  <td className="px-6 py-4 text-sm text-text font-semibold">{item.name}</td>
                  <td className="px-6 py-4 text-sm text-text-secondary">{item.category}</td>
                  <td className="px-6 py-4 text-sm text-primary font-bold">${item.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleToggleAvailability(item.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                        item.available ? "bg-green-100 text-green-700 border border-green-300" : "bg-red-100 text-red-700 border border-red-300"
                      }`}
                    >
                      {item.available ? "Available" : "Unavailable"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button onClick={() => handleEdit(item)} className="text-blue-600 hover:text-blue-700 transition-colors p-2">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(item.id)} className="text-red-600 hover:text-red-700 transition-colors p-2">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {editingId && (
        <div className="bg-surface border-2 border-border rounded-lg p-6">
          <h3 className="text-xl font-bold text-text mb-6">Edit Item</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Name</label>
              <input
                type="text"
                value={formData.name || ""}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Category</label>
              <select
                value={formData.category || ""}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Price ($)</label>
              <input
                type="number"
                step="0.01"
                value={formData.price || ""}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="w-full px-4 py-2 border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Description</label>
              <input
                type="text"
                value={formData.description || ""}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={handleSave} className="bg-primary hover:bg-primary-dark text-white font-bold px-6 py-2 rounded-lg transition-colors">
              Save Changes
            </button>
            <button onClick={() => setEditingId(null)} className="bg-background border-2 border-border text-text font-bold px-6 py-2 rounded-lg hover:border-primary transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
