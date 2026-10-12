import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import FoodMenu from "./components/FoodMenu";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import CheckoutModal from "./components/CheckoutModal";
import SuccessModal from "./components/SuccessModal";
import Toast from "./components/Toast";
import { dishesData } from "./data/foodData";

const App = () => {
  // Cart state: Array of { id, name, price, image, quantity }
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([1]); // default liked Fattoush Salad
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  // Modal & Drawer visibility states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState({});

  // Toast notification state
  const [toastMessage, setToastMessage] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Toast helper
  const triggerToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 2500);
  };

  // ScrollSpy for Navbar Active Section Indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sections = ["home", "categories", "menu", "about", "services"];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cart Handlers
  const handleAddToCart = (dish) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === dish.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [
        ...prevCart,
        {
          id: dish.id,
          name: dish.name,
          price: dish.price,
          image: dish.image,
          quantity: 1,
        },
      ];
    });

    triggerToast(`🛒 ${dish.name} added to cart!`);
  };

  const handleIncreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const handleRemoveCartItem = (id) => {
    const item = cart.find((i) => i.id === id);
    setCart((prevCart) => prevCart.filter((i) => i.id !== id));
    if (item) {
      triggerToast(`🗑️ ${item.name} removed from cart`);
    }
  };

  // Favorites Handler
  const handleToggleLike = (id) => {
    const dish = dishesData.find((d) => d.id === id);
    const dishName = dish ? dish.name : "Dish";

    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((item) => item !== id));
      triggerToast(`Removed ${dishName} from favorites`);
    } else {
      setFavorites((prev) => [...prev, id]);
      triggerToast(`❤️ Added ${dishName} to favorites!`);
    }
  };

  // Category & Search Handlers
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    // Smooth scroll to menu section
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setSelectedCategory("All");
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  // Checkout & Order Flow
  const handleProceedCheckout = () => {
    if (cart.length === 0) {
      triggerToast("⚠️ Your cart is empty! Add dishes to proceed.");
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleBackToCart = () => {
    setIsCheckoutOpen(false);
    setIsCartOpen(true);
  };

  const handleConfirmOrder = (orderData) => {
    const orderId = "#FD-" + Math.floor(10000 + Math.random() * 90000);
    const completedOrder = {
      ...orderData,
      orderId,
      estimatedTime: "25 - 35 Minutes",
    };

    setIsCheckoutOpen(false);
    setOrderDetails(completedOrder);
    setIsSuccessOpen(true);

    // Clear cart after placing order
    setCart([]);
    triggerToast(`🎉 Order ${orderId} confirmed successfully!`);
  };

  const handleCloseSuccess = () => {
    setIsSuccessOpen(false);
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white text-foodiBlack">
      {/* Navigation Header */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <FoodMenu
          dishes={dishesData}
          selectedCategory={selectedCategory}
          searchTerm={searchTerm}
          onAddToCart={handleAddToCart}
          favorites={favorites}
          onToggleLike={handleToggleLike}
        />
        <Testimonials />
        <Services />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-in Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onIncreaseQty={handleIncreaseQty}
        onDecreaseQty={handleDecreaseQty}
        onRemove={handleRemoveCartItem}
        onProceedCheckout={handleProceedCheckout}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        onBackToCart={handleBackToCart}
        cart={cart}
        onConfirmOrder={handleConfirmOrder}
      />

      {/* Order Success Receipt Modal */}
      <SuccessModal
        isOpen={isSuccessOpen}
        onClose={handleCloseSuccess}
        orderDetails={orderDetails}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} visible={isToastVisible} />
    </div>
  );
};

export default App;
