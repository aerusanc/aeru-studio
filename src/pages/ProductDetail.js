import React from 'react';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../assets/styles.css';

const ProductImage = ({ src, alt }) => (
    <div className="w-full border rounded-lg mt-6 sm:p-4 bg-white">
        <img src={src} alt={alt} className="w-full h-auto object-contain" />
    </div>
);

const ProductDetails = ({ name, reviews }) => (
    <div className="w-full flex flex-col space-y-4 p-4 bg-white">
        <div className="bg-white p-2 sm:p-4 rounded-lg space-y-2 sm:space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold truncate">Best Seller</h2>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold truncate">{name}</h2>
            <div className="flex items-center space-x-2 text-xs sm:text-sm">
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < reviews ? "text-yellow-500" : "text-gray-500"} />
                    ))}
                </div>
                <div>{reviews} Reviews</div>
            </div>
            <div className="text-xs sm:text-sm">Select Size</div>
            <div className="flex flex-wrap gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map(size => (
                    <button key={size} className="border rounded-full px-2 sm:px-3 py-1 text-xs sm:text-sm">{size}</button>
                ))}
            </div>
            <button className=" px-4 py-2 border rounded-full w-full text-xs sm:text-sm">SHOP NOW</button>
            <button className=" p-2 border rounded-full w-full flex justify-center items-center text-xs sm:text-sm">
                <FaShoppingCart className="text-base sm:text-lg mr-2" />
                Add to Cart
            </button>
        </div>
    </div>
);

const ProductInfo = ({ description, details }) => (
    <div className="w-full flex flex-col space-y-4 p-4">
        <div className="bg-white p-2 sm:p-4 rounded-lg space-y-2 sm:space-y-4">
        <h3 className="text-base sm:text-lg md:text-xl font-bold">Product Info</h3>
        <p className="mt-2 text-xs sm:text-sm line-clamp-3">{description}</p>
        <ul className="mt-2 text-xs sm:text-sm list-disc list-inside">
            {details.map((detail, index) => (
                <li key={index}>{detail}</li>
            ))}
        </ul>
        <p className="mt-2 text-xs sm:text-sm">
            Colour: Red<br />
            Product code: U06692<br />
            Material: 100% polyester
        </p>
    </div>
    </div>
);

const ProductDetail = () => {
    const productName = "Home Jersey 2024/2025";
    const productDescription = "Your Arsenal pride just got cooler. Designed in collaboration with London-based, Italian-inspired streetwear brand Aries, the Arsenal x Aries Bolt T-shirt is the dream t-shirt you've been waiting for.";
    const productDetails = [
        "Heat-applied reflective retro cannon and Highbury-inspired temple graphics at chest",
        "Heat-applied reflective Aries slogan on the front",
        "Tonal bolt stripes pattern",
        "Regular, unisex fit",
        "For men, we recommend sizing up from your usual Arsenal size",
        "Our male model (6' 1\") wears a size Large and has a 34.5\" chest, 28.5\" waist",
        "Our female model (5' 9\") wears a size Small and has a 32\" bust, 28\" waist"
    ];

    return (
        <div className="bg-white min-h-screen">
            <main className=" mt-16 flex justify-center">
                <div className="w-full max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <ProductImage
                            src={`${process.env.PUBLIC_URL}/assets/product.png`}
                            alt={productName}
                        />
                        <div>
                            <ProductDetails name={productName} reviews={3} />
                            <ProductInfo description={productDescription} details={productDetails} />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProductDetail;
