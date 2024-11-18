import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  // Create a reference for the element you want to animate
  const boxRef = useRef(null);

  useEffect(() => {
    // Define the animation with GSAP and ScrollTrigger
    gsap.to(
      boxRef.current,
     
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay:1,
        rotate:360,
        scrollTrigger: {
          trigger: boxRef.current,
          start: 'top 80%', // Start animation when the top of the element hits 80% of the viewport
          end: 'top 30%',   // End animation when the top hits 30% of the viewport
          scrub: true,      // Smoothly scrubs the animation with the scroll
             // Optional: shows markers for debugging
        },
      }
    );
  }, []);

  return (
    <div className='h-screen bg-red'>

    </div>
  );
};

export default Scroll;
