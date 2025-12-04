import { useState } from "react";
import { Star } from "lucide-react";

export default function ServiceCard({ service }) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  return (
    <div className="flex bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      {/* Left: Image + Quantity */}
      <div className="w-40 flex flex-col items-center justify-between p-3">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-28 object-cover rounded-lg"
        />

        {/* Quantity Selector */}
        <div className="flex items-center space-x-2 mt-3">
          <button
            onClick={decrease}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="text"
            value={quantity}
            readOnly
            className="w-10 text-center border rounded"
          />
          <button
            onClick={increase}
            className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      {/* Right: Content */}
      <div className="flex-1 p-3 flex flex-col justify-between">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {service.title}
        </h3>

        {/* Rating + Reviews */}
        <div className="flex items-center text-sm text-gray-600 mt-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
          <span>{service.rating}</span>
          <span className="ml-2 text-gray-500">
            ({service.totalReviews} reviews)
          </span>
        </div>

        {/* Price + Time */}
        <div className="mt-2 text-sm text-gray-700 font-medium">
          Starting from <span className="text-black">₹{service.price}</span>
          <span className="ml-2 text-gray-500">• {service.time}</span>
        </div>
      </div>
    </div>
  );
}
