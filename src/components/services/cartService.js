
import axiosInstance from "./api"

export const cartService = {
  getCart: () => axiosInstance.get("/cart"),
  addToCart: (data) => axiosInstance.post("/cart", data),
  updateCart: (itemId, data) => axiosInstance.put(`/cart/${itemId}`, data),
  removeFromCart: (itemId) => axiosInstance.delete(`/cart/${itemId}`),
  clearCart: () => axiosInstance.delete("/cart"),
}
