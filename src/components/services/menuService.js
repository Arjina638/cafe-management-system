import axiosInstance from "./api"

export const menuService = {
  getMenuItems: () => axiosInstance.get("/menu"),
  getMenuItemById: (id) => axiosInstance.get(`/menu/${id}`),
  createMenuItem: (data) => axiosInstance.post("/menu", data),
  updateMenuItem: (id, data) => axiosInstance.put(`/menu/${id}`, data),
  deleteMenuItem: (id) => axiosInstance.delete(`/menu/${id}`),
}

export const categoryService = {
  getCategories: () => axiosInstance.get("/category"),
  getCategoryById: (id) => axiosInstance.get(`/category/${id}`),
  createCategory: (data) => axiosInstance.post("/category", data),
  updateCategory: (id, data) => axiosInstance.put(`/category/${id}`, data),
  deleteCategory: (id) => axiosInstance.delete(`/category/${id}`),
}
