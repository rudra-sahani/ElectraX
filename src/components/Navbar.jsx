import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { FiShoppingCart } from "react-icons/fi";


function Navbar() {
  const { cartItems } =
  useContext(CartContext);
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#00F5FF" : "white",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
    textShadow: isActive
      ? "95px 80px 0 80px rgba(0,245,255,0.3)"
      : "none",
  });

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,

        backdropFilter: "blur(20px)",

background:
"rgba(2, 6, 23, 0.8)",
backdropFilter: "blur(15px)",
borderBottom: "1px solid rgba(255,255,255,0.08)",
        borderBottom:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

          padding: "20px 60px",
        }}
      >
        <NavLink
  to="/"
  style={{
    textDecoration: "none",
  }}
>
  <h1
    style={{
      color: "white",
      fontSize: "2rem",
      textShadow:
        "0 0 20px rgba(139,92,246,0.6)",
    }}
  >
    ElectraX
  </h1>
</NavLink>

        <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "40px",
  }}
>
          <NavLink to="/" style={linkStyle}>
            Home
          </NavLink>

          <NavLink
            to="/products"
            style={linkStyle}
          >
            Products
          </NavLink>

          <NavLink
            to="/about"
            style={linkStyle}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            style={linkStyle}
          >
            Contact
          </NavLink>

         
         <Link
  to="/cart"
  style={{
    textDecoration: "none",
  }}
>
          
          <div
  style={{
    position: "relative",

    cursor: "pointer",

    width: "46px",
    height: "46px",

    borderRadius: "14px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    background:
      "rgba(255,255,255,0.04)",

    border:
      "1px solid rgba(255,255,255,0.08)",

    backdropFilter: "blur(10px)",

    transition: "all 0.3s ease",
  }}

  onMouseEnter={(e) => {
    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(139,92,246,0.3)";

    e.currentTarget.style.borderColor =
      "#8B5CF6";
  }}

  onMouseLeave={(e) => {
    e.currentTarget.style.boxShadow =
      "none";

    e.currentTarget.style.borderColor =
      "rgba(255,255,255,0.08)";
  }}
>
  <FiShoppingCart
    size={24}
    color="white"
  />

  <span
    style={{
      position: "absolute",
      top: "-8px",
      right: "-10px",

      width: "20px",
      height: "20px",

      borderRadius: "50%",

background: "#8B5CF6",
color: "white",
      fontSize: "0.75rem",

      fontWeight: "700",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {cartItems.length}
  </span>
</div>
</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;