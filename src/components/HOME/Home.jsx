import React, { useEffect, useRef } from 'react'
import gsap from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Home() {

    const homeref = useRef()
  
    const textRef = useRef()

    useEffect(() => {
        gsap.from(homeref.current, {
            opacity: 0,
            // translateX: 100,
        })
        gsap.to(homeref.current, {
            duration: 1,
            translateY: 100,
            delay: 0.5,
            opacity: 1,

            
            // rotateX:360,
            // rotateY:360,


        },)
        gsap.fromTo('#text',{
            opacity:0,
            top:10,
            
        },{
            opacity:1,
            duration:2,
            translateX:-0,
            
            
        })
    }, [])

    return (
        <>
            <div ref={homeref} className='mb-10 relative grid grid-cols-2 w-scrren  font-bold -translate-y-100 font-sans overflow-x-hidden  gap-3  px-5'>
                <div className='h-screen flex-wrap  bg-green-600 w-full px-10 flex justify-center flex-col gap-5'>
                  <div className='flex flex-col flex-wrap overflow-hidden'>
                  <p id='text' className='  text-wrap text-blue-100'>Fashtion Is Now</p>
                    <h1 id='text' className='  text-wrap text-[3rem] bold text-white'>LET'S </h1>
                    <h1  className='text-wrap text-[3rem] bold text-white'>EXPLORE</h1>
                    <h1 className='text-yellow-300 text-[3rem] text-wrap'>UNIQUE</h1>
                    <h1 className='text-wrap text-[3rem] bold text-white'>COLLECTION</h1>
                   
                    <p id='text' className='  text-wrap text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat quidem vitae nesciunt debitis earum odio!</p>
                    <h1 className='text-white text-lg bg-black px-3 w-1/2 '>EXLPORE DOWN...</h1>
                  </div>
                </div>
                <div className='h-screen  bg-amber-600 w-full'id='Hello'>
                    <img src="https://img.freepik.com/free-photo/studio-close-up-portrait-young-fresh-blonde-woman-brown-straw-poncho-wool-black-trendy-hat-round-glasses-looking-camera-green-leather-had-bag_273443-1121.jpg" alt="IMG" className='h-full object-cover' />
                </div>
            </div>
           
        </>
    )
}

export default Home