import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CartContext from "./context/CartContext";
import ThemeContext from "./context/ThemeContext";
import NotFoundPage from "./pages/404";
import About from "./pages/About";
import CheckoutCart from "./pages/CheckoutCart";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  //Define cart items state
  const [cartItems, setCartItems] = useState([]);

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode, toggleTheme }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <div className={themeMode}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<CheckoutCart />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Router>
        </div>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
