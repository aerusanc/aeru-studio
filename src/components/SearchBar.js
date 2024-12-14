import React, { useState } from 'react';
import '../assets/styles.css'; // Make sure this file contains your custom styles

const App = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // State to control component visibility

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Example search suggestions
    const sampleSuggestions = [
      'LE 5 À 7',
      'LOULOU',
      'KATE',
      'SAC DE JOUR',
      'ICARE',
    ];

    // Filter suggestions based on input
    if (value) {
      const filteredSuggestions = sampleSuggestions.filter(item =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleClose = () => {
    setIsOpen(false); // Change state to close component
  };

  if (!isOpen) return null; // Don't render if `isOpen` is false

  return (
    <div className="relative p-4 z-50 w-full h-screen flex items-start justify-center md:left-11 md:top-11 text-black">
      <div className="p-8 slide-in max-w-[800px] w-full rounded-lg shadow-lg bg-white">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-bold">Search</h1>
        </div>
        <div className="relative mb-4">
          <input 
            type="text" 
            value={query}
            onChange={handleInputChange}
            placeholder="SEARCH" 
            className="w-full border-b border-black text-sm focus:outline-none"
          />
          {/* Dropdown for suggestions */}
          {suggestions.length > 0 && (
            <div className="dropdown absolute z-10 bg-white shadow-lg w-full mt-1">
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="dropdown-item p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-sm">HIGHLIGHTS</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>LE 5 À 7</li>
            <li>LOULOU</li>
            <li>KATE</li>
            <li>SAC DE JOUR</li>
            <li>ICARE</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-sm">RECENTLY VIEWED</h2>
          <div className="flex space-x-5 mt-5 overflow-x-auto">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/product.png`} 
              alt="Recently viewed item" 
              className="w-[150px] h-auto"
            />
            <img 
              src={`${process.env.PUBLIC_URL}/assets/product.png`} 
              alt="Recently viewed item" 
              className="w-[150px] h-auto"
            />
          </div>
        </div>
        <div className="absolute top-[650px] left-11 font-bold text-sm">
          <p>WINTER</p>
          <p>DISCOVER THE COLLECTION</p>
          <div className="mt-4">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/product.png`} 
              alt="Recently viewed item" 
              className="w-[150px] h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
