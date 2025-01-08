import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import LecheFlanImage from "../assets/ProductIcons/Letcheflan.svg";
import UbeHalayaImage from "../assets/ProductIcons/UbeHalaya.svg";
import GrahamDeLetcheImage from "../assets/ProductIcons/GrahamDeLetche.svg";
import MangoGrahamImage from "../assets/ProductIcons/MangoGraham.svg";

// ✅ Modal for Success Message (In Same File)
const Products = () => {
    const [products, setProducts] = useState([]);
    const { addToCart } = useCart();
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/sweets/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const getImage = (productName) => {
        switch (productName) {
            case "Leche Flan": return LecheFlanImage;
            case "Mango Graham": return MangoGrahamImage;
            case "Graham de Leche": return GrahamDeLetcheImage;
            case "Ube Halaya": return UbeHalayaImage;
            default: return "https://via.placeholder.com/150";
        }
    };

    // ✅ Trigger modal for success message
    const triggerModal = (message) => {
        setModalMessage(message);
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000); // Auto-close modal
    };

    const handleAddToCart = (product) => {
        addToCart({
            id: product.id,
            name: product.name,
            description: product.description,
            price: product.price,
            image: getImage(product.name)
        });
        triggerModal(`${product.name} added to cart successfully!`);
    };

    return (
        <section className="min-h-screen w-full bg-yellow-200 p-8 font-sans flex items-center justify-center">
            <div className="max-w-7xl w-full bg-yellow-50 rounded-lg shadow-lg p-10 space-y-8">
                <h1 className="text-5xl font-bold text-center text-black">Our Desserts</h1>

                {/* ✅ Display message if no products */}
                {products.length === 0 ? (
                    <p className="text-center text-2xl text-black">No products available.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {products.map((product) => (
                            <div 
                                key={product.id} 
                                className="flex flex-col items-center bg-yellow-50 p-6 rounded-lg shadow-md space-y-6 transition-transform duration-300 hover:scale-105"
                            >
                                <img src={getImage(product.name)} alt={product.name} className="w-[12rem] h-[12rem] object-contain" />
                                {/* ✅ Product Name is Bold */}
                                <h2 className="text-4xl font-bold text-black">{product.name}</h2>
                                {/* ✅ All Other Text is Black */}
                                <p className="text-black leading-relaxed">{product.description}</p>
                                <p className="text-black text-2xl font-semibold">₱{product.price}</p>
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600"
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* ✅ Modal for Success Message */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-2xl font-bold text-green-600">{modalMessage}</p>
                        <button 
                            onClick={() => setShowModal(false)} 
                            className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;
