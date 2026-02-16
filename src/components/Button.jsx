// A reusable button component with customizable appearance
function Button({ onClick, children, variant = "primary", disabled = false }) {
  // Define different styles based on variant
  const getButtonStyle = () => {
    switch (variant) {
      case "secondary":
        return { backgroundColor: "#6c757d", color: "white" };
      case "success":
        return { backgroundColor: "#28a745", color: "white" };
      case "danger":
        return { backgroundColor: "#dc3545", color: "white" };
      case "primary":
      default:
        return { backgroundColor: "#007bff", color: "white" };
    }
  };

  const baseStyle = {
    padding: "8px 16px",
    border: "none",
    borderRadius: "4px",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.7 : 1,
    ...getButtonStyle()
  };

  return (
    <button
      style={baseStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;