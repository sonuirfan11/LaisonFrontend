import React from "react";

export default function AverageRating({
  average,
  totalRatings,
  totalReviews,
  max = 5,
}) {
  return (
    <div className="flex flex-col items-center text-center space-y-1">
      {/* Average rating */}
      <div className="text-4xl font-bold text-gray-900">
        {average.toFixed(1)}
        <span className="text-lg text-gray-500">/{max}</span>
      </div>

      {/* Stars */}
      <div className="flex items-center space-x-1 text-yellow-400">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i}>
            {i < Math.round(average) ? "★" : "☆"}
          </span>
        ))}
      </div>

      {/* Totals */}
      <div className="text-sm text-gray-500">
        {totalRatings} ratings · {totalReviews} reviews
      </div>
    </div>
  );
}
