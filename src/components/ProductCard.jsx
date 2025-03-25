import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden max-w-sm p-4 bg-zinc-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="mt-2 text-gray-700">
          <strong>Average Rating:</strong> {product.avgRating.toFixed(1)} ⭐
        </p>
        <p className="text-gray-500">Total Ratings: {product.totalRatings}</p>

        {/* Include RatingWidget */}
        <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
      </div>
    </div>
  );
};

export default ProductCard;