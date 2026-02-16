import { useState } from "react";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ProfilePage from "./pages/ProfilePage";
import CartPage from "./pages/CartPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // ✅ Move Products data to App so stock stays consistent across pages
  const initialProducts = [
    { id: 1, title: "Smartphone", description: "Latest model with advanced features", price: 699, stock: 15, imageUrl: "https://via.placeholder.com/300x150?text=Smartphone" },
    { id: 2, title: "Laptop", description: "Powerful laptop for work and gaming", price: 1299, stock: 8, imageUrl: "https://via.placeholder.com/300x150?text=Laptop" },
    { id: 3, title: "Headphones", description: "Noise-cancelling wireless headphones", price: 249, stock: 23, imageUrl: "https://via.placeholder.com/300x150?text=Headphones" },
    { id: 4, title: "Smartwatch", description: "Fitness tracking and notifications", price: 199, stock: 12, imageUrl: "https://via.placeholder.com/300x150?text=Smartwatch" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  const handleNavigate = (pageId) => setCurrentPage(pageId);

  // ✅ Add to cart (preserves your stock behavior)
  const addToCart = (product) => {
    const productInState = products.find((p) => p.id === product.id);
    if (!productInState || productInState.stock <= 0) return;

    setProducts((prev) =>
      prev.map((p) => (p.id === product.id ? { ...p, stock: p.stock - 1 } : p))
    );

    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // ✅ Remove one (your minus button)
  const removeFromCart = (productId) => {
    const item = cart.find((i) => i.id === productId);
    if (!item) return;

    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, stock: p.stock + 1 } : p))
    );

    setCart((prev) => {
      const found = prev.find((i) => i.id === productId);
      if (!found) return prev;

      if (found.quantity > 1) {
        return prev.map((i) =>
          i.id === productId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.id !== productId);
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => alert(`Checkout completed for $${totalPrice}!`);

  const renderPage = () => {
    switch (currentPage) {
      case "products":
        return (
          <ProductsPage
            products={products}
            cart={cart}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onAddToCart={addToCart}
          />
        );
      case "profile":
        return <ProfilePage />;
      case "cart":
        return (
          <CartPage
            cart={cart}
            totalPrice={totalPrice}
            onRemoveOne={removeFromCart}
            onCheckout={handleCheckout}
          />
        );
      case "home":
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Header currentPage={currentPage} onNavigate={handleNavigate} cartCount={cartCount} />

      {/* cart visible on every page IF it has items */}
      {cart.length > 0 && (
        <ShoppingCart
          cart={cart}
          totalPrice={totalPrice}
          onRemoveOne={removeFromCart}
          title="Cart Summary"
          showCheckout={false}
        />
      )}

      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
