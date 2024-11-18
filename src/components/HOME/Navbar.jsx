import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const navref = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navref.current,
      {
        duration: 1,
        top: 1,
        delay: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        top: 0,
        duration: 1,
        marginTop: 0,
      }
    );
  }, []);

  return (
    <nav
      ref={navref}
      className="w-full flex items-center list-none h-14 mt-2 justify-between bg-blue-950 text-yellow-50 p-4"
    >
      <h1 className="px-3 hover:scale-125 text-xl">KINGF'S FASHION</h1>

      {/* Hamburger Menu */}
      <button
        className="text-xl md:hidden block px-4"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      {/* Nav Links */}
      <ul
        className={`fixed right-0 top-0 max-ms:my-10 h-screen bg-blue-950 text-yellow-50 w-64 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:relative md:h-auto md:translate-x-0 md:flex md:items-center
        z-10`}
      >
        <button
          className="absolute top-4 right-4 text-xl md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <i className="fa-solid fa-times"></i>
        </button>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)} className={'no no-underline'}>
          <li className="text-lg text-white hover:border-b-2 cursor-pointer px-4 gap-x-5 hover:border-white">
            Home
          </li>
        </NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={'no no-underline'}>
          <li className="text-lg text-white no-underline hover:border-b-2 cursor-pointer px-4 gap-x-5 hover:border-white">
            About
          </li>
        </NavLink>
        <li
          className="text-lg hover:border-b-2 cursor-pointer px-4 gap-x-5 hover:border-white"
          onClick={() => setIsMenuOpen(false)}
        >
          Fashion
        </li>
      </ul>

      {/* Search Input */}
      <div className="hidden md:flex px-3 py-2 bg-black rounded-full border-2 border-green-300 m-2 gap-2 items-center">
        <input
          type="text"
          placeholder="ENTER Your name"
          className="border-none focus:border-blue rounded-md text-black"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  );
}

export default Navbar;
