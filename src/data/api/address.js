import api from '../auth.js'

export const fetchAddress = () => api.get("/api/address/");
export const updateAddress = (data) => api.put("/api/address/", data);