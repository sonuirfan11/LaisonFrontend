import { FaClipboardCheck, FaStar, FaUsers } from "react-icons/fa";

export default function StatsSection({category}) {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 
                    rounded-2xl p-6 md:p-10 
                    flex flex-col md:flex-row justify-around items-center 
                    gap-6 my-6 shadow-md">
      
      {/* Bookings */}
      <div className="text-center">
        <FaClipboardCheck className="text-4xl text-blue-600 mx-auto mb-2" />
        <p className="text-3xl font-bold text-gray-800">{category.bookings}+</p>
        <p className="text-gray-600">Bookings</p>
      </div>

     {/* Rating */}
      <div className="text-center">
        <FaStar className="text-4xl text-yellow-500 mx-auto mb-2" />
        <p className="text-3xl font-bold text-gray-800">{category.rating}</p>
        <p className="text-gray-600">Average Rating</p>
      </div>

      {/* Reviews */}
      <div className="text-center">
        <FaUsers className="text-4xl text-teal-600 mx-auto mb-2" />
        <p className="text-3xl font-bold text-gray-800">{category.totalRatings}+</p>
        <p className="text-gray-600">Total Reviews</p>
      </div>
    </div>
  );
}
