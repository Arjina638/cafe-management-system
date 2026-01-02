import axiosInstance from "./api"

export const paymentService = {
  processPayment: (data) => axiosInstance.post("/payment", data),
  getPayments: () => axiosInstance.get("/payment"),
  getPaymentById: (id) => axiosInstance.get(`/payment/${id}`),
}
