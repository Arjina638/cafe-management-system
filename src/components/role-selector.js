"use client"

import { ChefHat, Users, BarChart3 } from "lucide-react"

export default function RoleSelector({ onSelectRole }) {
  const roles = [
    {
      id: "customer",
      title: "Customer",
      description: "Browse menu and place orders",
      icon: Users,
      color: "bg-primary",
    },
    {
      id: "staff",
      title: "Staff",
      description: "Manage and prepare orders",
      icon: ChefHat,
      color: "bg-primary",
    },
    {
      id: "admin",
      title: "Admin",
      description: "View analytics and manage inventory",
      icon: BarChart3,
      color: "bg-primary",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-text mb-4">Brew & Bean Café</h1>
          <p className="text-xl text-text-secondary">Select your role to get started</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role) => {
            const Icon = role.icon
            return (
              <button
                key={role.id}
                onClick={() => onSelectRole(role.id)}
                className="group h-full bg-surface border-2 border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center h-full">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full mb-6 group-hover:bg-opacity-20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-text mb-2">{role.title}</h3>
                  <p className="text-text-secondary flex-1">{role.description}</p>
                  <div className="mt-6 text-primary font-semibold group-hover:text-primary-light transition-colors">
                    Access
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
