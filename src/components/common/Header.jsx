import { useState, useCallback, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import {
  GoogleMap,
  Marker,
  useJsApiLoader
} from "@react-google-maps/api";
import { logoutApi } from "../../data/api/auth";
import { ShoppingCartIcon, UserIcon, MapPinIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { toast } from 'react-toastify';
const containerStyle = {
  width: "100%",
  height: "300px",
};
const defaultCenter = { lat: 28.6139, lng: 77.209 }; // Delhi as default

export default function Header() {
  const { user, loading } = useAuth();
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [location, setLocation] = useState("Select Location");
  const [markerPos, setMarkerPos] = useState(defaultCenter);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

   useEffect(() => {
    if (!loading) {
      setIsLoggedIn(!!user); // true if user exists, false otherwise
    }
  }, [user, loading]);

  const handleLogout = async (e) => {
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
             setIsLoggedIn(false);
             setIsOpen(false);
//             navigate("/");
            toast.success("Logout Successful!", {
                position: "top-center",
                autoClose: 3000,
                pauseOnHover: false,
            });
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyD5bRJMM32RTzv8knbEqsHNpZuF8ZkUtcw", // Replace with your Google Maps API key
  });

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const coords = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setMarkerPos(coords);
        reverseGeocode(coords);
      });
    }
  };

  const reverseGeocode = (coords) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: coords }, (results, status) => {
      if (status === "OK" && results[0]) {
        setLocation(results[0].formatted_address);
      }
    });
  };

  const searchAddress = (address) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK" && results[0]) {
        const coords = results[0].geometry.location;
        const pos = { lat: coords.lat(), lng: coords.lng() };
        setMarkerPos(pos);
        setLocation(results[0].formatted_address);
      }
    });
  };

  const onMarkerDragEnd = useCallback((e) => {
    const coords = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    setMarkerPos(coords);
    reverseGeocode(coords);
  }, []);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center space-x-2">
                <img src={logo} alt="Logo" className="h-15 w-auto object-contain" />
              </a>
            </div>

            {/* Location Selector */}
            <button
              onClick={() => setShowLocationModal(true)}
              className="flex items-center space-x-2 border px-5 py-3 rounded-lg hover:bg-gray-50 transition w-100"
            >
              <MapPinIcon className="h-5 w-5 text-black" />
              <span className="text-gray-700 text-sm">{location}</span>
            </button>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <a href="/cart" className="relative text-gray-700 hover:text-blue-600 transition-colors">
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </a>
              <div className="relative hidden md:flex">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <UserIcon className="h-6 w-6" />
                  </button>

              {isOpen && (
                <div className="absolute right-0 top-5 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <ul className="py-2 text-sm text-gray-700">
                    {!isLoggedIn ? (
                      <li>
                        <a
                          href="/login"
                          className="block px-4 py-2 hover:bg-gray-100 transition"
                          onClick={() => setIsOpen(false)}
                        >
                          Login
                        </a>
                      </li>
                    ) : (
                      <>
                        <li>
                          <a
                            href="/account"
                            className="block px-4 py-2 hover:bg-gray-100 transition"
                            onClick={() => setIsOpen(false)}
                          >
                            Account
                          </a>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              handleLogout()
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 transition"
                          >
                            Logout {user?.first_name || user?.mobile}
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              )}
</div>
            </div>
          </div>
        </div>
      </header>

      {/* Transparent Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowLocationModal(false)}
          ></div>

          <div className="relative text-black bg-white/90 backdrop-blur-xl rounded-xl shadow-xl p-6 max-w-lg w-full border border-gray-200">
            <h3 className="text-lg font-semibold mb-4">Choose Your Location</h3>
             {/* Dismiss Button */}
      <button
        onClick={() => setShowLocationModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
        aria-label="Close"
      >
        ✕
      </button>

            {/* Option Buttons */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={getCurrentLocation}
                className="flex-1 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Use My Current Location
              </button>
              <input
                type="text"
                placeholder="Enter location"
                className="flex-1 border rounded p-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchAddress(e.target.value);
                }}
              />
            </div>

            {/* Google Map */}
            {isLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={markerPos}
                zoom={14}
              >
                <Marker
                  position={markerPos}
                  draggable
                  onDragEnd={onMarkerDragEnd}
                />
              </GoogleMap>
            )}

            <button
              onClick={() => setShowLocationModal(false)}
              className="w-full bg-green-600 text-white rounded-lg p-3 mt-4 hover:bg-green-700"
            >
              Save Location
            </button>
          </div>
        </div>
      )}
    </>
  );
}
