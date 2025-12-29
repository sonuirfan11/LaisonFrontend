import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {useState,useEffect} from "react"
import { toast } from 'react-toastify';
import {
  UserIcon,
  PencilSquareIcon,
  BookmarkSquareIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";



export default function AccountPage() {
  const navigate = useNavigate();
  const { user, loading, logout } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  
  
    const handleLogout = async (e) => {
             logout();
              navigate("/");
              toast.success("Logout Successful!", {
                  position: "top-center",
                  autoClose: 3000,
                  pauseOnHover: false,
              });
    };
  
  const MenuItem = ({ icon, text, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-4 bg-white border-b hover:bg-gray-50"
    >
      <div className="flex items-center space-x-3">
        <div className="text-gray-600">{icon}</div>
        <span className="text-gray-800 text-sm font-medium">{text}</span>
      </div>
      <ChevronRightIcon className="h-4 w-4 text-gray-400" />
    </button>
  );

  return (
    <div className="bg-gray-100 min-h-screen w-full flex  ">
      {/* Responsive container */}
      <div className="w-full lg:w-[25%] bg-white shadow-sm">
        {/* Username section */}
        <div className="p-6 flex items-center space-x-3 border-b">
          <UserIcon className="h-12 w-12 text-gray-600 bg-gray-200 rounded-full p-2" />
          <div>
            <h2 className="text-lg font-semibold text-black">{user?.first_name || user?.mobile || "Hi, User"}</h2>
            <p className="text-sm text-gray-500">View and edit your profile</p>
          </div>
        </div>

        {/* Menu list */}
        <MenuItem
          icon={<PencilSquareIcon className="h-5 w-5" />}
          onClick={() => navigate("/account/profile")}
          text="Edit Profile"
        />
        <MenuItem
          icon={<BookmarkSquareIcon className="h-5 w-5" />}
          text="Bookings"
        />
        <MenuItem icon={<StarIcon className="h-5 w-5" />} text="Ratings" />
        <MenuItem
            icon={<MapPinIcon className="h-5 w-5" />}
            onClick={() => navigate("/account/address")}
            text="Addresses" />
        <MenuItem
          icon={<QuestionMarkCircleIcon className="h-5 w-5" />}
          text="Help"
        />

        {/* Logout button */}
        <div className="border-t">
          <button
            onClick={() => console.log("Logging out...")}
            className="w-full flex items-center justify-center space-x-2 text-red-500 font-semibold p-4"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            <span  onClick={() => {
                              handleLogout()
                            }}>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
