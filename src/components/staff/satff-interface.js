"use client"

import { useState, useMemo } from "react"
import OrderBoard from "./order-board"
import OrderDetails from "./order-details"

export default function StaffInterface({ onBack }) {
  const MOCK_ORDERS = [
    {
      id: "ORD-001",
      customerName: "Sarah Johnson",
      status: "pending",
      items: [
        { menuItemId: "1", name: "Espresso", quantity: 2, price: 3.5 },
        { menuItemId: "5", name: "Croissant", quantity: 1, price: 4.25 },
      ],
      totalPrice: 11.25,
      notes: "Extra hot",
      createdAt: new Date(Date.now() - 5 * 60000).toISOString(),
    },
    {
      id: "ORD-002",
      customerName: "Michael Chen",
      status: "preparing",
      items: [{ menuItemId: "2", name: "Cappuccino", quantity: 1, price: 4.5 }],
      totalPrice: 4.5,
      createdAt: new Date(Date.now() - 10 * 60000).toISOString(),
    },
    {
      id: "ORD-003",
      customerName: "Emma Davis",
      status: "ready",
      items: [
        { menuItemId: "3", name: "Latte", quantity: 2, price: 4.75 },
        { menuItemId: "6", name: "Chocolate Cake", quantity: 1, price: 5.5 },
      ],
      totalPrice: 14.75,
      createdAt: new Date(Date.now() - 20 * 60000).toISOString(),
    },
  ]

  const [orders, setOrders] = useState(MOCK_ORDERS)
  const [selectedOrder, setSelectedOrder] = useState(null)
  const [filterStatus, setFilterStatus] = useState("all")

  const filteredOrders = useMemo(() => {
    if (filterStatus === "all") return orders
    return orders.filter((order) => order.status === filterStatus)
  }, [orders, filterStatus])

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: newStatus,
              completedAt: newStatus === "completed" ? new Date().toISOString() : undefined,
            }
          : order
      )
    )
    setSelectedOrder(null)
  }

  const stats = {
    pending: orders.filter((o) => o.status === "pending").length,
    preparing: orders.filter((o) => o.status === "preparing").length,
    ready: orders.filter((o) => o.status === "ready").length,
    completed: orders.filter((o) => o.status === "completed").length,
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-surface border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-text">Order Management</h1>
            <p className="text-text-secondary">Real-time order preparation dashboard</p>
          </div>
          <button onClick={onBack} className="text-text-secondary hover:text-text transition-colors">
            Back
          </button>
        </div>
      </header>

      <div className="bg-surface border-b-2 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-4 gap-4">
          {[
            { label: "Pending", count: stats.pending },
            { label: "Preparing", count: stats.preparing },
            { label: "Ready", count: stats.ready },
            { label: "Completed", count: stats.completed },
          ].map((stat) => (
            <div key={stat.label} className="bg-background rounded-lg p-4 text-center">
              <p className="text-text-secondary text-sm mb-2">{stat.label}</p>
              <p className="text-4xl font-bold text-primary">{stat.count}</p>
            </div>
          ))}
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <OrderBoard
              orders={filteredOrders}
              selectedOrder={selectedOrder}
              onSelectOrder={setSelectedOrder}
              onFilterStatus={setFilterStatus}
              filterStatus={filterStatus}
            />
          </div>

          <div className="lg:col-span-1">
            {selectedOrder ? (
              <OrderDetails order={selectedOrder} onStatusChange={handleStatusChange} />
            ) : (
              <div className="bg-surface border-2 border-border rounded-lg p-8 text-center">
                <p className="text-text-secondary">Select an order to view details</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
