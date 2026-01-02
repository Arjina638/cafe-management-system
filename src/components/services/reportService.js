import axiosInstance from "./api"

export const reportService = {
  getSalesReport: () => axiosInstance.get("/report/sales"),
  getRevenueReport: () => axiosInstance.get("/report/revenue"),
  getDashboardData: () => axiosInstance.get("/dashboard"),
}
