"use client"

import { useState } from "react"
import { AlertCircle } from "lucide-react"
import EsewaPayment from "./esewa-payment"

export default function PaymentGateway({ amount, type, onSuccess, onCancel }) {
  const [selectedPayment, setSelectedPayment] = useState(null)

  return (
    <div className="bg-surface border-2 border-border rounded-lg p-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-bold text-text">Secure Payment</h2>
        </div>
        <p className="text-text-secondary">Amount to pay: ${amount.toFixed(2)}</p>
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold text-text mb-4">Choose Payment Method</h3>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          {/* Esewa Option */}
          <button
            onClick={() => setSelectedPayment(selectedPayment === "esewa" ? null : "esewa")}
            className={`p-6 rounded-lg border-2 transition-all ${
              selectedPayment === "esewa"
                ? "border-primary bg-primary bg-opacity-10"
                : "border-border hover:border-primary"
            }`}
          >
            <div className="flex items-center justify-center mb-3">
              <div className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold">ESEWA</div>
            </div>
            <p className="text-sm text-text-secondary">Quick payment option</p>
            <p className="text-xs text-text-secondary mt-2">Online payment system</p>
          </button>
        </div>
      </div>

      {/* Payment Form */}
      {selectedPayment === "esewa" && (
        <div className="mb-8">
          <EsewaPayment
            amount={amount}
            type={type}
            onSuccess={() => onSuccess("esewa")}
            onCancel={() => setSelectedPayment(null)}
          />
        </div>
      )}

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-blue-900">Add Your Merchant Account</p>
          <p className="text-sm text-blue-800 mt-1">
            To enable live payments, add your Esewa merchant credentials in the environment variables.
          </p>
        </div>
      </div>

      {/* Cancel Button */}
      <button
        onClick={onCancel}
        className="w-full mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-lg transition-colors"
      >
        Cancel
      </button>
    </div>
  )
}
