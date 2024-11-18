import React, { useEffect, useRef} from 'react'
import gsap from 'gsap'
import './Slider.css'

function Slider() {

    const Slidref = useRef()

    useEffect(()=> {
        gsap.fromTo(Slidref.current,{
            opacity:0,
                duration:1,
                delay:1,
        },{
            duration: 1,
            delay: 0,
            top: 15,
            // translateX:-100,
            opacity:1,
            rotate:360,
            zIndex:1,
            scrollTrigger: {
                trigger: Slidref.current,
                start:'top 45%',
                
                
            }
        })
        
        
    },[])
  return (
    <div ref={Slidref} id='Slid' className=' h-screen p-10 w-scrren mt-9 bg-red-400 flex gap-5 flex-col overflow-hidden justify-center'>
        <h1 className='text-5xl font-bold text-center'>Best Selling...</h1>
        <div className='flex gap-6 justify-evenly items-center flex-wrap w-full'>
            <img className='w-[25%] h-[100%] object-cover  hover:scale-105  shadow-2xl shadow-black' src="https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg" alt="IMG" />
            <img className='w-[25%] h-[100%] hover:scale-105  shadow-2xl shadow-black' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJfbLPFjMtApJMtiKsVsv5SNotLGXbNGjGlQ&s" alt="IMG" />
            <img className='w-[25%] h-[100%] hover:scale-105  shadow-2xl shadow-black' src="https://img.freepik.com/free-photo/fashion-girl-posing-studio-wearing-smart-casual-sportive-outfit-business-style-sweet-pastel-colors-sunglasses-backpack-denim-jacket-mint-background-stylish-woman_291049-1800.jpg" alt="IMG" />
        </div>
    </div>
  )
}

export default Slider;