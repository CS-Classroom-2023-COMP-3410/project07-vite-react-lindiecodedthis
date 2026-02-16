import ShoppingCart from "../components/ShoppingCart";

function CartPage({ cart, totalPrice, onRemoveOne, onCheckout }) {
  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ShoppingCart
          cart={cart}
          totalPrice={totalPrice}
          onRemoveOne={onRemoveOne}
          onCheckout={onCheckout}
          showCheckout={true}
          title="Your Shopping Cart"
        />
      )}
    </div>
  );
}

export default CartPage;
