import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/common/Header";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/Home/Index";
import SearchPage from "./pages/Home/SearchPage";
import BottomNav from "./components/common/BottomNav";
import AccountPage from "./pages/Account/AccountPage";
import EditProfilePage from "./pages/Account/EditProfilePage";
import ManageAddressPage from "./pages/Account/Address";
import CategoryPage from "./pages/Categories/CategoryPage";
import ServiceDetailPage from "./pages/Categories/ServiceDetailPage";
import Login from "./pages/Account/Login";
import { ToastContainer, toast } from 'react-toastify';
import ProtectedRoute  from "./pages/Home/ProtectedRoute ";


function Layout() {
  const location = useLocation();

  // Hide Header on Search Page
  const hideHeader = location.pathname === "/search";

  return (
    <div className="flex flex-col min-h-screen">
      {!hideHeader && <Header />}

      <div className="flex flex-1 pb-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchPage />} />
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="dashboard" element={<DashboardLayout />}> */}
          <Route  element={<ProtectedRoute />} >
            <Route path="account" element={<AccountPage />} />
            <Route path="account/profile" element={<EditProfilePage />} />
            <Route path="account/address" element={<ManageAddressPage />} />
          </Route>

          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/service/:id" element={<ServiceDetailPage />} />
        </Routes>
      </div>
      {!hideHeader && <Footer />}
      {!hideHeader && <BottomNav />}

    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
      <ToastContainer />
    </Router>
  );
}

export default App;
