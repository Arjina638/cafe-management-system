import axiosInstance from "./api"

export const inventoryService = {
  getInventory: () => axiosInstance.get("/inventory"),
  getInventoryItem: (id) => axiosInstance.get(`/inventory/${id}`),
  updateInventory: (id, data) => axiosInstance.put(`/inventory/${id}`, data),
}
