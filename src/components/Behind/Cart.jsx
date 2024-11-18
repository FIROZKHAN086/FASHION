import React, { useState } from 'react';

function Cart() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const [currentIndex6, setCurrentIndex6] = useState(0);
  const images1 = [
    'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-ethnic-set/o/g/c/11-12-years-sequence-greenkp-vishesta-original-imahy9bmwrg6xcuh.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-ethnic-set/k/w/s/11-12-years-sequence-maroonkp-vishesta-original-imahy9dftdfwhhyb.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/kids-ethnic-set/c/f/5/6-7-years-sequence-yellowkp-vishesta-original-imagx6kgrqczc3ne.jpeg?q=70&crop=false',
   
  ];
  const images2 = [
    'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/5/q/g/l-kd11011107-kay-dee-original-imaguf2wsunbf6sb.jpeg?q=70&crop=false',
   ' https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/1/r/z/s-kd11011107-kay-dee-original-imaghxcv3zbhmb5f.jpeg?q=70&crop=false',
  ];
  const images3 = [
    'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/n/u/u/xxl-kd11011107-kay-dee-original-imaguahs3qthhgdu.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/e/h/j/s-kd11011107-kay-dee-original-imagmz32etqhkrsm.jpeg?q=70&crop=false',
    'https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/a/s/d/s-kd11011107-kay-dee-original-imagmz75j4f6vk3n.jpeg?q=70&crop=false',
  ];
  const images4 = [
    'https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/c/n/p/xl-bul-23bs-06a-bullmer-original-imagwrycg7xr3qxw.jpeg?q=50',
    'https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/r/o/c/4xl-bul-23bs-02b-bullmer-original-imagwrycuwf3jkhn.jpeg?q=50',
    'https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/l/y/0/5xl-bul-23bs-02a-bullmer-original-imagwrycy2tdaftc.jpeg?q=50',
    'https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/9/n/e/l-bul-23bs-08a-bullmer-original-imagwryczytq638m.jpeg?q=50',
    'https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/o/r/y/4xl-bul-23bs-03a-bullmer-original-imagwrycnfggv47a.jpeg?q=50',
    'https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/x/1/z/2xl-bul-23bs-09a-bullmer-original-imagwrycxggywtxu.jpeg?q=50',
    'https://rukminim2.flixcart.com/image/180/180/xif0q/shirt/i/c/e/2xl-bul-23bs-04a-bullmer-original-imagwryctggfygj9.jpeg?q=50'
  ];
  const images5 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqggXSwdxUoNvIglw_kLCRpyFWOq-XpuFZMg&s',
    'https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg',
  ];
  const images6 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqggXSwdxUoNvIglw_kLCRpyFWOq-XpuFZMg&s',
    'https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg',
  ];
  const images7 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqggXSwdxUoNvIglw_kLCRpyFWOq-XpuFZMg&s',
    'https://img.freepik.com/free-photo/female-friends-out-shopping-together_53876-25041.jpg',
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
  };
  const handleNext1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex + 1) % images2.length);
  };
  const handleNext2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex + 1) % images3.length);
  };
  const handleNext3 = () => {
    setCurrentIndex3((prevIndex) => (prevIndex + 1) % images4.length);
  };
  const handleNext4 = () => {
    setCurrentIndex4((prevIndex) => (prevIndex + 1) % images5.length);
  };
  const handleNext5 = () => {
    setCurrentIndex5((prevIndex) => (prevIndex + 1) % images6.length);
  };
  const handleNext6 = () => {
    setCurrentIndex6((prevIndex) => (prevIndex + 1) % images7.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images1.length) % images1.length);
  };
  const handlePrev1 = () => {
    setCurrentIndex1((prevIndex) => (prevIndex - 1 + images2.length) % images2.length);
  };
  const handlePrev2 = () => {
    setCurrentIndex2((prevIndex) => (prevIndex - 1 + images3.length) % images3.length);
  };
  const handlePrev3 = () => {
    setCurrentIndex3((prevIndex) => (prevIndex - 1 + images4.length) % images4.length);
  };
  const handlePrev4 = () => {
    setCurrentIndex4((prevIndex) => (prevIndex - 1 + images5.length) % images5.length);
  };
  const handlePrev5 = () => {
    setCurrentIndex5((prevIndex) => (prevIndex - 1 + images6.length) % images6.length);
  };
  const handlePrev6 = () => {
    setCurrentIndex6((prevIndex) => (prevIndex - 1 + images7.length) % images7.length);
  };

  return (
    <div className='flex m-3 justify-evenly flex-wrap gap-4'>
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-80">
      <h1 className="text-xl font-bold text-gray-900 mb-2">
        Up to 50% off | Trending fashion on women's clothing
      </h1>
      <div className="relative">
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <img
          src={images1[currentIndex]}
          alt="Product"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        
        <button className="text-xl font-bold bg-black rounded text-slate-300 p-2 mt-2">₹449.00</button>
      </div>
    </div>


    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 w-80">
      <h1 className="text-xl font-bold text-gray-900 mb-2">
        Up to 50% off | Trending fashion on women's clothing
      </h1>
      <div className="relative">
        <button
          onClick={handlePrev1}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <img
          src={images2[currentIndex1]}
          alt="Product"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={handleNext1}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        
        <button className="text-xl font-bold bg-black rounded text-slate-300 p-2 mt-2">₹449.00</button>
      </div>
    </div>


    <div className="bg-white border text-black border-gray-200 rounded-lg shadow-md p-4 w-80">
      <h1 className="text-xl font-bold text-gray-900 mb-2">
        Up to 50% off | Trending fashion on women's clothing
      </h1>
      <div className="relative">
        <button
          onClick={handlePrev2}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <img
          src={images3[currentIndex2]}
          alt="Product"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={handleNext2}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        
        <button className="text-xl font-bold bg-black rounded text-slate-300 p-2 mt-2">₹449.00</button>
      </div>
    </div>
    
    <div className="bg-white border text-black border-gray-200 rounded-lg shadow-md p-4 w-80">
      <h1 className="text-xl font-bold  mb-2">
        Up to 50% off | Trending fashion on women's clothing
      </h1>
      <div className="relative">
        <button
          onClick={handlePrev3}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <img
          src={images4[currentIndex3]}
          alt="Product"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={handleNext3}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        
        <button className="text-xl font-bold bg-black rounded text-slate-300 p-2 mt-2">₹449.00</button>
      </div>
    </div>
    <div className="bg-white border  border-gray-200 rounded-lg shadow-md p-4 w-80">
      <h1 className="text-xl font-bold  mb-2">
        Up to 50% off | Trending fashion on women's clothing
      </h1>
      <div className="relative">
        <button
          onClick={handlePrev4}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <img
          src={images5[currentIndex4]}
          alt="Product"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={handleNext4}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        
        <button className="text-xl font-bold bg-black rounded text-slate-300 p-2 mt-2">₹449.00</button>
      </div>
    </div>
    <div className="bg-white border text-black border-gray-200 rounded-lg shadow-md p-4 w-80">
      <h1 className="text-xl font-bold  mb-2">
        Up to 50% off | Trending fashion on women's clothing
      </h1>
      <div className="relative">
        <button
          onClick={handlePrev5}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <img
          src={images4[currentIndex5]}
          alt="Product"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={handleNext5}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        
        <button className="text-xl font-bold bg-black rounded text-slate-300 p-2 mt-2">₹449.00</button>
      </div>
    </div>
    <div className="bg-white border text-black border-gray-200 rounded-lg shadow-md p-4 w-80">
      <h1 className="text-xl font-bold  mb-2">
        Up to 50% off | Trending fashion on women's clothing
      </h1>
      <div className="relative">
        <button
          onClick={handlePrev6}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &lt;
        </button>
        <img
          src={images7[currentIndex6]}
          alt="Product"
          className="w-full h-40 object-cover rounded-lg"
        />
        <button
          onClick={handleNext6}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="mt-4">
        
        <button className="text-xl font-bold bg-black rounded text-slate-300 p-2 mt-2">₹449.00</button>
      </div>
    </div>
    </div>
  );
}

export default Cart;
