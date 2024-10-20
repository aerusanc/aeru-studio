import React, { useState } from 'react';
import '../assets/styles.css'; // Pastikan Anda memiliki file ini untuk gaya kustom

const Cart = () => {
  const [isOpen, setIsOpen] = useState(true); // State untuk mengontrol tampilan komponen

  const handleClose = () => {
    setIsOpen(false); // Mengubah state untuk menutup komponen
  };

  if (!isOpen) return null; // Tidak merender komponen jika isOpen false

  return (
    <div className={`relative bg-white p-4 shadow-lg z-50 w-full h-screen  flex items-start justify-center md:left-11 md:top-11 text-black`}>
    <div className="bg-white bg-opacity-90 p-8 slide-in max-w-[800px] w-full rounded-lg shadow-lg">
      <div className="flex justify-center mb-11">
          <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        </div>

        {/* Informasi kontak */}
        <div className="mt-4 text-center">
          <p>Need help? Speak to one of our ambassadors at:</p>
          <p className="font-bold">+1 646 889 1961</p>
          <p>MON - FRI 10AM - 8PM AND SAT 10AM - 7PM</p>
          <p className="mt-4 text-black px-4 py-2 underline">CONTINUE  SHOPPING</p>

        </div>
      </div>
    </div>
  );
};

export default Cart;
