import axios from "axios";
import api from "./axioswrapper"


export const sendOtpApi = (mobile) =>
  api.post(`/auth/login/otp`, { mobile });

export const verifyOtpApi = (mobile, otp) =>
  api.post(`/auth/login/verify`, { mobile, otp });

export const fetchUserProfileApi = () => api.get(`/auth/user/profile`);

export const logoutApi = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};
export const editUserProfileApi = (formData) => {
      return api.put(`/auth/user/profile/update`, formData);
};




//import axios from "axios";
//
//const API_BASE_URL = "http://localhost:8000";
//
//axios.defaults.withCredentials = true;
//export const sendOtpApi = async (mobile) => {
//  return axios.post(`${API_BASE_URL}/auth/login/otp`, { mobile });
//};
//
//export const verifyOtpApi = async (mobile, otp) => {
//  return axios.post(`${API_BASE_URL}/auth/login/verify`, { mobile, otp });
//};
//
//
//// 👤 Fetch logged-in user's profile using JWT cookie
//export const fetchUserProfileApi = async () => {
//  return axios.get(`${API_BASE_URL}/auth/user/profile`);
//};
//
//// 🚪 Logout user (optional)
//export const logoutApi = async () => {
//  return axios.post(`${API_BASE_URL}/auth/user/logout`);
//};