import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";
import gamingSetup from "../assets/gaming-setup.png";
import { useRef } from "react";

function Hero() {
  const [customers, setCustomers] = useState(0);
const [products, setProducts] = useState(0);
const [brands, setBrands] = useState(0);
const buttonRef = useRef(null);

useEffect(() => {
  animate(0, 20, {
    duration: 2,
    ease: "easeOut",
    onUpdate: (value) => {
      setCustomers(Math.floor(value));
    },
  });

  animate(0, 500, {
    duration: 2,
    ease: "easeOut",
    onUpdate: (value) => {
      setProducts(Math.floor(value));
    },
  });

  animate(0, 120, {
    duration: 2,
    ease: "easeOut",
    onUpdate: (value) => {
      setBrands(Math.floor(value));
    },
  });
}, []);
  
  return (
    <section
      style={{
        // minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
       padding: "95px 80px 0 80px", 
      //  paddingTop: "70px",
        overflow: "hidden",

//         background:
// "linear-gradient(90deg, #020617 0%, #020617 40%, #030014 100%)",
      }}
    >
      {/* Left Side */}
     {/* Left Side */}
<div
  style={{
    maxWidth: "750px",
    marginTop: "40px",
  }}
>
       <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    fontSize: "4.5rem",
    fontWeight: "800",
    letterSpacing: "-2px",
    lineHeight: "1",
    marginBottom: "20px",
  }}
>
  <span
    style={{
      fontSize: "1.5rem",
      letterSpacing: "8px",
      color: "#8B8B99",
      display: "block",
         marginTop: "10px",
      marginBottom: "10px",
      textTransform: "uppercase",
    }}
  >
    BUILT FOR
  </span>

<motion.span
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.3,
  }}
  style={{
    fontSize: "8rem",
    fontWeight: "900",
    lineHeight: "0.9",
    display: "block",

    background:
      "linear-gradient(180deg,#FFFFFF,#D1D5DB)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",

    textShadow:
      "0 0 25px rgba(139,92,246,0.25)",
  }}
>
  GAMERS
</motion.span>

  <span
  style={{
    fontSize: "0.95rem",
    letterSpacing: "4px",
    color: "#8B8B99",
    display: "block",
    marginTop: "11px",
    textTransform: "uppercase",
    width: "550px",
    textAlign: "center",
  }}
>
  NEXT-GEN PERFORMANCE
  <div
  style={{
    width: "220px",
    height: "2px",
    margin: "12px auto 25px auto",
    background:
      "linear-gradient(90deg, transparent, #8B5CF6, transparent)",
    boxShadow: "0 0 15px #8B5CF6",
  }}
/>
</span>
{/* 
  <span
    style={{
      background: "linear-gradient(90deg,#00F5FF,#8B5CF6)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      fontSize: "2rem",
      fontWeight: "700",
      display: "block",
      marginTop: "5px",
    }}
  >
    Innovation
  </span> */}
</motion.h1>

        <motion.p
  initial={{
  opacity: 0,
  y: 20,
}}
animate={{
  opacity: 1,
  y: 0,
}}
  transition={{ delay: 0.5 }}
  style={{
  fontSize: "1.4rem",
  color: "#C8D1E8",
  marginTop: "55px",
  marginBottom: "45px",
  maxWidth: "620px",
  lineHeight: "1.9",
  fontWeight: "400",
  letterSpacing: "0.3px",
}}

>
 Dominate every battle with elite gaming laptops,
immersive audio, and precision-engineered gear
built for speed, power, and next-generation performance.
</motion.p>

       <div
  style={{
    display: "flex",
    gap: "28px",
    marginTop: "10px",
  }}
>
         <button
  ref={buttonRef}
  style={{
padding: "18px 38px",    borderRadius: "30px",
    border: "none",
    fontSize: "1rem",
    cursor: "pointer",
    background: "#00F5FF",
   fontWeight: "700",
boxShadow:
  "0 0 20px rgba(0,245,255,0.5), 0 0 50px rgba(0,245,255,0.2)",    transition: "all 0.3s ease",
  }}
  onMouseMove={(e) => {
  const button = buttonRef.current;

  const rect = button.getBoundingClientRect();

  const x =
    e.clientX - rect.left - rect.width / 2;

  const y =
    e.clientY - rect.top - rect.height / 2;

  button.style.transform =
    `translate(${x * 0.08}px, ${y * 0.08}px) scale(1.05)`;

  button.style.boxShadow =
    "0 0 40px rgba(0,245,255,0.9)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform =
    "translate(0px,0px) scale(1)";

  e.currentTarget.style.boxShadow =
    "0 0 25px rgba(0,245,255,0.4)";
}}

  // onMouseEnter={(e) => {
  //   e.target.style.transform = "scale(1.05)";
  //   e.target.style.boxShadow =
  //     "0 0 40px rgba(0,245,255,0.9)";
  // }}

  // onMouseLeave={(e) => {
  //   e.target.style.transform = "scale(1)";
  //   e.target.style.boxShadow =
  //     "0 0 25px rgba(0,245,255,0.4)";
  // }}
  onClick={() => {
    document
      .getElementById("featured-products")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}
>
  Shop Now
</button>

          <button
            style={{
          padding: "18px 38px",
borderRadius: "40px",
background: "rgba(255,255,255,0.03)",
border: "1px solid rgba(255,255,255,0.2)",
backdropFilter: "blur(10px)",
color: "#fff",
fontWeight: "600",
fontSize: "1rem",
transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
  e.currentTarget.style.borderColor = "#8B5CF6";
  e.currentTarget.style.boxShadow =
    "0 0 20px rgba(139,92,246,0.4)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.borderColor =
    "rgba(255,255,255,0.2)";
  e.currentTarget.style.boxShadow = "none";
}}

 onClick={() => {
    document
      .getElementById("categories")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }}

          >
            Explore
          </button>
        </div>
        <div
  style={{
    display: "flex",
    gap: "50px",
    marginTop: "70px",
  }}
>
  <div>
    <h2>{customers}K+</h2>
    <p style={{ color: "#a0aec0" }}>
      Customers
    </p>
  </div>

  <div>
   <h2>{products}+</h2>
    <p style={{ color: "#a0aec0" }}>
      Products
    </p>
  </div>

  <div>
    <h2>{brands}+</h2>
    <p style={{ color: "#a0aec0" }}>
      Brands
    </p>
  </div>
</div>
      </div>
      

      {/* Right Side */}
      <motion.div
  style={{
      marginRight: "-120px",
    marginTop: "-20px",  }}
  animate={{
    y: [-6, 6, -6],
  }}
  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
        <img
  src={gamingSetup}
  alt="Gaming Setup"
  style={{
    width: "900px",
    borderRadius: "20px 0 0 20px",
    maskImage:
  "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",

WebkitMaskImage:
  "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
  }}
/>
      </motion.div>
    </section>
  );
}

export default Hero;