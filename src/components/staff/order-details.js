"use client"

import { CheckCircle } from "lucide-react"

export default function OrderDetails({ order, onStatusChange }) {
  const getNextStatus = (current) => {
    switch (current) {
      case "pending":
        return "preparing"
      case "preparing":
        return "ready"
      case "ready":
        return "completed"
      default:
        return "completed"
    }
  }

  const canProgress = order.status !== "completed"

  return (
    <div className="bg-surface border-2 border-border rounded-lg overflow-hidden sticky top-24">
      <div className="bg-primary text-white p-6 border-b-2 border-primary-dark">
        <h3 className="text-2xl font-bold mb-2">{order.id}</h3>
        <p className="opacity-90">{order.customerName}</p>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-600" />
          <span className="text-lg font-bold text-text capitalize">{order.status}</span>
        </div>

        <div>
          <h4 className="font-bold text-text mb-4">Items to Prepare</h4>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.menuItemId} className="flex items-center justify-between bg-background rounded-lg p-3">
                <div>
                  <p className="font-semibold text-text">{item.name}</p>
                  <p className="text-sm text-text-secondary">${item.price.toFixed(2)} each</p>
                </div>
                <span className="text-lg font-bold text-primary">{item.quantity}</span>
              </div>
            ))}
          </div>
        </div>

        {order.notes && (
          <div className="bg-background rounded-lg p-4 border-l-4 border-accent">
            <p className="text-sm text-text-secondary mb-1">Special Notes</p>
            <p className="text-text font-semibold">{order.notes}</p>
          </div>
        )}

        <div className="bg-background rounded-lg p-4 border-2 border-border">
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Total</span>
            <span className="text-2xl font-bold text-primary">${order.totalPrice.toFixed(2)}</span>
          </div>
        </div>

        {canProgress && (
          <button
            onClick={() => onStatusChange(order.id, getNextStatus(order.status))}
            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors"
          >
            Mark as {getNextStatus(order.status)}
          </button>
        )}

        {order.status === "completed" && (
          <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center">
            <p className="text-green-700 font-semibold">Order Completed</p>
          </div>
        )}
      </div>
    </div>
  )
}
