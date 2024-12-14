import React, { useState, useEffect } from 'react';
import ProductDetailPopup from './ProductDetailPopup'; // Assuming ProductDetail is in the same folder

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility

  const handleCardClick = () => {
    setShowModal(true); // Show modal on card click
  };

  const closeModal = () => {
    setShowModal(false); // Close modal
  };

  // UseEffect to prevent body scrolling when the modal is open
  useEffect(() => {
    if (showModal) {
      // Prevent scrolling on body
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on body when modal is closed
      document.body.style.overflow = 'auto';
    }

    return () => {
      // Cleanup: Ensure scroll is re-enabled when the component is unmounted
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <div
      className="relative w-full max-w-xs md:max-w-sm lg:max-w-md aspect-[2/3] bg-white rounded-lg overflow-hidden shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gambar Produk */}
      <div className="w-full h-full p-4 cursor-pointer" onClick={handleCardClick}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/product.png`}
          alt={product.name}
          className={`object-cover w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/product.png`}
          alt={product.name}
          className={`absolute inset-0 object-cover w-full h-full p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Nama Produk dan Harga */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-white bg-opacity-80 text-black p-2 text-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <h3 className="text-sm sm:text-lg md:text-xl font-bold truncate">{product.name}</h3>
        <p className="text-sm sm:text-lg md:text-xl text-black">${product.price}</p>
      </div>

      {/* Modal for Product Detail */}
      {showModal && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-40" />
          
          {/* Modal Content */}
          <div className="fixed inset-0 flex justify-center items-center z-50 overflow-auto">
            <div className="bg-white w-full max-w-4xl sm:max-w-3xl lg:max-w-2xl h-auto overflow-y-auto max-h-[90vh] relative p-6">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-2xl font-bold text-black hover:text-gray-500"
              >
                X
              </button>
              {/* Product Detail Content */}
              <ProductDetailPopup />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
