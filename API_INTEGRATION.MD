# Café Management Website - API Integration Guide

## Overview
This document explains how to integrate the frontend with your backend API.

## Setup

1. **Environment Variables**
   Create a `.env.local` file in your project root:
   ```
   REACT_APP_API_URL=http://localhost:3001/api
   ```

2. **Update the API URL**
   In `lib/api.ts`, replace `http://localhost:3001/api` with your actual backend URL.

## API Endpoints Required

### Menu Endpoints
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get single menu item
- `POST /api/menu` - Create menu item
- `PUT /api/menu/:id` - Update menu item
- `DELETE /api/menu/:id` - Delete menu item

### Orders Endpoints
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create new order
- `PUT /api/orders/:id` - Update order
- `PATCH /api/orders/:id/status` - Update order status

### Inventory Endpoints
- `GET /api/inventory` - Get all inventory items
- `GET /api/inventory/:id` - Get single item
- `POST /api/inventory` - Create inventory item
- `PUT /api/inventory/:id` - Update inventory item
- `PATCH /api/inventory/:id/quantity` - Update quantity
- `DELETE /api/inventory/:id` - Delete inventory item

### Sales Endpoints
- `GET /api/sales/daily` - Get daily sales data
- `GET /api/sales/weekly` - Get weekly sales data
- `GET /api/sales/monthly` - Get monthly sales data
- `GET /api/sales/report?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` - Get custom report

## Using the Hooks

### Example: Fetching Menu Items
```tsx
import { useMenuItems } from "@/hooks/useMenuItems"

export default function MenuComponent() {
  const { items, loading, error } = useMenuItems()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}
```

### Example: Creating an Order
```tsx
import { useOrders } from "@/hooks/useOrders"

export default function CheckoutComponent() {
  const { createOrder } = useOrders()

  const handleOrder = async () => {
    try {
      const order = await createOrder({
        customerName: "John",
        items: [{ menuItemId: "1", quantity: 2 }],
      })
      console.log("Order created:", order)
    } catch (error) {
      console.error("Failed to create order:", error)
    }
  }

  return <button onClick={handleOrder}>Place Order</button>
}
```

## Data Models

All data models are defined in `types/index.ts`:
- `MenuItem` - Menu item definition
- `OrderItem` - Item within an order
- `Order` - Customer order
- `InventoryItem` - Inventory stock item
- `SalesReport` - Sales analytics data

## Error Handling

The API layer includes error handling. Any API call can throw an error which should be caught:

```tsx
try {
  const result = await menuAPI.getAll()
} catch (error) {
  console.error("API Error:", error.message)
}
```

## Notes

- The frontend is built as a React SPA and uses mock data by default
- To use real data, ensure your backend implements the API endpoints specified above
- CORS may need to be configured on your backend for local development
- Consider adding authentication tokens to headers if needed
