const ReviewItem = ({ rating, name, date, review }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 border-b  border-gray-300">
      
      {/* Left section */}
      <div className="md:w-1/4 flex md:flex-col items-start gap-2">
        
        {/* Rating badge */}
        <span className="inline-flex items-center gap-1 bg-green-600 text-white text-sm font-semibold px-2 py-1 rounded">
           {rating}
        </span>

        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 text-gray-700 text-sm leading-relaxed">
        {review}
      </div>
    </div>
  );
};

export default ReviewItem;
