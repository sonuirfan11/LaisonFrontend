import { Outlet, useLocation } from "react-router-dom";
import AccountPage from "./AccountPage";

export default function AccountLayout() {
  const location = useLocation();

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col lg:flex-row">
      {/* Left Menu */}
      <div className="lg:w-[30%] w-full border-r">
        <AccountPage />
      </div>

      {/* Right content (only visible on large screens) */}
      <div className="hidden lg:block lg:flex-1 p-6">
        {location.pathname === "/account" ? (
          <p className="text-gray-500">Select an option from the menu</p>
        ) : (
          <Outlet />
        )}
      </div>

      {/* On mobile/tablet, subpages open as full screen */}
      <div className="lg:hidden w-full">
        <Outlet />
      </div>
    </div>
  );
}
