import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10,
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15,
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8,
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Product Ratings</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
             
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;