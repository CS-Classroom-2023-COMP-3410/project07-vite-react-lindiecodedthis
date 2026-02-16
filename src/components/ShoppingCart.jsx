import Button from "./Button";

function ShoppingCart({
  cart,
  onRemoveOne,
  totalPrice,
  onCheckout,
  showCheckout = false,
  title = "Shopping Cart",
}) {
  if (!cart || cart.length === 0) return null;

  return (
    <div
      style={{
        width: "300px",
        padding: "15px",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        alignSelf: "flex-start",
      }}
    >
      <h3>{title}</h3>

      <ul style={{ padding: 0, listStyle: "none" }}>
        {cart.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 0",
              borderBottom: "1px solid #ddd",
            }}
          >
            <div>
              <strong>{item.title}</strong> × {item.quantity}
              <div>${item.price * item.quantity}</div>
            </div>

            <Button onClick={() => onRemoveOne(item.id)} variant="danger">
              −
            </Button>
          </li>
        ))}
      </ul>

      <div
        style={{
          marginTop: "15px",
          padding: "10px 0",
          borderTop: "2px solid #ddd",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <strong>Total:</strong>
        <strong>${totalPrice}</strong>
      </div>

      {showCheckout && (
        <Button
          onClick={onCheckout}
          variant="success"
          style={{ width: "100%", marginTop: "10px" }}
        >
          Checkout
        </Button>
      )}
    </div>
  );
}

export default ShoppingCart;
