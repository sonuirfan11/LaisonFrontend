
import axios from "axios";


const api = axios.create({
  baseURL:import.meta.env.VITE_URL,
});

// instance without interceptors
// const plainAxios = axios.create();

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
        const ref = await api.post(
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
export default api;