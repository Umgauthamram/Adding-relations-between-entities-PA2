import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleMouseEnter = (newRating) => {
    setHoveredRating(newRating);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) return;
    onRatingSubmit(productId, rating);
    setRating(0);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`cursor-pointer text-2xl ${
              (hoveredRating || rating) >= star
                ? "text-yellow-500"
                : "text-gray-400"
            }`}
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
          >
            ★
          </span>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;