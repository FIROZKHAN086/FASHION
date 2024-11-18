import React, { useState } from 'react';

function SareeListing() {
  const [cart, setCart] = useState([]);  // To store items added to the cart
  const [showCart, setShowCart] = useState(false);  // To toggle cart visibility

  const sarees = [
    {
      id: 1,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpFpxgSqzr0loXyZBZlhbksm7jkRoNpx6xA&s',
      brand: 'Zinariya Fab',
      title: 'Striped Bollywood Satin Saree',
      color: 'Blue, Beige',
      price: 289,
      originalPrice: 2499,
      discount: 88,
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOICLXWRLbE1qF2x3JetmwpBEwUe0-wpA-Mg&s',
      brand: 'Zinariya Fab',
      title: 'Striped Bollywood Satin Saree',
      color: 'Purple, Beige',
      price: 289,
      originalPrice: 2499,
      discount: 88,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      brand: 'KanjiQueen',
      title: 'Woven Kanjivaram Silk Blend Saree',
      color: 'Purple, Beige',
      price: 489,
      originalPrice: 4999,
      discount: 90,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      brand: 'KanjiQueen',
      title: 'Woven Kanjivaram Silk Blend Saree',
      color: 'Purple, Beige',
      price: 489,
      originalPrice: 4999,
      discount: 90,
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
      brand: 'KanjiQueen',
      title: 'Woven Kanjivaram Silk Blend Saree',
      color: 'Purple, Beige',
      price: 489,
      originalPrice: 4999,
      discount: 90,
    },
    // Additional saree objects...
  ];

  // Add saree to cart
  const addToCart = (saree) => {
    setCart((prevCart) => [...prevCart, saree]);
    setShowCart(true);  // Automatically open cart when item is added
  };

  // Remove saree from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Close cart
  const closeCart = () => {
    setShowCart(false);  // Hide the cart
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 p-4">
        <h2 className="font-semibold text-lg">Categories</h2>
        <ul className="mt-2 space-y-2">
          <li>Women's Sarees</li>
        </ul>
      </aside>

      {/* Product Listing */}
      <div className="w-full md:w-3/4 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sarees.map((saree) => (
            <div key={saree.id} className="bg-white border rounded-lg shadow">
              <img
                src={saree.image}
                alt={saree.title}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold">{saree.brand}</h3>
                <p className="text-gray-500">{saree.title}</p>
                <p className="text-gray-500">{saree.color}</p>
                <div className="flex items-center mt-2">
                  <span className="text-xl font-bold text-green-600">₹{saree.price}</span>
                  <span className="line-through ml-2 text-gray-500">₹{saree.originalPrice}</span>
                  <span className="ml-2 text-green-600">{saree.discount}% off</span>
                </div>
                <button
                  onClick={() => addToCart(saree)}
                  className="bg-black text-sm rounded text-white p-2 m-2 mx-3 hover:scale-105"
                >
                  Buy Now...
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      {showCart && (
        <div className="w-full md:w-1/4 p-4 bg-gray-100">
          <h2 className="font-semibold text-lg flex justify-between">
            Your Cart
            <button
              onClick={closeCart}
              className="text-red-500 text-sm hover:text-red-700"
            >
              Close
            </button>
          </h2>
          <div className="mt-4">
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="text-gray-500 text-xs">{item.color}</p>
                    <span className="text-green-600 font-bold">₹{item.price}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SareeListing;
