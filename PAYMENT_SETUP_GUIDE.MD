# Brew & Bean Café - Payment Integration Setup Guide

## Overview

This café management system includes complete integration for **Khalti** and **Esewa** payment gateways, supporting both online orders and table reservations.

---

## Table of Contents

1. [Features](#features)
2. [Payment Methods](#payment-methods)
3. [Demo Mode](#demo-mode)
4. [Production Setup](#production-setup)
5. [Environment Variables](#environment-variables)
6. [API Integration](#api-integration)
7. [Testing](#testing)

---

## Features

### Online Ordering Payment
- Browse café menu items by category
- Add items to cart with quantity adjustments
- Choose delivery option (Pickup or Delivery with $3 charge)
- Add special notes/customizations
- Pay securely via Khalti or Esewa
- Receive order confirmation with order ID

### Table Reservation Payment
- Book tables for specific dates and times
- Specify number of guests (1-10)
- Add special requests (window seating, birthday, etc.)
- Pricing: $5 per person for reservation
- Pay deposit via Khalti or Esewa
- Receive booking confirmation with reservation ID

---

## Payment Methods

### Khalti Payment
- **Network**: Nepal's leading digital wallet
- **Target Users**: Nepal-based customers
- **Features**:
  - Phone number-based payments
  - User-friendly mobile interface
  - Instant transaction confirmation
  - Security: Pin-based authentication

### Esewa Payment
- **Network**: Online payment system
- **Target Users**: Nepal-based customers
- **Features**:
  - Email-based payments
  - Quick transaction processing
  - Merchant-friendly API
  - Bank account integration

---

## Demo Mode

The system currently runs in **demo mode** with mock payments. This allows you to:

- ✅ Test the complete user interface
- ✅ Simulate booking and ordering flows
- ✅ Practice payment selection
- ✅ Verify data collection and validation

### Demo Mode Behavior
When you click "Proceed to Payment":
1. Select Khalti or Esewa
2. Enter test phone number: `9800000000`
3. Enter test email: `test@example.com`
4. Click "Pay" button
5. System simulates 2-second processing delay
6. Shows success alert with confirmation message

**Note**: No actual payment is processed in demo mode.

---

## Production Setup

To enable live payments with real money transactions:

### Step 1: Get Merchant Accounts

#### For Khalti:
1. Visit [khalti.com](https://khalti.com)
2. Register your café business
3. Complete merchant verification
4. Obtain:
   - `KHALTI_PUBLIC_KEY` (Frontend)
   - `KHALTI_SECRET_KEY` (Backend)

#### For Esewa:
1. Visit [esewa.com.np](https://esewa.com.np)
2. Register merchant account
3. Complete business verification
4. Obtain:
   - `ESEWA_MERCHANT_CODE`
   - `ESEWA_MERCHANT_SECRET`

### Step 2: Add Environment Variables

Create or update your `.env.local` file:

```env
# Khalti Configuration
KHALTI_PUBLIC_KEY=your_khalti_public_key_here
KHALTI_SECRET_KEY=your_khalti_secret_key_here

# Esewa Configuration
ESEWA_MERCHANT_CODE=your_esewa_merchant_code_here
ESEWA_MERCHANT_SECRET=your_esewa_merchant_secret_here

# API Configuration
REACT_APP_API_URL=http://localhost:3001
```

### Step 3: Backend API Endpoints

Implement the following backend endpoints for payment processing:

#### Khalti Initiate Payment
```
POST /api/payments/khalti/initiate
Body:
{
  "amount": number (in paisa, 1 NPR = 100 paisa),
  "type": "order" | "booking",
  "customerPhone": string,
  "customerEmail": string,
  "orderId"?: string,
  "bookingId"?: string
}
Response:
{
  "success": boolean,
  "transactionId": string,
  "paymentUrl": string (redirect user here)
}
```

#### Khalti Verify Payment
```
POST /api/payments/khalti/verify
Body:
{
  "transactionId": string
}
Response:
{
  "success": boolean,
  "transactionId": string,
  "message": string
}
```

#### Esewa Initiate Payment
```
POST /api/payments/esewa/initiate
Body:
{
  "amount": number,
  "type": "order" | "booking",
  "customerEmail": string,
  "customerPhone": string,
  "orderId"?: string,
  "bookingId"?: string
}
Response:
{
  "success": boolean,
  "transactionId": string,
  "paymentUrl": string
}
```

#### Esewa Verify Payment
```
POST /api/payments/esewa/verify
Body:
{
  "transactionId": string
}
Response:
{
  "success": boolean,
  "transactionId": string,
  "message": string
}
```

---

## Environment Variables

### Frontend Variables (REACT_APP_*)

```env
REACT_APP_API_URL=http://localhost:3001
```

### Backend Variables

#### Khalti
- `KHALTI_PUBLIC_KEY` - Used in frontend for payment initiation
- `KHALTI_SECRET_KEY` - Used in backend for verification (keep secret!)

#### Esewa
- `ESEWA_MERCHANT_CODE` - Merchant identifier
- `ESEWA_MERCHANT_SECRET` - Secret key (keep secret!)

---

## API Integration

### Payment Service Functions

The system includes pre-built API service functions in `lib/payment-api.ts`:

#### Initialize Khalti Payment
```typescript
import { khaltiPaymentService } from '@/lib/payment-api'

const response = await khaltiPaymentService.initiatePayment({
  amount: 50000, // 500 NPR in paisa
  type: 'order',
  customerPhone: '9800000000',
  customerEmail: 'customer@example.com',
  orderId: 'ORD-12345'
})

// Response: { success: true, transactionId: '...' }
```

#### Verify Khalti Payment
```typescript
const response = await khaltiPaymentService.verifyPayment(transactionId)
```

#### Initialize Esewa Payment
```typescript
import { esewaPaymentService } from '@/lib/payment-api'

const response = await esewaPaymentService.initiatePayment({
  amount: 50000,
  type: 'booking',
  customerEmail: 'customer@example.com',
  customerPhone: '9800000000',
  bookingId: 'BK-12345'
})
```

---

## Testing

### Testing in Demo Mode

1. **Order Testing**:
   - Go to "Order Online"
   - Add items to cart
   - Enter customer details
   - Click "Proceed to Payment"
   - Test both Khalti and Esewa options

2. **Booking Testing**:
   - Go to "Book a Table"
   - Fill in reservation details
   - Set future date and time
   - Click "Proceed to Payment"
   - Complete payment flow

### Testing in Production

1. **Use Test Credentials**:
   - Most payment gateways provide sandbox/test credentials
   - Use these for initial testing
   - Then switch to live credentials

2. **Test Cases**:
   - Valid payment completion
   - Payment cancellation
   - Network failures
   - Invalid credentials

3. **Monitoring**:
   - Check transaction logs in payment gateway dashboard
   - Verify database records created for orders/bookings
   - Test notification emails sent to customers

---

## Files Structure

```
components/
├── payment/
│   ├── payment-gateway.tsx        # Main payment selector
│   ├── khalti-payment.tsx         # Khalti form & logic
│   └── esewa-payment.tsx          # Esewa form & logic
├── customer/
│   ├── cart.tsx                   # Order with payment integration
│   └── customer-interface.tsx     # Customer menu & ordering
├── booking/
│   ├── booking-interface.tsx      # Booking main component
│   ├── booking-form.tsx           # Booking form with payment
│   └── bookings-list.tsx          # View reservations
└── ...

lib/
├── payment-api.ts                 # Payment service functions
└── api.ts                         # General API service

types/
├── index.ts                       # TypeScript interfaces including Payment types
```

---

## Security Considerations

1. **Secret Keys**: Never expose `KHALTI_SECRET_KEY` or `ESEWA_MERCHANT_SECRET` in frontend code
2. **HTTPS**: Always use HTTPS in production for payment pages
3. **Verification**: Always verify payments on the backend
4. **Input Validation**: Validate all user input on both frontend and backend
5. **Rate Limiting**: Implement rate limiting on payment endpoints
6. **Logging**: Log all payment transactions for audit trail

---

## Common Issues & Solutions

### Issue: "Payment gateway not initialized"
**Solution**: Check environment variables are correctly set in `.env.local`

### Issue: "Merchant credentials invalid"
**Solution**: Verify your Khalti/Esewa credentials are correct and still active

### Issue: "Transaction verification failed"
**Solution**: Ensure backend has access to secret keys and backend endpoint is running

### Issue: "CORS errors on payment request"
**Solution**: Configure CORS properly on backend or use backend proxy

---

## Support & Resources

- **Khalti Documentation**: https://docs.khalti.com
- **Esewa Documentation**: https://esewa.com.np/developers
- **Café System Issues**: Check API_INTEGRATION.md for general API setup

---

## Version History

- **v1.0** (Current) - Initial payment system with Khalti and Esewa support
- Features: Order payments, Booking deposits, Demo mode

---

## Next Steps

1. Get merchant accounts from Khalti and Esewa
2. Add environment variables to your project
3. Implement backend API endpoints for payment processing
4. Replace payment service URLs in `lib/payment-api.ts`
5. Test in sandbox environment
6. Deploy to production

---
