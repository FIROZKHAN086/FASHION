import React, { useEffect, useRef , } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

function Foter() {

  const foterref = useRef()
  useEffect(()=>{
    gsap.fromTo(foterref.current,{
      opacity:0,
      duration:2,
      
    },{
      // translate:-10000,
      opacity:2,
      duration:5,
      delay:2,
      translateX:-4/5,
      scrollTrigger:{
        trigger:foterref.current,
        start:'top 50%',
        end:'bottem 30%',
        scrub:true, 

      }
    })
  })
  return (
    <div ref={foterref} className='h-full flex mt-2 gap-x-10 w-screen justify-between translate-x-4/5 bg-sky-900 p-5'>
      <div className='flex flex-col  gap-10 '>
        <h1 className='text-3xl font-bold text-white '>FOLLOW US...</h1>
        <div className=''>
         <Link target='_blank' to={'https://www.instagram.com/khan____0086/'} className={'no-underline text-black'}> <i className="fa-brands fa-instagram px-3 size-5xl scale-[2] cursor-pointer"></i> </Link>
          <i className="fa-brands fa-whatsapp px-3 size-5xl scale-[2] cursor-pointer"></i>
         <Link target='_blank' to={'https://github.com/FIROZKHAN086'} className={'no-underline text-black'}> <i className="fa-brands fa-square-github px-3 size-5xl scale-[2] cursor-pointer"></i></Link>
          <i className="fa-brands fa-linkedin px-3 size-5xl scale-[2] cursor-pointer"></i></div>
      </div>
      <div className='flex flex-col mx-10  '>
        <h1 className='text-3xl  font-bold text-white '>Quick Link...</h1>
        <Link className={'no-underline text-black'}> 
       <div className='flex gap-2 m-4  items-center'>
       <h1 className='text-xl font-bold hover:border-b-2 hover:border-white  '>WOMAN</h1>
       <i class="fa-solid fa-shirt"></i>
       </div>
         </Link>
        <Link className={'no-underline text-black'}> 
       <div className='flex gap-2 m-4  items-center'>
       <h1 className='text-xl font-bold hover:border-b-2 hover:border-white  '>MAN</h1>
       <i class="fa-solid fa-shirt"></i>
       </div>
         </Link>
        <Link className={'no-underline text-black'}> 
       <div className='flex gap-2 m-4  items-center'>
       <h1 className='text-xl font-bold hover:border-b-2 hover:border-white  '>CHILD</h1>
       <i class="fa-solid fa-shirt"></i>
       </div>
         </Link>
      </div>
      <div className=' flex flex-col gap-y-3'>
        <h1 className='text-3xl font-bold text-white'>MY Words...</h1>
        <p className='text-lg font-semibold text-black'>THIS IS MY FIRST REACT WEBSITE</p>
        <p className='text-lg font-semibold text-black'>I'M DOING 3DAYS AND CONTINUE </p>
        <p className='text-lg font-semibold text-black'>I'M DOING PROFESSIONAL WORK THAT IS MY HOBBY </p>
        <p className='text-lg font-semibold text-black'>THEN I MADE WEBSITE I FIGHT MANY error </p>
        <p className='text-lg font-semibold text-black'>THIS IS MY RESULT.....</p>
        <p className='text-lg font-semibold text-black'>BUT BUT This is not Resposiable</p>
      </div>
      
    </div>
  )
}

export default Foter;