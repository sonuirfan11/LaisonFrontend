import api from "./axioswrapper"

export const fetchAddress = () => api.get("/auth/address/client/");

export const createAddress = (data) =>
  api.post("/auth/address/client/", data);

//export const updateAddress = (data) =>
//  api.put("/auth/address/client/detail/", data);
export const updateAddress = (id, data) =>
  api.put(`/auth/address/client/detail/${id}/`, data);

export const fetchAddressDetail = () =>
  api.get("/auth/address/client/detail/");

export const deleteAddress = (id, data) =>
  api.delete(`/auth/address/client/detail/${id}/`);
