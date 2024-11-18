import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, {useState} from 'react';

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images1 = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZpFpxgSqzr0loXyZBZlhbksm7jkRoNpx6xA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrG9hflPJL8tkl_jRu83DiajGEFA6RuWCrA&s',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOICLXWRLbE1qF2x3JetmwpBEwUe0-wpA-Mg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyn7I-op_iQylQuW_AVpUF5U2N-iNzKfYWw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUyt1aFWGq_UU_HunA2eOKmgnBTh5IPvBIGw&s',
    'https://i.pinimg.com/564x/56/83/3f/56833fc135b72c855df60c78ccbf3644.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQx1-HeRQ-p8L7FZoVGFjRuzhqGb5s7pUyQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGyiHbJbZrwNQ56NygUmUygqtOczth21Nynw&s'
  ];
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images1.length);
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images1.length) % images1.length);
  };

  return (
    <>
      <div className="mt-[10%] z-10 bg-slate-400">
        <h1 className="text-2xl text-center z-20">THIS DAY ON FASHION</h1>
      </div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide mx-5 mt-8 h-[80vh] overflow-hidden bg-black"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={images1[currentIndex]}
              className="d-block w-[100%] h-[500px] mt-2 mb-2 object-contain"
              alt="img1"
            />
          </div>
          
         
          
          
         
          
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          // data-bs-target="#carouselExampleAutoplaying"
          // data-bs-slide="prev"
           onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
        onClick={handleNext}
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default ImageSlider;
