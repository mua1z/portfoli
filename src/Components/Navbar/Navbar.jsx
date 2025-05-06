import React, { useState } from 'react';
import { RiCloseLine, RiMenu2Line } from '@remixicon/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Close menu on link click
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 relative z-50'>
      <span className='text-xl font-bold tracking-wide'>Obsa Amin</span>

      {/* Nav Links */}
      <ul className={`${menuOpen ? "block" : "hidden"} mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
        <a href="#about" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>About</li>
        </a>
        <a href="#experience" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Experience</li>
        </a>
        <a href="#projects" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Projects</li>
        </a>
        <a href="#contact" onClick={closeMenu}>
          <li className='text-md transition-all duration-300 p-1 md:p-0'>Contact</li>
        </a>
      </ul>

      {/* Mobile Menu Icon */}
      <div className='md:hidden absolute right-10 top-6 cursor-pointer transition-all duration-300'>
        {menuOpen ? (
          <RiCloseLine size={30} onClick={toggleMenu} />
        ) : (
          <RiMenu2Line size={30} onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
