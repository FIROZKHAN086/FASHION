import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  // Get product data from the location state
  const location = useLocation();
  const product = location.state?.product;

  if (product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-10 bg-white border rounded-lg shadow-lg p-6">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{product.brand}</h3>
        <p className="text-gray-500">{product.title}</p>
        <p className="text-gray-500">{product.color}</p>
        <div className="flex items-center mt-2">
          <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
          <span className="line-through ml-2 text-gray-500">₹{product.originalPrice}</span>
          <span className="ml-2 text-green-600">{product.discount}% off</span>
        </div>
        <span className="text-green-600 text-sm font-medium mt-2 inline-block bg-green-100 px-2 py-1 rounded">Hot Deal</span>
      </div>
    </div>
  );
}

export default ProductDetail;
