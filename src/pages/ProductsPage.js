import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer'; // Import Footer
import ProductCard from '../components/ProductCard'; // Import ProductCard

// Contoh data produk
const products = [
  { id: 1, name: "Men's T-Shirt", category: "mens", price: 20 },
  { id: 2, name: "Men's Hoodie", category: "mens", price: 26 },
  { id: 3, name: "Women's Dress", category: "womens", price: 40 },
  { id: 4, name: "Women's Blouse", category: "womens", price: 30 },
  { id: 5, name: "Hat", category: "accessories", price: 15 },
  { id: 6, name: "Sunglasses", category: "accessories", price: 25 },
  { id: 7, name: "Men's Shoes", category: "mens", price: 50 },
  { id: 8, name: "Men's Sandals", category: "mens", price: 40 },
  { id: 9, name: "Women's Shoes", category: "womens", price: 60 },
  { id: 10, name: "Women's Sandals", category: "womens", price: 45 },
  { id: 11, name: "Watch", category: "accessories", price: 100 },
  { id: 12, name: "Bracelet", category: "accessories", price: 35 },
];

const ProductsPage = () => {
  const { category } = useParams(); // Mengambil kategori dari URL
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Menggunakan useEffect untuk memfilter produk setiap kali kategori berubah
  useEffect(() => {
    setFilteredProducts(products.filter(product => product.category === category));
  }, [category]);

  return (
    <div className="bg-gray-200">
      <main className="container mx-auto px-4 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 capitalize text-center">{category} Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found in this category.</p>
          )}
        </div>
      </main>
      <Footer /> {/* Menggunakan komponen Footer */}
    </div>
  );
};

export default ProductsPage;
