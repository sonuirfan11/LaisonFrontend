import { createContext, useContext, useEffect, useState } from "react";
import { fetchUserProfileApi } from "../data/api/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (!access) {
      setLoading(false);
      return;
    }

    fetchUserProfileApi()
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// import { createContext, useContext, useEffect, useState } from "react";
// import { fetchUserProfileApi } from "../data/api/auth";
//
// const AuthContext = createContext();
//
// export const useAuth = () => useContext(AuthContext);
//
// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     // Fetch user only once (on app load)
//     fetchUserProfileApi()
//       .then((res) => setUser(res.data))
//       .catch(() => setUser(null))
//       .finally(() => setLoading(false));
//   }, []);
//
//   return (
//     <AuthContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }