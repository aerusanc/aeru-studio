import React, { useState } from 'react';
import '../assets/styles.css'; // Pastikan Anda membuat file ini untuk gaya kustom

const App = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // State untuk mengontrol tampilan komponen

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // Contoh saran pencarian
    const sampleSuggestions = [
      'LE 5 À 7',
      'LOULOU',
      'KATE',
      'SAC DE JOUR',
      'ICARE',
    ];

    // Filter saran berdasarkan input
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
    setSuggestions([]); // Kosongkan saran setelah memilih
  };

  const handleClose = () => {
    setIsOpen(false); // Mengubah state untuk menutup komponen
  };

  if (!isOpen) return null; // Tidak merender komponen jika isOpen false

  return (
    <div className={`relative bg-white p-4 shadow-lg z-50 w-full h-screen  flex items-start justify-center md:left-11 md:top-11 text-black`}>
      <div className="bg-white bg-opacity-90 p-8 slide-in max-w-[800px] w-full rounded-lg shadow-lg">
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
          {/* Dropdown untuk saran */}
          {suggestions.length > 0 && (
            <div className="dropdown">
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index} 
                  className="dropdown-item"
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
          <div className="mt-4">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/product.png`} 
              alt="Recently viewed item" 
              className="w-[150px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-8 text-white text-sm">
        <p>WINTER</p>
        <p>DISCOVER THE COLLECTION</p>
      </div>
    </div>
  );
};

export default App;
