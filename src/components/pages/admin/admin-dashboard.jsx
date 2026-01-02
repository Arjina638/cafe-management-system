"use client"

import { useState } from "react"
import SalesChart from "./sales-chart"
import InventoryManager from "./inventory-manager"
import MenuManager from "./menu-manager"

export default function AdminDashboard({ onBack }) {
  const [activeTab, setActiveTab] = useState("sales")

  const tabs = [
    { id: "sales", label: "Sales Analytics" },
    { id: "inventory", label: "Inventory" },
    { id: "menu", label: "Menu Management" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface border-b-2 border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-text">Admin Dashboard</h1>
              <p className="text-text-secondary">Manage your café operations</p>
            </div>
            <button onClick={onBack} className="text-text-secondary hover:text-text transition-colors">
              Back
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 border-b-2 border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "text-primary border-primary"
                    : "text-text-secondary border-transparent hover:text-text"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "sales" && <SalesChart />}
        {activeTab === "inventory" && <InventoryManager />}
        {activeTab === "menu" && <MenuManager />}
      </main>
    </div>
  )
}
