import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

export const Card = () => {
    useEffect(()=>{
        gsap.fromTo(".cl",{
            opacity:0,
            translateX:-0,
        },{
            opacity:1,
            duration:1,
            delay:0,
            scrollTrigger:{
                trigger:'.cl',
                start:'top 30%',
                end:'top 70',
                scrub:true,          
            }

            
        })
    })
  return (
   <div className=' cl flex flex-wrap  justify-evenly bg-slate-900'>
    <div className="card w-[18rem] border-2 border-black p-4 m-5">
  <img src="https://images.unsplash.com/photo-1627577279474-b87fe8490617?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-2xl fonnt-bold font-sarif">Girl's Fashtion</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <Link to={'/Woman'}> <button className='bg-black text-white text-xl font-bold px-3 py-1.5 mt-3 hover:bg-zinc-500 hover:scale-105 hover:text-zinc-50 rounded-lg'>EXPLORE MORE..</button> </Link>
  </div> 
</div>
    <div className="card w-[18rem] border-2 border-black p-4 m-5">
  <img src="https://i.pinimg.com/236x/bc/42/65/bc42651b1ca7726f9a64c3df9adb5614.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-2xl fonnt-bold font-sarif">Boy's Fashtion </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Link to={'/Boy'}> <button className='bg-black hover:scale-105 text-white text-xl font-bold px-3 py-1.5 mt-3 hover:bg-zinc-500 hover:text-zinc-50 rounded-lg'>EXPLORE MORE..</button> </Link>
  </div> 
</div>
    <div className="card w-[18rem] border-2 border-black p-4 m-5">
  <img src="https://media.istockphoto.com/id/693436828/photo/adorable-little-baby-boy-posing.webp?s=1024x1024&w=is&k=20&c=q6NPVzZ6rYBGP5SiJByf6cmOwaLcvLYOLcjGSWNYsTw=" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title text-2xl fonnt-bold font-sarif">Children's Fashtion</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <Link to={'/Cart'}> <button className='bg-black hover:scale-105 text-white text-xl font-bold px-3 py-1.5 mt-3 hover:bg-zinc-500 hover:text-zinc-50 rounded-lg'>EXPLORE MORE..</button> </Link>
  </div> 
</div>
   </div>
  )
}
