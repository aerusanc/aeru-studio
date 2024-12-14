import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './pages/HomePage';
import Cart from './pages/Cart';
import ProductDetail from './components/ProductDetail';
import ProductsPage from './pages/ProductsPage';

function App() {
  const [cartItems, setCartItems] = useState([]); // State untuk cartItems
  const [isCartOpen, setIsCartOpen] = useState(false); // State untuk menampilkan cart

  const products = Array(8).fill().map((_, index) => ({
    id: index + 1,
    name: 'Home Jersey 2024/2025',
    price: 500000,
    image: 'https://placehold.co/200x200',
    status: index % 2 === 0 ? 'Sold' : 'New'
  }));

  const addToCart = (product) => {
    // Cek apakah produk sudah ada di keranjang
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      console.log('Product already in cart');
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Mengubah status untuk membuka/menutup keranjang
  };

  return (
    <Router>
      <div className="bg-White">
        <Header toggleCart={toggleCart} /> {/* Pastikan Header menerima toggleCart */}
        <main className="p-0">
          <Routes>
            <Route path="/shop/:category" element={<ProductsPage addToCart={addToCart} />} />
            <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
            <Route path="/product/:productId" element={<ProductDetail addToCart={addToCart} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
