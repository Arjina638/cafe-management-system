"use client"

import { Clock } from "lucide-react"

export default function OrderBoard({
  orders,
  selectedOrder,
  onSelectOrder,
  onFilterStatus,
  filterStatus,
}) {
  const statusFilters = [
    { label: "All Orders", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Preparing", value: "preparing" },
    { label: "Ready", value: "ready" },
    { label: "Completed", value: "completed" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-red-100 text-red-700 border-red-300"
      case "preparing":
        return "bg-yellow-100 text-yellow-700 border-yellow-300"
      case "ready":
        return "bg-green-100 text-green-700 border-green-300"
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-300"
      default:
        return ""
    }
  }

  const formatTime = (isoString) => {
    const date = new Date(isoString)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    return `${diffMins}m ago`
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        {statusFilters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterStatus(filter.value)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              filterStatus === filter.value
                ? "bg-primary text-white"
                : "bg-surface border-2 border-border text-text hover:border-primary"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {orders.length === 0 ? (
          <div className="bg-surface border-2 border-border rounded-lg p-8 text-center">
            <p className="text-text-secondary">No orders in this category</p>
          </div>
        ) : (
          orders.map((order) => (
            <button
              key={order.id}
              onClick={() => onSelectOrder(order)}
              className={`w-full text-left bg-surface border-2 rounded-lg p-6 transition-all ${
                selectedOrder?.id === order.id
                  ? "border-primary shadow-lg"
                  : "border-border hover:border-primary"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-text">{order.id}</h3>
                  <p className="text-text-secondary">{order.customerName}</p>
                </div>

                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold border-2 ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              <div className="mb-4 space-y-1">
                {order.items.slice(0, 2).map((item) => (
                  <p key={item.menuItemId} className="text-text-secondary text-sm">
                    {item.quantity}x {item.name}
                  </p>
                ))}

                {order.items.length > 2 && (
                  <p className="text-text-secondary text-sm">
                    +{order.items.length - 2} more
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2 text-text-secondary text-sm">
                <Clock className="w-4 h-4" />
                <span>{formatTime(order.createdAt)}</span>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}
