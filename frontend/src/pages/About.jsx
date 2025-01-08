import React from "react";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-yellow-200 flex items-center justify-center p-6 font-sans">
      <div className="max-w-6xl w-full bg-yellow-50 rounded-lg shadow-lg p-10 space-y-8">

        {/* Title Section */}
        <h1 className="text-5xl font-bold text-gray-900 text-center">ABOUT</h1>
        <p className="text-3xl italic text-center text-gray-700">
          Crafting Sweet Memories, One Dessert at a Time!
        </p>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Story Section */}
          <div className="bg-purple-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">STORY</h2>
            <p className="text-gray-700 leading-relaxed">
              Our journey began with a passion for creating desserts that bring joy to every celebration. From our family kitchen to your table, we take pride in crafting treats with love and care.
            </p>
          </div>

          {/* Goal Section */}
          <div className="bg-purple-200 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">GOAL</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to bring happiness through our handcrafted desserts, making every moment sweeter.
            </p>
          </div>

          {/* Unique Section */}
          <div className="bg-purple-200 p-6 rounded-lg col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">WHAT MAKES US UNIQUE?</h2>
            <p className="text-gray-700 leading-relaxed">
              We use only the finest ingredients and time-honored recipes to deliver the perfect balance of flavor and texture.
            </p>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <p className="text-3xl italic text-center text-gray-700 mt-8">
          Ready to treat yourself? Check out our products and discover your next favorite dessert!
        </p>
      </div>
    </section>
  );
};

export default About;
