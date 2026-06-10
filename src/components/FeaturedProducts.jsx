import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "../data/products";

function FeaturedProducts() {
  const { addToCart } = useContext(CartContext);
  const [addedProduct, setAddedProduct] = useState(null);

  return (
    <section
      id="featured-products"
      style={{
        padding: "70px 80px 120px 80px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "#8B8B99",
          letterSpacing: "4px",
          marginBottom: "10px",
        }}
      >
        CURATED FOR GAMERS
      </p>

      <h2
        style={{
          textAlign: "center",
          fontSize: "3.5rem",
          marginBottom: "20px",
        }}
      >
        Featured Products
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#B8C0D4",
          marginBottom: "60px",
        }}
      >
        Explore our most popular gaming essentials.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {products.map((product, index) => (
          <Link
            key={product.slug}
            to={`/product/${product.slug}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0 0 35px rgba(139,92,246,0.25)",
              }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "25px",
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(0,0,0,0.25)",
                transition: "all 0.4s ease",
              }}
            >
             <div
  style={{
    height: "320px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "25px",
    background: "rgba(0,0,0,0.12)",
  }}
>
  <img
    src={product.images[0]}
    alt={product.name}
    style={{
      maxWidth: "100%",
      maxHeight: "100%",
      objectFit: "contain",
      display: "block",
    }}
  />
</div>

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  {product.name}
                </h3>

                <p
                  style={{
                    color: "#00F5FF",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  {product.price}
                </p>

                <button
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    backdropFilter: "blur(12px)",
                    color: "#fff",
                    fontWeight: "600",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(139,92,246,0.15)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(139,92,246,0.12)";
                    e.target.style.boxShadow = "0 0 30px rgba(139,92,246,0.35)";
                    e.target.style.borderColor = "#8B5CF6";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(255,255,255,0.04)";
                    e.target.style.boxShadow = "0 0 20px rgba(139,92,246,0.15)";
                    e.target.style.borderColor = "rgba(139,92,246,0.25)";
                  }}
                >
                  View Product
                </button>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    addToCart(product);

                    setAddedProduct(product.slug);

                    if (navigator.vibrate) {
                      navigator.vibrate(50);
                    }

                    setTimeout(() => {
                      setAddedProduct(null);
                    }, 1500);
                  }}
                  style={{
                    width: "100%",
                    padding: "14px",
                    marginTop: "12px",
                    borderRadius: "14px",
                   background:
  addedProduct === product.slug
    ? "linear-gradient(90deg,#00F5FF,#06B6D4)"
    : "rgba(255,255,255,0.04)",

    boxShadow:
  addedProduct === product.slug
    ? "0 0 25px rgba(0,245,255,0.35)"
    : "none",
                    border: "1px solid rgba(0,245,255,0.25)",
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                >
                  {addedProduct === product.slug
                    ? "✓ Added To Cart"
                    : "Add To Cart"}
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>


      <div
  style={{
    maxWidth: "1400px",
    margin: "120px auto 0",
    padding: "70px 50px",
    textAlign: "center",

    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",

    borderRadius: "30px",
  }}
>
  <p
    style={{
      color: "#00F5FF",
      letterSpacing: "4px",
      textTransform: "uppercase",
      marginBottom: "15px",
    }}
  >
    Need Assistance?
  </p>

  <h2
    style={{
      fontSize: "3rem",
      marginBottom: "20px",
      lineHeight: "1.2",
    }}
  >
    Have Questions About
    <br />
    Our Products?
  </h2>

  <p
    style={{
      color: "#B8C0D4",
      maxWidth: "700px",
      margin: "0 auto 35px",
      lineHeight: "1.8",
    }}
  >
    Whether you're choosing a gaming laptop,
    mechanical keyboard, controller or headset,
    our team is ready to help.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    <Link
      to="/products"
      style={{
        textDecoration: "none",
        padding: "16px 35px",
        borderRadius: "40px",

        background:
  "linear-gradient(90deg,#F59E0B,#FBBF24)",
  transition: "all 0.3s ease",
  

        color: "white",
        fontWeight: "700",
      }}
      onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px)";
  e.currentTarget.style.boxShadow =
    "0 0 35px rgba(251,191,36,0.4)";
}}
onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.boxShadow = "none";
}}
    >
      Explore Products
    </Link>

    <Link
      to="/contact"
      style={{
        textDecoration: "none",
        padding: "16px 35px",
        borderRadius: "40px",

        border:
  "1px solid rgba(255,255,255,0.15)",
background:
  "rgba(255,255,255,0.03)",
  transition: "all 0.3s ease",

        color: "white",
        fontWeight: "700",
      }}

      onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px)";
  e.currentTarget.style.border =
    "1px solid rgba(0,245,255,0.6)";
  e.currentTarget.style.boxShadow =
    "0 0 25px rgba(0,245,255,0.2)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0px)";
  e.currentTarget.style.border =
    "1px solid rgba(255,255,255,0.15)";
  e.currentTarget.style.boxShadow = "none";
}}
    >
      Contact Us
    </Link>
  </div>
</div>
    </section>
  );
}

export default FeaturedProducts;