"use client"

import { useState } from "react"
import { Clock, Users } from "lucide-react"
import PaymentGateway from "../payment/payment-gateway"

const PRICE_PER_PERSON = 5

export default function ReservationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerPhone: "",
    numberOfGuests: 2,
    reservationDate: "",
    reservationTime: "18:00",
    specialRequests: "",
  })

  const [showPayment, setShowPayment] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const totalPrice = formData.numberOfGuests * PRICE_PER_PERSON

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "numberOfGuests" ? parseInt(value) : value,
    }))
  }

  const handlePaymentSuccess = (paymentMethod) => {
    const reservation = {
      id: `RSV-${Date.now()}`,
      ...formData,
      totalPrice,
      paymentMethod,
      paymentStatus: "paid",
      status: "confirmed",
      createdAt: new Date().toISOString(),
    }

    console.log("Reservation confirmed:", reservation)
    alert(`Reservation confirmed! Reservation ID: ${reservation.id}`)
    onSubmit(reservation)
  }

  if (showPayment) {
    return (
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => setShowPayment(false)}
          className="text-text-secondary hover:text-text mb-6 transition-colors"
        >
          Back to Reservation Details
        </button>

        <PaymentGateway
          amount={totalPrice}
          type="reservation"
          onSuccess={handlePaymentSuccess}
          onCancel={() => setShowPayment(false)}
        />
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-surface border-2 border-border rounded-lg p-8">
        <h2 className="text-2xl font-bold text-text mb-8">Reserve Your Table</h2>

        <div className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text mb-3">Full Name *</label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border-2 border-border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text mb-3">Email *</label>
              <input
                type="email"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={handleInputChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border-2 border-border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text mb-3">Phone Number *</label>
              <input
                type="tel"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={handleInputChange}
                placeholder="+977 9800000000"
                className="w-full px-4 py-3 border-2 border-border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text mb-3">Number of Guests *</label>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary" />
                <select
                  name="numberOfGuests"
                  value={formData.numberOfGuests}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border-2 border-border rounded-lg"
                >
                  {[1, 2, 3, 4, 5, 6, 8, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} Guest{num !== 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-text mb-3">Reservation Date *</label>
              <input
                type="date"
                name="reservationDate"
                value={formData.reservationDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-2 border-border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-text mb-3">Reservation Time *</label>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <input
                  type="time"
                  name="reservationTime"
                  value={formData.reservationTime}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border-2 border-border rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-semibold text-text mb-3">Special Requests (Optional)</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              placeholder="e.g., Window seating preferred, Birthday celebration, etc."
              className="w-full px-4 py-3 border-2 border-border rounded-lg resize-none h-24"
            />
          </div>

          {/* Price Summary */}
          <div className="bg-background rounded-lg p-6 space-y-3">
            <div className="flex justify-between">
              <span>Price per person</span>
              <span>${PRICE_PER_PERSON.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Number of guests</span>
              <span>{formData.numberOfGuests}</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between text-xl font-bold">
              <span>Total Amount</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={() => setShowPayment(true)}
            disabled={
              !formData.customerName ||
              !formData.customerEmail ||
              !formData.customerPhone ||
              !formData.reservationDate ||
              isSubmitting
            }
            className="w-full bg-primary text-white font-bold py-3 rounded-lg disabled:bg-gray-400"
          >
            {isSubmitting ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </div>
    </div>
  )
}
