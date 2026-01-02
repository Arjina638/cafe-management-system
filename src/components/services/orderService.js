import axiosInstance from "./api"

export const orderService = {
  getOrders: () => axiosInstance.get("/order"),
  getOrderById: (id) => axiosInstance.get(`/order/${id}`),
  createOrder: (data) => axiosInstance.post("/order", data),
  updateOrderStatus: (id, status) => axiosInstance.put(`/order/${id}`, { status }),
  getAllOrders: () => axiosInstance.get("/order/admin/all"),
}
