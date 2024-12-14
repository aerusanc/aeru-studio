// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-4 mt-8">
      <div className="container mx-auto px-4">
     
      <p className="text-xs sm:text-sm md:text-base lg:text-lg">
  ©2024 Aeru✧Studio.{' '}
  
</p>

        <a 
    href="https://www.instagram.com/aeru.studio/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-white hover:underline"
  >
    Follow us on Instagram
  </a>
      </div>
    </footer>
  );
};

export default Footer;
