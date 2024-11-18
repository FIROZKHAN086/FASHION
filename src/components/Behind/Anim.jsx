import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function Anim() {
  const carouselRef = useRef(null);
  const imagesRef = useRef([]);
  const Slidref = useRef()

  useEffect(() => {

    // My Gsap
    gsap.fromTo(Slidref.current,{
        opacity:0,
        delay:1,
        duration:1,

    },{
        opacity:1,
        duration:1,
        delay:1,
        scrollTrigger:{
            trigger:Slidref.current,
            start:'top 50%'
        }
    })

    // GSAP Timeline for continuous, seamless loop
    const tl = gsap.timeline({ repeat: -1 }); // Infinite loop
    
    imagesRef.current.forEach((image, i) => {
      tl.to(image, {
        xPercent: -100 * (i + 1), // Shift each image left by 100%
        duration: 1.5, // Duration per transition
        ease: "power2.inOut"
      });
    });

    tl.to(imagesRef.current, {
      xPercent: 0, // Reset to the beginning without snapping
      duration: 1,
    });

  }, []);

  return (
    <div 
      ref={carouselRef}
      className="carousel-container overflow-hidden  mt-6 "
      style={{ position: 'relative', width: '100%', height: '400px' }}
      
   >
      <div ref={Slidref} className="carousel-inner flex justify-center " style={{ display: 'flex', width: '100%' }}>
        <h1 className=' text-5xl text-center textt-black' >It's A Nice Day</h1>
        <img
          ref={(el) => (imagesRef.current[0] = el)}
          src="https://st.depositphotos.com/1273429/5097/i/450/depositphotos_50974375-stock-photo-high-fashion-look-glamor-lifestyle.jpg"
          className="w-full h-[400px] object-cover"
          alt="IMG"
        />
        <img
          ref={(el) => (imagesRef.current[1] = el)}
          src="https://media.istockphoto.com/id/1193750118/photo/beautiful-asian-woman-carrying-colorful-bags-shopping-online-with-mobile-phone.jpg?s=612x612&w=0&k=20&c=j1SpSX7c3qzBrUT5f7HRoOfxQnPxZY_c6yb3AvXA5f8="
          className="w-full h-[400px] object-cover"
          alt="IMG"
        />
        <img
          ref={(el) => (imagesRef.current[2] = el)}
          src="https://lh3.googleusercontent.com/proxy/0aEQmigvN047WI3VzdZ7JdsuUuxQHVoMG9lFaqQRDtDRqD_C5qzs0sUcZ4x-Nt08ku3HSfvf-RqZvv7A47O0JVvM7yq753e7AK9MZpVErYwGIOiAbAK1IaA"
          className="w-full h-[400px] object-cover"
          alt="IMG"
        />
        <img
          ref={(el) => (imagesRef.current[2] = el)}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoXerOpC25lN4kBqrpAR8l0styFvk_-t1s-A&s"
          className="w-full h-[400px] object-cover"
          alt="IMG"
        />
      </div>
    </div>
  );
}

export default Anim;
