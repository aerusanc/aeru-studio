// src/pages/ProductsPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

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
  { id: 13, name: "Bracelet", category: "mens", price: 35 },
];

const ProductsPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const filterProducts = () => {
      const results = products.filter(product => product.category === category);
      setFilteredProducts(results);
      setLoading(false);
    };
    
    filterProducts();
  }, [category]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 mt-14 capitalize px-4 text-left">{category} Products</h1>
        <h1 className="text-lg md:text-2xl mb-4 capitalize leading-relaxed px-4 text-justify">
  Explore our exclusive collection of men's apparel and accessories designed for comfort, 
  style, and versatility. From casual t-shirts and hoodies to stylish shoes and accessories, 
  our products cater to every occasion. 
</h1>


        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <div key={product.id} className="w-full">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center">No products found in this category.</p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
