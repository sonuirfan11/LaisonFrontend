import { useState } from "react";
import { Search, Flame, Clock, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Plumbing Service",
    "Electrician near me",
    "AC Repair",
  ]);

  const trending = [
    { icon: <Flame className="text-red-500" />, label: "House Cleaning" },
    { icon: <Flame className="text-orange-500" />, label: "Salon at Home" },
    { icon: <Flame className="text-blue-500" />, label: "Carpenter" },
  ];

  return (
    <div className="w-full h-screen bg-white flex flex-col text-black">
      {/* Header Search Bar */}
      <div className="flex items-center p-3 border-b shadow-md sticky top-0 bg-white">
        <ArrowLeft
          className="mr-3 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 w-full">
          <Search className="text-gray-500 mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Search for task or help..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none"
            autoFocus
          />
        </div>
      </div>

      {/* Trending Searches */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-700 mb-2">Trending Searches</h3>
        <div className="flex flex-wrap gap-3">
          {trending.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Searches */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-700 mb-2">Recent Searches</h3>
        {recentSearches.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 py-2 border-b last:border-none cursor-pointer"
          >
            <Clock className="text-gray-500" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
