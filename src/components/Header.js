import React, { useState, useEffect } from 'react';
import { FaSearch, FaUserCircle, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar'; 
import Cart from '../pages/Cart'; 

const Header = () => {
  const [showDropdown, setShowDropdown] = useState({ shop: false, news: false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false); 
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  useEffect(() => {
    document.body.style.overflow = showSearchBar || showCart ? 'hidden' : 'auto';
  }, [showSearchBar, showCart]);

  const handleDropdownMouseEnter = (type) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
    }
    setShowDropdown((prev) => ({ ...prev, [type]: true }));
  };

  const handleDropdownMouseLeave = (type) => {
    const timeout = setTimeout(() => {
      setShowDropdown((prev) => ({ ...prev, [type]: false }));
    }, 50);
    setDropdownTimeout(timeout);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleSearchBar = () => {
    setShowSearchBar((prev) => !prev);
    setShowCart(false); 
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
    setShowSearchBar(false); 
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown((prev) => !prev);
  };

  const handleClose = () => {
    setShowSearchBar(false);
    setShowCart(false);
  };

  return (
    <>
      <header className="bg-black text-white p-4 flex items-center justify-between fixed w-full top-0 z-50">
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-black text-white space-y-4 p-4 md:hidden">
            <div onMouseEnter={() => handleDropdownMouseEnter('shop')} onMouseLeave={() => handleDropdownMouseLeave('shop')}>
              <span className="cursor-pointer block">SHOP</span>
              {showDropdown.shop && (
                <div className="mt-2 w-48 text-black bg-white rounded shadow-lg">
                  <Link to="/shop/mens" className="block px-4 py-2 hover:text-gray-500">Men's</Link>
                  <Link to="/shop/womens" className="block px-4 py-2 hover:text-gray-500">Women's</Link>
                  <Link to="/shop/accessories" className="block px-4 py-2 hover:text-gray-500">Accessories</Link>
                </div>
              )}
            </div>

            <div onMouseEnter={() => handleDropdownMouseEnter('news')} onMouseLeave={() => handleDropdownMouseLeave('news')}>
              <span className="cursor-pointer block">NEWS</span>
              {showDropdown.news && (
                <div className="mt-2 w-48 text-black bg-white rounded shadow-lg">
                  <a href="#" className="block px-4 py-2 hover:text-gray-500">Latest News</a>
                  <a href="#" className="block px-4 py-2 hover:text-gray-500">Upcoming Events</a>
                  <a href="#" className="block px-4 py-2 hover:text-gray-500">Promotions</a>
                </div>
              )}
            </div>
          </nav>
        )}

        <nav className="hidden md:flex space-x-8 justify-start">
          <div className="relative inline-block" onMouseEnter={() => handleDropdownMouseEnter('shop')} onMouseLeave={() => handleDropdownMouseLeave('shop')}>
            <span className="text-white cursor-pointer">SHOP</span>
            {showDropdown.shop && (
              <div className="absolute left-0 mt-5 w-48 text-black bg-white rounded shadow-lg">
                <Link to="/shop/mens" className="block px-4 py-2 hover:text-gray-500">Men's</Link>
                <Link to="/shop/womens" className="block px-4 py-2 hover:text-gray-500">Women's</Link>
                <Link to="/shop/accessories" className="block px-4 py-2 hover:text-gray-500">Accessories</Link>
              </div>
            )}
          </div>

          <div className="relative inline-block" onMouseEnter={() => handleDropdownMouseEnter('news')} onMouseLeave={() => handleDropdownMouseLeave('news')}>
            <span className="text-white cursor-pointer">NEWS</span>
            {showDropdown.news && (
              <div className="absolute left-0 mt-5 w-48 text-black bg-white rounded shadow-lg">
                <a href="#" className="block px-4 py-2 hover:text-gray-500">Latest News</a>
                <a href="#" className="block px-4 py-2 hover:text-gray-500">Upcoming Events</a>
                <a href="#" className="block px-4 py-2 hover:text-gray-500">Promotions</a>
              </div>
            )}
          </div>
        </nav>

        <div className="flex justify-center flex-1">
          <a href="/">
            <img
              src={`${process.env.PUBLIC_URL}/assets/white.png`}
              alt="Aeru Studio Logo"
              className="h-8 w-auto"
            />
          </a>
        </div>

        <div className="flex space-x-4 justify-center md:hidden">
          <button onClick={toggleSearchBar} className="text-xl">
            <FaSearch />
          </button>
          <button onClick={toggleCart} className="text-xl">
            <FaShoppingCart />
          </button>
          <div
            className="relative inline-block"
            onMouseEnter={() => handleDropdownMouseEnter('profile')}
            onMouseLeave={() => handleDropdownMouseLeave('profile')}
          >
            <FaUserCircle className="text-xl cursor-pointer" />
            {showDropdown.profile && (
              <div className="absolute right-0 mt-6 w-48 bg-white text-black rounded shadow-lg">
                <Link to="/login" className="block px-4 py-2 hover:text-gray-500">Login</Link>
                <Link to="/register" className="block px-4 py-2 hover:text-gray-500">Register</Link>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4 justify-end">
          <button onClick={toggleSearchBar} className="text-xl">
            <FaSearch />
          </button>
          <button onClick={toggleCart} className="text-xl">
            <FaShoppingCart />
          </button>
          <div
            className="relative inline-block"
            onMouseEnter={() => handleDropdownMouseEnter('profile')}
            onMouseLeave={() => handleDropdownMouseLeave('profile')}
          >
            <FaUserCircle className="text-xl cursor-pointer" />
            {showDropdown.profile && (
              <div className="absolute right-0 mt-6 w-48 bg-white text-black rounded shadow-lg">
                <Link to="/login" className="block px-4 py-2 hover:text-gray-500">Login</Link>
                <Link to="/register" className="block px-4 py-2 hover:text-gray-500">Register</Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {showCart && (
        <div className={`absolute top-16 right-0 bg-white p-8 shadow-lg z-50 ${showCart ? 'w-full md:w-1/2' : ''}`} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <button onClick={handleClose} className="absolute top-8 right-6 text-lg font-bold">
            X
          </button>
          <Cart onClose={handleClose} />
        </div>
      )}

      {showSearchBar && (
        <div className={`absolute top-16 right-0 bg-white p-8 shadow-lg z-50 ${showSearchBar ? 'md:w-1/2' : ''}`} style={{ maxHeight: '100vh', overflowY: 'auto' }}>
          <button onClick={handleClose} className="absolute top-8 right-6 text-lg font-bold">
            X
          </button>
          <SearchBar onClose={handleClose} />
        </div>
      )}
    </>
  );
};

export default Header;
