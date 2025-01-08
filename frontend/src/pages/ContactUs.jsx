import React from "react";
import { Link } from "react-router-dom";
import ContactIcon from "../assets/ContactUs/ContactIcon.svg";
import ContactIcon2 from "../assets/ContactUs/ContactIcon2.svg";
import EmailIcon from "../assets/ContactUs/EmailIcon.svg";

const ContactUs = () => {
  return (
    <section className="min-h-screen w-full bg-yellow-200 p-8 font-sans flex items-center justify-center">
      <div className="max-w-7xl w-full bg-yellow-50 rounded-lg shadow-lg p-10 space-y-8">
        
        {/* Title Section */}
        <div className="flex justify-center items-center space-x-4">
          <img src={ContactIcon} alt="Contact Icon" className="w-12 h-12" />
          <h1 className="text-5xl font-bold text-center text-gray-900">
            CONTACT ONLINE STORE
          </h1>
        </div>

        {/* Contact Cards Section - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Call Us Card */}
          <div className="bg-pink-300 p-8 rounded-2xl shadow-md space-y-4 border-2 border-black">
            <h2 className="text-2xl font-bold text-center">CALL US</h2>
            <p className="text-lg flex items-center justify-center space-x-2">
              <img src={ContactIcon2} alt="Phone Icon" className="w-8 h-8" />
              <span>+63 912 345 6789</span>
            </p>
            <p className="text-center text-gray-700">(Available till Monday - 8am to 4pm)</p>
          </div>

          {/* Email Us Card */}
          <div className="bg-pink-300 p-8 rounded-2xl shadow-md space-y-4 border-2 border-black">
            <h2 className="text-2xl font-bold text-center">E-MAIL US</h2>
            <p className="text-lg flex items-center justify-center space-x-2">
              <img src={EmailIcon} alt="Email Icon" className="w-8 h-8" />
              <span>DScustomerservice@gmail.com</span>
            </p>
            <p className="text-center text-gray-700">(Available till Monday - 8am to 4pm)</p>
          </div>

          {/* We'll Be In Touch Card */}
          <div className="bg-pink-300 p-8 rounded-2xl shadow-md space-y-4 border-2 border-black">
            <h2 className="text-2xl font-bold text-center">WE'LL BE IN TOUCH</h2>
            <p className="text-center text-gray-700 leading-relaxed">
              One of our service agents will reach out to you ASAP. During business hours, which are 
              Monday to Friday, 8am - 4pm CET, we usually respond within a couple of hours. 
              For general questions, check out our FAQs.
            </p>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-10">
          <Link to="/" className="text-2xl text-yellow-700 underline hover:text-yellow-900">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
