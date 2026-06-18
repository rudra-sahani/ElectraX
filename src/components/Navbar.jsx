import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../supabase";
// import { FiShoppingCart } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useRef } from "react";


function Navbar() {
  const profileRef = useRef(null);
  useEffect(() => {
  function handleClickOutside(event) {
    if (
      profileRef.current &&
      !profileRef.current.contains(
        event.target
      )
    ) {
      setShowProfile(false);
    }
  }

  document.addEventListener(
    "mousedown",
    handleClickOutside
  );

  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };
}, []);
  const location = useLocation();
  const [user, setUser] = useState(null);
const [showProfile, setShowProfile] =
  useState(false);
  const { cartItems } =
  useContext(CartContext);
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#00F5FF" : "white",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease",
    textShadow: isActive
      ?   "0 0 15px rgba(0,245,255,0.5)"
      : "none",
  });
const saveScroll = () => {
  sessionStorage.setItem(
    "homeScroll",
    window.scrollY
  );
};
useEffect(() => {
  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    setUser(user);
  }

  getUser();

  const {
    data: authListener,
  } = supabase.auth.onAuthStateChange(
  (_event, session) => {
    setUser(session?.user ?? null);

    setShowProfile(false);
  }
);

  return () => {
    authListener.subscription.unsubscribe();
  };
}, []);
async function handleLogout() {
  const { error } =
    await supabase.auth.signOut();

  if (error) {
    alert(error.message);
    return;
  }

  setShowProfile(false);
}
useEffect(() => {
  setShowProfile(false);
}, [location.pathname]);

// useEffect(() =>
//  {
//   function handleClickOutside(event) {
//     if (
//       profileRef.current &&
//       !profileRef.current.contains(
//         event.target
//       )
//     ) {
//       setShowProfile(false);
//     }
//   }

//   document.addEventListener(
//     "mousedown",
//     handleClickOutside
//   );

//   return () => {
//     document.removeEventListener(
//       "mousedown",
//       handleClickOutside
//     );
//   };
// }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,

        // backdropFilter: "blur(20px)",

background:
"rgba(2, 6, 23, 0.8)",
backdropFilter: "blur(15px)",
borderBottom: "1px solid rgba(255,255,255,0.08)",
        // borderBottom:
        //   "1px solid rgba(255,255,255,0.08)",
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
  "0 0 20px rgba(139,92,246,0.6)"
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
  onClick={saveScroll}
>
  Products
</NavLink>
 {user && (
  <NavLink
    to="/add-product"
    style={linkStyle}
  >
    Sell
  </NavLink>
)}

{user && (
  <NavLink
    to="/my-listings"
    style={linkStyle}
  >
    My Listings
  </NavLink>
)}
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

    // backdropFilter: "blur(10px)",

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
<div
ref={profileRef}
  style={{
    position: "relative",
  }}
>
  <button
    onClick={() =>
      setShowProfile(!showProfile)
    }
    style={{
      background: "transparent",
      border: "none",
      color: "white",
      cursor: "pointer",
      fontSize: "1rem",
    }}
  >
    <div
  
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "scale(1.08)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "scale(1)";
  }}
  style={{
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg,#00F5FF,#8B5CF6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontWeight: "700",
    color: "#fff",
    fontSize: "1rem",

    boxShadow:
      "0 0 20px rgba(139,92,246,0.4)",

    transition: "all 0.3s ease",
  }}
>
  {user?.email
    ? user.email[0].toUpperCase()
    : "G"}
</div>
  </button>

  {showProfile && (
    <div
      style={{
        position: "absolute",
        top: "50px",
        right: 0,

        width: "250px",

        background:
          "rgba(2,6,23,0.95)",

        border:
          "1px solid rgba(255,255,255,0.08)",

        borderRadius: "15px",

        padding: "20px",

        zIndex: 9999,
      }}
    >
      <p>
        {user?.email || "Guest"}
      </p>

      <hr
        style={{
          margin: "15px 0",
          opacity: 0.2,
        }}
      />

      {user ? (
  <>
    <NavLink
      to="/my-listings"
      style={{
        display: "block",
        color: "white",
        marginBottom: "12px",
        textDecoration: "none",
      }}
    >
      My Listings
    </NavLink>

    <NavLink
      to="/add-product"
      style={{
        display: "block",
        color: "white",
        marginBottom: "12px",
        textDecoration: "none",
      }}
    >
      Add Product
    </NavLink>

    <button
      onClick={handleLogout}
      style={{
        width: "100%",
        padding: "12px",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        background:
          "linear-gradient(90deg,#EF4444,#DC2626)",
        color: "white",
      }}
    >
      Logout
    </button>
  </>
) : (
  <>
    <NavLink
      to="/login"
      style={{
        display: "block",
        color: "white",
        marginBottom: "12px",
        textDecoration: "none",
      }}
    >
      Login
    </NavLink>

    <NavLink
      to="/register"
      style={{
        display: "block",
        color: "white",
        textDecoration: "none",
      }}
    >
      Register
    </NavLink>
  </>
)}
    </div>
  )}
</div>
        </div>
        
      </div>
      
    </nav>
  );
}

export default Navbar;