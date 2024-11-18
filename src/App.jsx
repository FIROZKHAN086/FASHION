
import { Card } from './components/HOME/Card'
import Home from './components/HOME/Home'
import Slider from './components/HOME/Slider'
import Navbar from './components/HOME/Navbar'
import About from './components/NavDetails/About'
import Foter from './components/HOME/Foter'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Boy from './components/Behind/Boy'
import Gril from './components/Behind/Gril'
import ImageSlider from './components/HOME/ImageSlider'
import Cart from './components/Behind/Cart'
import SareeListing from './components/Behind/SareeListing'
import ProductDetail from './components/Behind/ProductDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductGrid from './components/NavDetails/ProductGrid'


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <><Navbar/>
       <Home/>
       <ImageSlider/>
      <Slider/>
      <Card/> 
      <Foter/>
      </>
    },
    {
      path:'/about',
      element: <><Navbar/><About/></>
    },
    {
      path:'/Woman',
      element:<> <Navbar/><SareeListing/></>
    },
    {
      path:'/Cart',
      element:<><Cart/></>
    },{
      path:'/Boy',
      element:<><Navbar/><ProductGrid/></>
    }

  ])
 
  

  return (
    <>
    {/* <Navbar/> */}
   
      {/* <Anim/> */}
     
      <RouterProvider router={router} />
      
    </>
  )
}

export default App
