import React from "react";

export default function RatingBar({
  rating,
  count,
  total,
  color = "#facc15",
  showCount = true,
}) {
  const percentage = total ? Math.round((count / total) * 100) : 0;

  return (
    <div className="flex items-center space-x-3">
      {/* Rating label */}
      <div className="w-10 text-sm text-gray-700">
        {rating} ★
      </div>

      {/* Progress bar */}
      <div className="flex-1 h-2 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full transition-all"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        />
      </div>
      
      
      {showCount && (
        <div className="w-10 text-sm text-gray-600 text-right">
          {count}
        </div>
      )}
    </div>
  );
}
