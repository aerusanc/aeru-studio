import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[400px] h-[600px] bg-white  rounded-lg overflow-hidden m-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gambar Produk */}
      <div className="justify-center  h-auto m-10">
        <img
          src={`${process.env.PUBLIC_URL}/assets/product.png`} // Ganti dengan gambar produk yang sesuai
          alt={product.name}
          className={`object-cover w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/product.png`} // Ganti dengan gambar produk yang sesuai
          alt={product.name}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Nama Produk dan Harga */}
      <div className={`absolute bottom-0 left-0 w-full text-black p-2 text-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-2xl font-bold">{product.name}</h3>
        <p className="text-2xl text-black">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
