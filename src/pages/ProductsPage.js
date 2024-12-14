import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Men's T-Shirt", category: "mens", price: 20 },
  { id: 2, name: "Men's Hoodie", category: "mens", price: 26 },
  // ... data produk lainnya
];

const ProductsPage = () => {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // State untuk mengontrol popup
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const filterProducts = () => {
      const results = products.filter((product) => product.category === category);
      setFilteredProducts(results);
      setLoading(false);
    };

    filterProducts();
  }, [category]);

  // Fungsi untuk menutup popup
  const closePopup = () => setSelectedProduct(null);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-3 mt-40 capitalize px-4 text-left">
          {category} Products
        </h1>
        <h1 className="text-lg md:text-2xl mb-4 capitalize leading-relaxed px-4 text-justify">
          Explore our exclusive collection of {category}'s apparel and accessories.
        </h1>

        {loading ? (
          <p className="text-center">Loading products...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="w-full">
                  <ProductCard
                    product={product}
                    onClick={() => setSelectedProduct(product)} // Klik untuk buka popup
                  />
                </div>
              ))
            ) : (
              <p className="col-span-full text-center">No products found in this category.</p>
            )}
          </div>
        )}
      </main>

      <Footer />

      {/* Popup Detail Produk */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6"
            onClick={(e) => e.stopPropagation()} // Mencegah close ketika klik di dalam modal
          >
            <h2 className="text-xl font-bold mb-4">{selectedProduct.name}</h2>
            <p className="mb-2">Price: ${selectedProduct.price}</p>
            <p className="mb-4">Category: {selectedProduct.category}</p>
            <img
              src={`${process.env.PUBLIC_URL}/assets/product.png`}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded"
            />
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
