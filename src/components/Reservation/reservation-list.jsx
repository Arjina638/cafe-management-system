"use client"

import { Calendar, Users, Clock } from "lucide-react"
import PropTypes from "prop-types"

export default function ReservationsList({ reservations }) {
  if (!reservations || reservations.length === 0) {
    return (
      <div className="text-center py-12">
        <Calendar className="w-16 h-16 text-text-secondary mx-auto mb-4 opacity-50" />
        <h3 className="text-xl font-bold text-text mb-2">No reservations yet</h3>
        <p className="text-text-secondary">Create your first table reservation</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-text mb-6">Your Reservations</h2>

      {reservations.map((reservation) => (
        <div key={reservation.id} className="bg-surface border-2 border-border rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-bold text-text mb-4">{reservation.customerName}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{new Date(reservation.reservationDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{reservation.reservationTime}</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary">
                  <Users className="w-5 h-5 text-primary" />
                  <span>{reservation.numberOfGuests} Guests</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Status:</span>
                <span
                  className={`px-4 py-2 rounded-lg font-semibold text-white ${
                    reservation.status === "confirmed" ? "bg-green-600" : "bg-yellow-600"
                  }`}
                >
                  {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-secondary">Payment:</span>
                <span
                  className={`px-4 py-2 rounded-lg font-semibold text-white ${
                    reservation.paymentStatus === "paid" ? "bg-green-600" : "bg-red-600"
                  }`}
                >
                  {reservation.paymentStatus.charAt(0).toUpperCase() + reservation.paymentStatus.slice(1)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-border">
                <span className="font-bold text-text">Total:</span>
                <span className="text-lg font-bold text-primary">
                  ${reservation.totalPrice.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {reservation.specialRequests && (
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-sm text-text-secondary mb-2">Special Requests:</p>
              <p className="text-text">{reservation.specialRequests}</p>
            </div>
          )}

          <div className="mt-4 pt-4 border-t border-border text-sm text-text-secondary">
            <span>Reservation ID: {reservation.id}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// Optional: prop-types validation (recommended)
ReservationsList.propTypes = {
  reservations: PropTypes.array.isRequired,
}
