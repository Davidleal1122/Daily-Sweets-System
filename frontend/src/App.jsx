import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation"; 
import Header from "./pages/Header";
import { CartProvider } from "./context/CartContext";

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />
                <div className="flex flex-col min-h-screen overflow-hidden">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/order-confirmation" element={<OrderConfirmation />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
};

export default App;
