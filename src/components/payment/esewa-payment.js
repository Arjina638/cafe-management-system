"use client"

import React, { useState } from "react"

export default function EsewaPayment({ amount, type, onSuccess, onCancel }) {
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePayment = async (e) => {
    e.preventDefault()

    if (!formData.email || !formData.phoneNumber) {
      alert("Please fill in all fields")
      return
    }

    setIsProcessing(true)

    try {
      // In production, this would call your backend to initiate Esewa payment
      // const response = await fetch('/api/payments/esewa/initiate', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     amount: Math.round(amount * 100),
      //     type,
      //     customerEmail: formData.email,
      //     customerPhone: formData.phoneNumber,
      //   })
      // })

      console.log("[v0] Esewa payment initiated", {
        amount,
        type,
        email: formData.email,
        phone: formData.phoneNumber,
      })

      // Simulate payment processing
      setTimeout(() => {
        alert("Payment processed! (Demo mode)\nSet up merchant account for live payments.")
        onSuccess()
      }, 2000)
    } catch (error) {
      console.error("Payment error:", error)
      alert("Payment failed. Please try again.")
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <form onSubmit={handlePayment} className="space-y-4 border-2 border-green-300 rounded-lg p-6 bg-green-50">
      <h3 className="font-bold text-green-900 mb-4">Esewa Payment Details</h3>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="user@example.com"
          className="w-full px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-600"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number (10 digits) *</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          placeholder="9800000000"
          maxLength={10}
          className="w-full px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-600"
        />
        <p className="text-xs text-gray-600 mt-1">Must be registered with Esewa</p>
      </div>

      <div className="bg-white border-l-4 border-green-500 p-3 rounded">
        <p className="text-sm text-gray-700">
          <strong>Amount:</strong> ${amount.toFixed(2)}
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isProcessing}
          className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 rounded-lg transition-colors"
        >
          {isProcessing ? "Processing..." : "Pay with Esewa"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>

      <p className="text-xs text-gray-600 text-center">
        To enable live payments, add ESEWA_MERCHANT_CODE and ESEWA_MERCHANT_SECRET to environment variables
      </p>
    </form>
  )
}
