"use client"

import { useState } from "react"
import ReservationForm from "./reservation-form"
import ReservationsList from "./bookings-list"
import { Calendar } from "lucide-react"

export default function ReservationInterface({ onBack }) {
  const [showForm, setShowForm] = useState(true)
  const [reservations, setReservations] = useState([])

  const handleReservationSubmit = (reservation) => {
    setReservations([...reservations, reservation])
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface border-b-2 border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-text">Table Reservations</h1>
              <p className="text-text-secondary">Book your perfect café moment</p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="text-text-secondary hover:text-text transition-colors"
          >
            Back
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {showForm ? (
          <ReservationForm onSubmit={handleReservationSubmit} />
        ) : (
          <div className="space-y-6">
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Make Another Reservation
            </button>

            <ReservationsList reservations={reservations} />
          </div>
        )}
      </main>
    </div>
  )
}
