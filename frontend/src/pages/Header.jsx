import React, { useState } from "react";
import { Link } from "react-router-dom";
import DailySweetsLogo from "../assets/HeaderIcons/DailySweetsLogo.svg";
import CartIcon from "../assets/HeaderIcons/CartIcon.svg";
import { useCart } from "../context/CartContext"; // ✅ Importing Cart Context

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartItems } = useCart(); // ✅ Accessing cart items from context

    // Count the number of unique products in the cart
    const uniqueProductCount = cartItems.length;

    return (
        <header className="flex items-center justify-between px-6 xl:px-[4rem] py-[1.5rem] bg-yellow-50 shadow-md border-b border-gray-200 sticky top-0 z-50">
            
            {/* Logo Section - Clickable to Home */}
            <Link to="/" className="flex items-center space-x-[1.5rem] cursor-pointer">
                <div className="bg-pink-300 p-[1rem] rounded-full">
                    <img src={DailySweetsLogo} alt="Daily Sweets Logo" className="h-[2.5rem] w-[2.5rem]" />
                </div>
                <span className="text-[1.5rem] xl:text-[2rem] font-semibold text-gray-800">
                    Daily Sweets
                </span>
            </Link>

            {/* Hamburger Button (for Mobile View) */}
            <button 
                className="block xl:hidden text-[2rem]" 
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            {/* Navigation Links with Mobile and Desktop Support */}
            <nav
                className={`absolute xl:relative top-[100%] left-0 w-full xl:w-auto bg-yellow-50 flex flex-col xl:flex-row items-center space-y-4 xl:space-y-0 space-x-0 xl:space-x-[3rem] p-4 xl:p-0 font-bold text-[1.5rem] text-gray-800 transition-all duration-300 ease-in-out ${
                    menuOpen ? "flex" : "hidden xl:flex"
                }`}
            >
                <Link to="/about" className="hover:text-black transition duration-200">About</Link>
                <Link to="/products" className="hover:text-black transition duration-200">Products</Link>
                <Link to="/contact" className="hover:text-black transition duration-200">Contact Us</Link>
                
                {/* ✅ Cart Section with Unique Product Count */}
                <Link to="/basket" className="flex items-center space-x-[1rem] hover:text-black transition duration-200">
                    <span className="text-[1.2rem] xl:text-[1.5rem] font-bold text-gray-700">
                        Basket ({uniqueProductCount}) {/* ✅ Unique Product Count Displayed */}
                    </span>
                    <div className="bg-pink-300 p-[1rem] rounded-full flex items-center justify-center">
                        <img src={CartIcon} alt="Cart Icon" className="h-[2rem] w-[2rem]" />
                    </div>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
