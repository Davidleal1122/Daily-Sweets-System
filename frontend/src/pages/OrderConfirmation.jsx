import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Generate a random order number for the confirmation message
const orderNumber = Math.floor(100000 + Math.random() * 900000);

const OrderConfirmation = () => {
    const { orderSummary } = useCart(); // ✅ Use orderSummary here instead of cartItems

    // Calculate total price based on the order summary instead of cartItems
    const totalPrice = orderSummary.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <section className="min-h-screen w-full bg-yellow-200 p-8 font-sans flex items-center justify-center">
            <div className="max-w-7xl w-full bg-yellow-50 rounded-lg shadow-lg p-10 space-y-8 text-center">
                
                {/* ✅ Title Section */}
                <h1 className="text-5xl font-bold text-center text-gray-900">Order Confirmed!</h1>

                {/* ✅ Message Section */}
                <p className="text-2xl text-black leading-relaxed">
                    Thank you for your order! 🎉 Your desserts are being prepared and will be delivered shortly. 
                    <br />
                    <strong>Your Order Number:</strong> #{orderNumber}
                </p>

                {/* ✅ Order Summary Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 space-y-6">
                    <h2 className="text-3xl font-bold text-black">Order Summary</h2>
                    {orderSummary.length === 0 ? (
                        <p className="text-lg text-black">No items were added to the cart.</p>
                    ) : (
                        <div className="space-y-4">
                            {orderSummary.map((item) => (
                                <div key={item.id} className="flex justify-between items-center text-black border-b pb-2">
                                    <p className="text-lg font-bold">{item.name}</p>
                                    <p className="text-lg">₱{(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                            <div className="flex justify-between font-bold text-2xl pt-4 border-t">
                                <span>Total:</span>
                                <span>₱{totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* ✅ Back to Home Button */}
                <Link 
                    to="/" 
                    className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-600 mx-auto block"
                >
                    Return to Home
                </Link>
            </div>
        </section>
    );
};

export default OrderConfirmation;
