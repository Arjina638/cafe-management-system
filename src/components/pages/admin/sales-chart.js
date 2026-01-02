"use client"

import { useState, useMemo } from "react"
import { TrendingUp, DollarSign, ShoppingCart, Clock } from "lucide-react"

// Mock sales data
const MOCK_SALES_DATA = [
  { date: "Mon", orders: 24, revenue: 486 },
  { date: "Tue", orders: 31, revenue: 637 },
  { date: "Wed", orders: 28, revenue: 563 },
  { date: "Thu", orders: 35, revenue: 710 },
  { date: "Fri", orders: 42, revenue: 858 },
  { date: "Sat", orders: 38, revenue: 774 },
  { date: "Sun", orders: 22, revenue: 448 },
]

export default function SalesChart() {
  const [timeRange, setTimeRange] = useState("week")

  const stats = useMemo(() => {
    const totalOrders = MOCK_SALES_DATA.reduce((sum, day) => sum + day.orders, 0)
    const totalRevenue = MOCK_SALES_DATA.reduce((sum, day) => sum + day.revenue, 0)
    const avgOrderValue = totalRevenue / totalOrders
    const topDay = MOCK_SALES_DATA.reduce((prev, current) => (current.revenue > prev.revenue ? current : prev))
    return { totalOrders, totalRevenue, avgOrderValue, topDay }
  }, [])

  const maxRevenue = Math.max(...MOCK_SALES_DATA.map((d) => d.revenue))

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-surface border-2 border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary font-semibold">Total Orders</h3>
            <ShoppingCart className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-text">{stats.totalOrders}</p>
          <p className="text-sm text-text-secondary mt-2">This week</p>
        </div>

        <div className="bg-surface border-2 border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary font-semibold">Total Revenue</h3>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-text">${stats.totalRevenue.toFixed(2)}</p>
          <p className="text-sm text-text-secondary mt-2">This week</p>
        </div>

        <div className="bg-surface border-2 border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary font-semibold">Avg Order Value</h3>
            <TrendingUp className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-text">${stats.avgOrderValue.toFixed(2)}</p>
          <p className="text-sm text-text-secondary mt-2">Per order</p>
        </div>

        <div className="bg-surface border-2 border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary font-semibold">Peak Day</h3>
            <Clock className="w-5 h-5 text-primary" />
          </div>
          <p className="text-3xl font-bold text-text">${stats.topDay.revenue}</p>
          <p className="text-sm text-text-secondary mt-2">{stats.topDay.date}</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-surface border-2 border-border rounded-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-text">Weekly Revenue</h3>
          <div className="flex gap-2">
            {["week","month","year"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  timeRange === range ? "bg-primary text-white" : "bg-background text-text hover:bg-opacity-50"
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-between h-64 gap-3">
          {MOCK_SALES_DATA.map((day) => (
            <div key={day.date} className="flex flex-col items-center flex-1">
              <div
                className="w-full bg-gradient-to-t from-primary to-primary-dark rounded-t-lg transition-all hover:from-primary-dark hover:to-primary relative group"
                style={{ height: `${(day.revenue / maxRevenue) * 100}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-text text-white text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ${day.revenue.toFixed(0)}
                </div>
              </div>
              <p className="mt-2 text-sm font-semibold text-text">{day.date}</p>
              <p className="text-xs text-text-secondary">{day.orders} orders</p>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Breakdown Table */}
      <div className="bg-surface border-2 border-border rounded-lg overflow-hidden">
        <div className="p-6 border-b-2 border-border">
          <h3 className="text-xl font-bold text-text">Daily Breakdown</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-background border-b-2 border-border">
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Day</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Orders</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Revenue</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-text">Avg Order Value</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_SALES_DATA.map((day) => (
                <tr key={day.date} className="border-b border-border hover:bg-background transition-colors">
                  <td className="px-6 py-4 text-sm text-text font-semibold">{day.date}</td>
                  <td className="px-6 py-4 text-sm text-text">{day.orders}</td>
                  <td className="px-6 py-4 text-sm font-bold text-primary">${day.revenue.toFixed(2)}</td>
                  <td className="px-6 py-4 text-sm text-text">${(day.revenue / day.orders).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
