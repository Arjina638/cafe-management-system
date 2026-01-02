/**
 * @typedef {"customer" | "staff" | "admin"} UserRole
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} email
 * @property {string} name
 * @property {UserRole} role
 * @property {string} createdAt
 */

/**
 * @typedef {Object} MenuItem
 * @property {string} id
 * @property {string} name
 * @property {string} category
 * @property {number} price
 * @property {string} description
 * @property {string} [image]
 * @property {boolean} available
 */

/**
 * @typedef {Object} OrderItem
 * @property {string} menuItemId
 * @property {string} name
 * @property {number} quantity
 * @property {number} price
 */

/**
 * @typedef {Object} Order
 * @property {string} id
 * @property {OrderItem[]} items
 * @property {"pending" | "preparing" | "ready" | "completed"} status
 * @property {number} totalPrice
 * @property {string} customerName
 * @property {string} [notes]
 * @property {string} createdAt
 * @property {string} [completedAt]
 */

/**
 * @typedef {Object} InventoryItem
 * @property {string} id
 * @property {string} name
 * @property {number} quantity
 * @property {string} unit
 * @property {number} reorderLevel
 * @property {string} supplier
 */

/**
 * @typedef {Object} SalesReport
 * @property {string} date
 * @property {number} totalSales
 * @property {number} totalOrders
 * @property {MenuItem[]} topItems
 * @property {number} revenue
 */

/**
 * @typedef {Object} TableReservation
 * @property {string} id
 * @property {string} customerName
 * @property {string} customerEmail
 * @property {string} customerPhone
 * @property {number} numberOfGuests
 * @property {string} reservationDate
 * @property {string} reservationTime
 * @property {string} [specialRequests]
 * @property {"pending" | "confirmed" | "completed" | "cancelled"} status
 * @property {number} totalPrice
 * @property {"khalti" | "esewa"} [paymentMethod]
 * @property {"pending" | "paid" | "failed"} paymentStatus
 * @property {string} createdAt
 */

/**
 * @typedef {Object} PaymentDetails
 * @property {string} paymentId
 * @property {number} amount
 * @property {"khalti" | "esewa"} paymentMethod
 * @property {"pending" | "success" | "failed"} status
 * @property {string} [transactionId]
 * @property {string} [orderId]
 * @property {string} [bookingId]
 * @property {string} createdAt
 */

/**
 * @typedef {Object} LoginCredentials
 * @property {string} email
 * @property {string} password
 */

/**
 * @typedef {Object} SignupCredentials
 * @property {string} email
 * @property {string} password
 * @property {string} name
 */

/**
 * @typedef {Object} AuthResponse
 * @property {User} user
 * @property {string} token
 * @property {string} [refreshToken]
 */

/**
 * @typedef {Object} AuthContextType
 * @property {User|null} user
 * @property {string|null} token
 * @property {boolean} loading
 * @property {string|null} error
 * @property {(credentials: LoginCredentials) => Promise<void>} login
 * @property {(credentials: SignupCredentials) => Promise<void>} signup
 * @property {() => void} logout
 * @property {boolean} isAuthenticated
 */
