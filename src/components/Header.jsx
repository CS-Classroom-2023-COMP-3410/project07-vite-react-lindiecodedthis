function Header({ currentPage, onNavigate, cartCount = 0 }) {
    const navStyle = {
      display: "flex",
      justifyContent: "space-between",
      padding: "15px",
      backgroundColor: "#f8f9fa",
      marginBottom: "20px",
    };
  
    const navItems = [
      { id: "home", label: "Home" },
      { id: "products", label: "Products" },
      { id: "profile", label: "Profile" },
      {
        id: "cart",
        label: cartCount > 0 ? `Cart (${cartCount})` : "Cart",
      },
    ];
  
    return (
      <header style={navStyle}>
        <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
          React Multi-Page Demo
        </div>
  
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "15px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  style={{
                    textDecoration: "none",
                    color: currentPage === item.id ? "#007bff" : "#333",
                    fontWeight: currentPage === item.id ? "bold" : "normal",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  