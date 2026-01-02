import axiosInstance from "./api"

export const searchService = {
  search: (query) => axiosInstance.get(`/search?q=${query}`),
}
