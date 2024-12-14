import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Ensure you import Link
import '../assets/styles.css'; // Ensure you have this file for custom styles
import ProductList from './HomePage';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true); // State to control component visibility

  const handleClose = () => {
    setIsOpen(false); // Change state to close the component
  };

  if (!isOpen) return null; // Don't render component if isOpen is false

  return (
    <div className="relative p-4 z-50 w-full h-screen flex items-center justify-center bg-white">
      <div className="p-8 slide-in max-w-[800px] w-full rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        </div>

        {/* Contact Information */}
        <div className="mt-4 text-center">
          <p>Need help? Speak to one of our ambassadors at:</p>
          <p className="font-bold">+1 646 889 1961</p>
          <p>MON - FRI 10AM - 8PM AND SAT 10AM - 7PM</p>
          <Link 
            to="/"
            onClick={ProductList}
            className="mt-4 text-black px-4 py-2 underline inline-block"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
