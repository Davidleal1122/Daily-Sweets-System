import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CheckoutIcon from "../assets/CheckoutIcons/CheckoutIcon.svg";
import MoneyIcon from "../assets/CheckoutIcons/MoneyIcon.svg";
import OnlinePaymentIcon from "../assets/CheckoutIcons/OnlinePaymentIcon.svg";

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState("GCASH");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        streetAddress: "",
        contactNumber: "",
        city: "",
        province: "",
        postalCode: "",
    });
    const navigate = useNavigate();
    const { cartItems, clearCart } = useCart();  
    const [showModal, setShowModal] = useState(false);
    const [formError, setFormError] = useState(false);  // ✅ Added for error handling

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // ✅ Check if all form fields are filled before showing modal
    const handlePlaceOrder = () => {
        const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");
        if (isFormComplete) {
            setShowModal(true);
            setFormError(false); // ✅ Clear error if form is complete
        } else {
            setFormError(true); // ✅ Show error if fields are empty
        }
    };

    const confirmOrder = () => {
        clearCart();  // ✅ Clear the cart after confirming the order
        setShowModal(false);
        navigate('/order-confirmation');
    };

    const cancelOrder = () => {
        setShowModal(false);
    };

    return (
        <section className="min-h-screen w-full bg-yellow-200 p-8 font-sans flex items-center justify-center">
            <div className="max-w-7xl w-full bg-yellow-50 rounded-lg shadow-lg p-10 space-y-8">
                
                {/* ✅ Title Section */}
                <div className="flex justify-center items-center space-x-4">
                    <img src={CheckoutIcon} alt="Checkout Icon" className="w-12 h-12" />
                    <h1 className="text-5xl font-bold text-center text-gray-900">CHECKOUT</h1>
                </div>

                {/* ✅ Shipping Address Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-400">
                    <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
                    <form className="space-y-4">
                        <div className="flex gap-4">
                            <input 
                                type="text" 
                                name="firstName" 
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder="First Name" 
                                className="p-4 w-full rounded-lg border border-gray-400 bg-gray-100"
                                required
                            />
                            <input 
                                type="text" 
                                name="lastName" 
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder="Last Name" 
                                className="p-4 w-full rounded-lg border border-gray-400 bg-gray-100"
                                required
                            />
                        </div>
                        <input 
                            type="text" 
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleInputChange}
                            placeholder="Street Address" 
                            className="p-4 w-full rounded-lg border border-gray-400 bg-gray-100"
                            required
                        />
                        <div className="flex gap-4">
                            <input 
                                type="text" 
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                placeholder="Contact Number" 
                                className="p-4 w-full rounded-lg border border-gray-400 bg-gray-100"
                                required
                            />
                            <input 
                                type="text" 
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                placeholder="City" 
                                className="p-4 w-full rounded-lg border border-gray-400 bg-gray-100"
                                required
                            />
                        </div>
                        <div className="flex gap-4">
                            <input 
                                type="text" 
                                name="province"
                                value={formData.province}
                                onChange={handleInputChange}
                                placeholder="Province" 
                                className="p-4 w-full rounded-lg border border-gray-400 bg-gray-100"
                                required
                            />
                            <input 
                                type="text" 
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleInputChange}
                                placeholder="Postal Code" 
                                className="p-4 w-full rounded-lg border border-gray-400 bg-gray-100"
                                required
                            />
                        </div>
                    </form>
                </div>

                {/* ✅ Show error message if the form is incomplete */}
                {formError && (
                    <p className="text-red-600 font-semibold text-center">Please fill out all fields before placing your order.</p>
                )}

                {/* ✅ Order Summary Section */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md border border-gray-400">
                    <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4 text-black">
                            <p className="text-lg font-bold">{item.name}</p>
                            <p className="text-lg">₱{(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                    ))}
                    <hr className="my-4 border-t border-gray-400" />
                    <div className="flex justify-between text-2xl font-bold text-black">
                        <span>Total</span>
                        <span>₱{totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                {/* ✅ Centered Place Order Button */}
                <button 
                    onClick={handlePlaceOrder} 
                    className="bg-green-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-green-600 mx-auto block"
                >
                    PLACE ORDER
                </button>
            </div>

            {/* ✅ Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <p className="text-2xl font-bold text-red-600">Confirm Your Order</p>
                        <p className="text-lg text-black mt-4">Are you sure you want to place your order?</p>
                        <div className="flex justify-center space-x-4 mt-6">
                            <button 
                                onClick={confirmOrder} 
                                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
                            >
                                Confirm
                            </button>
                            <button 
                                onClick={cancelOrder} 
                                className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Checkout;
