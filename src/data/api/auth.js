import axios from "axios";

export const API_BASE_URL = "http://localhost:8000";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// instance without interceptors
const plainAxios = axios.create();

// 🔐 Attach Access Token automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔄 Auto-refresh access token
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh = localStorage.getItem("refresh");
      if (!refresh) return Promise.reject(error);

      try {
        const ref = await plainAxios.post(
          `${API_BASE_URL}/auth/token/refresh/`,
          { refresh }
        );

        const newAccess = ref.data.access;
        localStorage.setItem("access", newAccess);

        // retry request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return api(originalRequest);

      } catch (err) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  }
);

// ------------------------------------------------------------
export const sendOtpApi = (mobile) =>
  plainAxios.post(`${API_BASE_URL}/auth/login/otp`, { mobile });

export const verifyOtpApi = (mobile, otp) =>
  plainAxios.post(`${API_BASE_URL}/auth/login/verify`, { mobile, otp });

export const fetchUserProfileApi = () => api.get(`/auth/user/profile`);

export const logoutApi = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};
export const editUserProfileApi = (formData) => {
      return api.put(`/auth/user/profile/update`, formData);
};


export default api;



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