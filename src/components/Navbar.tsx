"use client"; // This line must be the very first line

import React, { useState } from 'react';
import Link from 'next/link';
import { TfiMenuAlt } from "react-icons/tfi";
import "../style/Navbar.css"; // Import CSS file

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-container'>
      <div className='navbar'>
        <div className='brand'>Muhammad Hamza Javed</div>

        <ul className='nav-links desktop-nav'>
          <li className='menu-link'><Link href="#hero">Home</Link></li>
          <li className='menu-link'><Link href="#about">About</Link></li>
          <li className='menu-link'><Link href="#contact">Contact</Link></li>
          <li className='menu-link'><Link href="#skills">Skills</Link></li>
        </ul>

        <TfiMenuAlt className='menu-icon' onClick={toggleMenu} />
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className='mobile-nav'>
          <ul className='mobile-nav-links'>
            <li className='menu-link'><Link href="#hero">Home</Link></li>
            <li className='menu-link'><Link href="#about">About</Link></li>
            <li className='menu-link'><Link href="#contact">Contact</Link></li>
            <li className='menu-link'><Link href="#skills">Skills</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
