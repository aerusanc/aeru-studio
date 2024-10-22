import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full aspect-[2/3] bg-white rounded-lg overflow-hidden shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gambar Produk */}
      <div className="w-full h-full p-4">
        <img
          src={`${process.env.PUBLIC_URL}/assets/product.png`}
          alt={product.name}
          className={`object-cover w-full h-full transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/product.png`}
          alt={product.name}
          className={`absolute inset-0 object-cover w-full h-full p-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Nama Produk dan Harga */}
      <div
        className={`absolute bottom-0 left-0 w-full bg-white bg-opacity-80 text-black p-2 text-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h3 className="text-lg md:text-xl font-bold truncate">{product.name}</h3>
        <p className="text-lg md:text-xl text-black">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;