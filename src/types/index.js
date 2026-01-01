// Users
const mockUsers = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    password: "1234",
    role: "admin",
    avatar: "https://randomuser.me/api/portraits/lego/1.jpg"
  },
  {
    id: "2",
    name: "Staff Member",
    email: "employee@example.com",
    password: "1234",
    role: "staff",
    avatar: "https://randomuser.me/api/portraits/lego/2.jpg"
  },
  {
    id: "3",
    name: "Customer",
    email: "customer@example.com",
    password: "1234",
    role: "customer",
    avatar: "https://randomuser.me/api/portraits/lego/3.jpg"
  }
];

// Tables
const mockTables = [
  { id: "1", tableNumber: 1, capacity: 4, status: "available" },
  { id: "2", tableNumber: 2, capacity: 2, status: "occupied" },
  { id: "3", tableNumber: 3, capacity: 6, status: "reserved" }
];

// Menu Categories
const mockCategories = [
  { id: "1", name: "Coffee" },
  { id: "2", name: "Snacks" },
  { id: "3", name: "Desserts" }
];

// Menu Items (like Services in your venue system)
const mockMenuItems = [
  {
    id: "1",
    name: "Cappuccino",
    description: "Hot coffee with milk foam",
    price: 150,
    categoryId: "1",
    available: true,
    image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
  },
  {
    id: "2",
    name: "Latte",
    description: "Creamy milk coffee",
    price: 180,
    categoryId: "1",
    available: true,
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
  },
  {
    id: "3",
    name: "Chocolate Cake",
    description: "Rich chocolate dessert",
    price: 220,
    categoryId: "3",
    available: true
  }
];

// Orders (like Bookings)
const mockOrders = [
  {
    id: "1",
    userId: "3",
    tableId: "1",
    items: [
      { menuItemId: "1", name: "Cappuccino", price: 150, quantity: 2 },
      { menuItemId: "3", name: "Chocolate Cake", price: 220, quantity: 1 }
    ],
    totalAmount: 520,
    status: "completed",
    createdAt: new Date("2025-01-01T10:30:00Z"),
    specialRequests: "Extra sugar for cappuccino"
  },
  {
    id: "2",
    userId: "3",
    tableId: "2",
    items: [
      { menuItemId: "2", name: "Latte", price: 180, quantity: 1 }
    ],
    totalAmount: 180,
    status: "preparing",
    createdAt: new Date("2025-01-01T11:00:00Z")
  }
];

// Payments
const mockPayments = [
  { id: "1", orderId: "1", amount: 520, method: "cash", status: "paid", paidAt: new Date("2025-01-01T10:45:00Z") },
  { id: "2", orderId: "2", amount: 180, method: "online", status: "paid", paidAt: new Date("2025-01-01T11:10:00Z") }
];

// Reservations
const mockReservations = [
  {
    id: "1",
    userId: "3",
    tableId: "3",
    date: new Date("2025-01-02"),
    time: "18:00",
    guests: 5,
    status: "confirmed",
    specialRequests: "Near window if possible"
  }
];

// Export all mock data
module.exports = {
  mockUsers,
  mockTables,
  mockCategories,
  mockMenuItems,
  mockOrders,
  mockPayments,
  mockReservations
};
