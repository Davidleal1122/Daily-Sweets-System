import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import BasketIcon from "../assets/BasketIcons/Basket.svg";
import DeleteIcon from "../assets/BasketIcons/DeleteIcon.svg";

// ✅ Confirmation Modal Component
const ConfirmDeleteModal = ({ itemName, onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-bold text-red-600">Confirm Deletion</p>
                <p className="text-lg mt-2">Are you sure you want to delete <strong>{itemName}</strong> from your cart?</p>
                <div className="flex justify-center space-x-4 mt-6">
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
                    >
                        Confirm
                    </button>
                    <button
                        onClick={onCancel}
                        className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

const Basket = () => {
    const { cartItems, updateQuantity, removeItem } = useCart();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // ✅ Handle opening the delete confirmation modal
    const handleDeleteClick = (item) => {
        setItemToDelete(item);
        setShowModal(true);
    };

    // ✅ Confirm the deletion and close the modal
    const confirmDelete = () => {
        removeItem(itemToDelete.id);
        setShowModal(false);
    };

    // ✅ Cancel deletion and close the modal
    const cancelDelete = () => {
        setItemToDelete(null);
        setShowModal(false);
    };

    return (
        <section className="min-h-screen w-full bg-yellow-200 p-8 font-sans flex items-center justify-center">
            <div className="max-w-7xl w-full bg-yellow-50 rounded-lg shadow-lg p-10 space-y-8">
                {/* Title Section */}
                <div className="flex justify-center items-center space-x-4">
                    <img src={BasketIcon} alt="Basket Icon" className="w-12 h-12" />
                    <h1 className="text-5xl font-bold text-center text-gray-900">MY BASKET</h1>
                </div>

                {/* ✅ Cart Empty Message */}
                {cartItems.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-3xl font-bold text-gray-700 mb-6">Your cart is empty!</p>
                        <Link 
                            to="/products" 
                            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl hover:bg-blue-600"
                        >
                            Add Products Now
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Basket Items Section */}
                        <div className="space-y-6 border border-black p-6 bg-pink-100 rounded-lg">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex flex-col md:flex-row justify-between items-center bg-pink-300 p-4 rounded-lg shadow-md space-y-4 md:space-y-0">
                                    <div className="flex items-center space-x-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-contain" />
                                        <p className="text-2xl font-semibold">{item.name}</p>
                                    </div>

                                    {/* Quantity Control Section */}
                                    <div className="flex items-center space-x-4">
                                        <button onClick={() => updateQuantity(item.id, -1)} className="p-2 bg-gray-200 rounded-full text-xl">-</button>
                                        <span className="text-xl font-bold">{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)} className="p-2 bg-gray-200 rounded-full text-xl">+</button>
                                    </div>

                                    {/* Price Section */}
                                    <p className="text-xl font-semibold">₱{(item.price * item.quantity).toFixed(2)}</p>

                                    {/* Delete Button with Confirmation */}
                                    <button onClick={() => handleDeleteClick(item)}>
                                        <img src={DeleteIcon} alt="Delete Icon" className="w-8 h-8" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Total and Checkout Button Section */}
                        <p className="text-3xl font-bold text-center">Total: ₱{totalPrice.toFixed(2)}</p>

                        {/* ✅ Centered Checkout Button */}
                        <button 
                            onClick={() => navigate('/checkout')} 
                            className="bg-red-500 text-white px-8 py-4 rounded-lg text-xl text-center font-bold hover:bg-red-600 mx-auto block"
                        >
                            CHECKOUT
                        </button>
                    </>
                )}

            </div>

            {/* ✅ Render the Confirmation Modal when showModal is true */}
            {showModal && (
                <ConfirmDeleteModal
                    itemName={itemToDelete.name}
                    onConfirm={confirmDelete}
                    onCancel={cancelDelete}
                />
            )}
        </section>
    );
};

export default Basket;
