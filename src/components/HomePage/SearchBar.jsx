import { useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [recentSearches, setRecentSearches] = useState([
    "Plumbing Service",
    "Electrician near me",
    "AC Repair",
    "Carpenter",
  ]);

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim()) {
      setRecentSearches((prev) => {
        const updated = [query, ...prev.filter((item) => item !== query)];
        return updated.slice(0, 5);
      });
      setQuery("");
      setShowDropdown(false);
    }
  };

  return (
    <div className="relative w-full max-w-3xl text-black">
      {/* Desktop / Tablet Search Bar */}
      <div className="hidden md:flex items-center bg-white rounded-full shadow-lg p-3 border border-gray-300">
        <Search className="text-gray-500 ml-2" />
        <input
          type="text"
          placeholder="Search for task or help..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
          onKeyDown={handleSearch}
          className="flex-1 px-3 py-2 text-lg outline-none"
        />
      </div>

      {/* Dropdown for Desktop */}
      {showDropdown && recentSearches.length > 0 && (
        <div className="hidden md:block absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg shadow-md mt-2 z-50">
          {recentSearches.map((item, idx) => (
            <div
              key={idx}
              onMouseDown={() => {
                setQuery(item);
                setShowDropdown(false);
              }}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* Mobile Search Bar → navigates to /search */}
      <div
        onClick={() => navigate("/search")}
        className="flex md:hidden items-center bg-white rounded-full shadow-md p-3 border border-gray-300 cursor-pointer"
      >
        <Search className="text-gray-500 ml-2" />
        <span className="px-3 py-2 text-gray-500 text-lg">Search for task or help...</span>
      </div>
    </div>
  );
}
