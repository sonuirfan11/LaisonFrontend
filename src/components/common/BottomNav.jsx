import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  MapPinIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Location", path: "/location", icon: MapPinIcon },
    { name: "Wishlist", path: "/wishlist", icon: HeartIcon },
    { name: "Cart", path: "/cart", icon: ShoppingCartIcon },
    { name: "Account", path: "/account", icon: UserIcon },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t border-gray-200 md:hidden z-50">
      <ul className="flex justify-around">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || location.pathname.startsWith(item.path + "/");

          const Icon = item.icon;

          return (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex flex-col items-center py-2 px-3 transition-all duration-300 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 hover:text-blue-500"
                }`}
              >
                {/* Icon */}
                <div
                  className={`relative flex flex-col items-center transition-all duration-300 ${
                    isActive ? "translate-y-[-6px]" : ""
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 transition-all duration-300 ${
                      isActive
                        ? "drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"
                        : ""
                    }`}
                  />
                  <span className="text-xs mt-1">{item.name}</span>

                  {/* Active Glow Circle Behind */}
                  {isActive && (
                    <span className="absolute top-1/2 left-1/2 w-10 h-10 bg-blue-100 rounded-full -z-10 blur-md animate-pulse"></span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
