"use client"

import { useState } from "react"
import { AlertTriangle, Plus, Trash2 } from "lucide-react"

// Mock inventory data
const MOCK_INVENTORY = [
  { id: "1", name: "Espresso Beans", quantity: 25, unit: "kg", reorderLevel: 10, supplier: "Global Beans Co." },
  { id: "2", name: "Milk", quantity: 8, unit: "L", reorderLevel: 5, supplier: "Fresh Dairy" },
  { id: "3", name: "Croissants", quantity: 42, unit: "pcs", reorderLevel: 20, supplier: "Boulangerie Paris" },
  { id: "4", name: "Chocolate", quantity: 3, unit: "kg", reorderLevel: 5, supplier: "Cocoa Excellence" },
  { id: "5", name: "Sugar", quantity: 15, unit: "kg", reorderLevel: 8, supplier: "Sweet Suppliers" },
]

export default function InventoryManager() {
  const [inventory, setInventory] = useState(MOCK_INVENTORY)
  const [editingId, setEditingId] = useState(null)
  const [newItemName, setNewItemName] = useState("")

  const lowStockItems = inventory.filter((item) => item.quantity <= item.reorderLevel)

  const handleAddItem = () => {
    if (!newItemName.trim()) return

    const newItem = {
      id: Date.now().toString(),
      name: newItemName,
      quantity: 0,
      unit: "pcs",
      reorderLevel: 5,
      supplier: "To be added",
    }

    setInventory([...inventory, newItem])
    setNewItemName("")
  }

  const handleUpdateQuantity = (id, quantity) => {
    setInventory((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleDelete = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-8">
      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && (
        <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 flex gap-4">
          <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-red-900 mb-2">Low Stock Alert</h3>
            <p className="text-red-700 text-sm">
              {lowStockItems.length} item(s) are below reorder level. Consider placing orders soon.
            </p>
            <ul className="mt-3 space-y-1">
              {lowStockItems.map((item) => (
                <li key={item.id} className="text-sm text-red-700">
                  {item.name} - {item.quantity} {item.unit} remaining
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Add Item Form */}
      <div className="bg-surface border-2 border-border rounded-lg p-6">
        <h3 className="text-lg font-bold text-text mb-4">Add New Item</h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleAddItem()}
            placeholder="Item name"
            className="flex-1 px-4 py-2 border-2 border-border rounded-lg text-text focus:outline-none focus:border-primary"
          />
          <button
            onClick={handleAddItem}
            className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
        <div className="p-6 border-b-2 border-border">
          <h3 className="text-xl font-bold text-text">Current Inventory</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-background border-b-2 border-border">
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Item Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Quantity</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Unit</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Reorder Level</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Supplier</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => {
                const isLowStock = item.quantity <= item.reorderLevel
                return (
                  <tr
                    key={item.id}
                    className={`border-b border-border hover:bg-background transition-colors ${
                      isLowStock ? "bg-red-50" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm text-text font-semibold">{item.name}</td>
                    <td className="px-6 py-4 text-sm text-text">
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleUpdateQuantity(item.id, Number(e.target.value))}
                        className="w-20 px-2 py-1 border border-border rounded text-center text-text"
                      />
                    </td>
                    <td className="px-6 py-4 text-sm text-text">{item.unit}</td>
                    <td className="px-6 py-4 text-sm text-text">{item.reorderLevel}</td>
                    <td className="px-6 py-4 text-sm text-text-secondary">{item.supplier}</td>
                    <td className="px-6 py-4 text-sm">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-600 hover:text-red-700 transition-colors p-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
