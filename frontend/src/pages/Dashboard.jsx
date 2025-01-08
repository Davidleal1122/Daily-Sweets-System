// HeroSection Component
import React from "react";
import { useNavigate } from "react-router-dom";
import LecheFlanImage from "../assets/ProductIcons/Letcheflan.svg";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/products");
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen w-full bg-yellow-50 px-6 md:px-[5rem] py-[3rem] font-sans space-y-6 md:space-y-0 overflow-hidden relative z-0">
      {/* Left Section - Image with corrected size */}
      <div className="flex-1 flex justify-center md:justify-start max-w-[30rem] md:max-w-[40rem]">
        <img 
          src={LecheFlanImage} 
          alt="Leche Flan" 
          className="w-[70%] md:w-full max-w-[30rem] object-contain"
        />
      </div>

      {/* Right Section - Text Centered Properly */}
      <div className="flex-1 text-center space-y-6 md:space-y-[2rem] px-4 md:px-0">
        <div className="inline-block border border-black rounded-full py-[0.5rem] px-[1.5rem] text-[1rem] md:text-[1.2rem] font-medium text-gray-600">
          100% NO PRESERVATIVES
        </div>

        <h1 className="text-[2rem] md:text-[4rem] leading-tight font-extrabold text-gray-900">
          THE PURE <br /> SWEETNESS
        </h1>

        <p className="text-[1rem] md:text-[1.8rem] text-gray-700 leading-relaxed">
          Indulge in the rich, creamy goodness of our homemade Leche Flan and 
          the delightful sweetness of Ube Halaya!
        </p>

        <div className="flex justify-center">
          <button 
            onClick={handleOrderNow}
            className="flex items-center justify-center bg-yellow-500 text-white text-[1rem] md:text-[1.8rem] font-bold rounded-full py-[0.8rem] md:py-[1.2rem] px-[1.5rem] md:px-[2.5rem] shadow-lg hover:bg-yellow-600 transition duration-300"
          >
            Order Now
            <span className="ml-[1rem] md:ml-[1.5rem] bg-black text-white p-[0.8rem] md:p-[1rem] rounded-full">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
