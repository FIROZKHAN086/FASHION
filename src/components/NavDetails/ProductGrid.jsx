import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  
  return (
    <div className="border rounded-lg shadow-md  p-4 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-bold">₹{product.price}</span>
        <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
      </div>
      <p className="text-sm text-gray-600 mt-1">{product.sizes.join(', ')}</p>
      <p className={`text-sm mt-1 ${product.isLimited ? 'text-red-600' : 'text-green-600'}`}>
        {product.isLimited ? 'Only few left' : 'Hot Deal'}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

const ProductGrid = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1608877607536-f57bf6004c58?q=80&w=1561&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Stylish Casual Shirt',
      price: 299,
      originalPrice: 999,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: true,
    },
    {
      image: 'https://media.istockphoto.com/id/1176789549/photo/handsome-gentleman-downtown.jpg?s=1024x1024&w=is&k=20&c=psf6n8f2mWlkiCxZKh4LHJeEjda-4dv4H734xm8MBiA=',
      title: 'Round Neck T-Shirt',
      price: 199,
      originalPrice: 799,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: false,
    },
    {
      image: 'https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2023/09/hockerty_french_man_outfit_slim_fit_trousers_a_crisp_white_shir_6051949a_c2af_4c90_8d08_a382a7d5aeec.jpg',
      title: 'Printed Summer Shirt',
      price: 349,
      originalPrice: 1299,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: false,
    },
    {
      image: 'https://t3.ftcdn.net/jpg/01/91/72/42/360_F_191724216_CJMKL3xiH5tPoqYoU4RYFN3YITGHdSHg.jpg',
      title: 'Trendy Polo T-shirt',
      price: 399,
      originalPrice: 999,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: true,
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQTTmLTXHuVFRtTEc8yC-KNmTgj7V3PsHPw&s',
      title: 'Trendy Polo T-shirt',
      price: 399,
      originalPrice: 999,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: false,
    },
    {
      image:'https://img.mensxp.com/media/content/2019/Dec/11-1576647329.jpg?w=780&h=1222&cc=1',
      title: 'Trendy Polo T-shirt',
      price: 349,
      originalPrice: 599,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: false,
    },
    {
      image:'https://world-arabia.com/storage/images/news/crops/news-promo/f2sgWTiESHbH6hDH1EHvQscWdSypTaBg1hlhCdNV.webp',
      title: 'Trendy Polo T-shirt',
      price: 249,
      originalPrice: 399,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: true,
    },
    {
      image: 'https://cdn.shopaccino.com/qarot/categories/dsc9313-1871989969376_s.jpg?v=505',
      title: 'Trendy Polo T-shirt',
      price: 349,
      originalPrice: 899,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: false,
    },
    {
      image: 'https://burst.shopifycdn.com/photos/man-in-suit-bowtie.jpg?width=1000&format=pjpg&exif=0&iptc=0',
      title: 'Trendy Polo T-shirt',
      price: 349,
      originalPrice: 599,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isLimited: false,
    },
  ];

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="relative min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      {isCartOpen && (
        <div className="absolute right-0 top-0 w-1/3 bg-white shadow-xl h-screen p-4 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          {cart.map((item, index) => (
            <div key={index} className="border-b pb-2 mb-2 flex justify-between items-center">
              <div>
                <h3 className="text-lg">{item.title}</h3>
                <p className="text-gray-500">₹{item.price}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700 text-sm"
                onClick={() => handleRemoveFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
          {cart.length === 0 && <p className="text-gray-500">Your cart is empty.</p>}
          <button
            className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            onClick={() => setIsCartOpen(false)}
          >
            Close Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
