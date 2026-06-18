import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { CartContext } from "../context/CartContext";
import { motion } from "framer-motion";
import { useEffect } from "react";
import BackButton from "../components/BackButton";


function ProductDetails() {
  // const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { slug } = useParams();




  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  const images = product.images;

 const [selectedImage, setSelectedImage] = useState(images[0]);


 const currentIndex = images.indexOf(selectedImage);

const nextImage = () => {
  const nextIndex =
    (currentIndex + 1) % images.length;

  setSelectedImage(images[nextIndex]);
};

const prevImage = () => {
  const prevIndex =
    (currentIndex - 1 + images.length) %
    images.length;

  setSelectedImage(images[prevIndex]);
};

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  


  return (
     <motion.div
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    exit={{
      opacity: 0,
      y: -20,
    }}
    transition={{
  duration: 0.5,
  ease: "easeOut",
}}
  >
    
    <section 
      style={{
        padding: "120px 80px 80px 80px",
        minHeight: "100vh",
      }}
    >
     <div
  style={{
    marginBottom: "40px",
  }}
>
  <BackButton />
</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 0.9fr",
          gap: "60px",
          alignItems: "start",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          <div
            style={{
              position: "relative",
              
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "25px",
              overflow: "hidden",
              height: "680px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <button
  onClick={prevImage}
  style={{
    position: "absolute",
    left: "20px",
    zIndex: "10",

    width: "45px",
    height: "45px",

    borderRadius: "50%",
    border: "none",

    background: "rgba(15,23,42,0.8)",
    color: "#fff",

    cursor: "pointer",
    fontSize: "1rem",
    opacity: 1,
transition: "all 0.3s ease"
  }}
>
  ←
</button>
           <motion.img
  key={selectedImage}
  src={selectedImage}
  alt=""

  initial={{
    opacity: 0,
    scale: 0.96,
  }}

  animate={{
    opacity: 1,
    scale: 1,
  }}

  transition={{
    duration: 0.25,
  }}

  style={{
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
    
  }}
/>
<button
  onClick={nextImage}
  style={{
    position: "absolute",
    right: "20px",
    zIndex: "10",

    width: "42px",
    height: "42px",

    borderRadius: "50%",
    border: "none",

    background: "rgba(15,23,42,0.8)",
    color: "#fff",

    cursor: "pointer",
    fontSize: "1rem",
    opacity: 1,
transition: "all 0.3s ease"
  }}
>
  →
</button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
        onMouseEnter={() => {
  setSelectedImage(img);
}}

                alt=""
               
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  cursor: "pointer",
                 border:
  selectedImage === img
    ? "2px solid #00F5FF"
    : "1px solid rgba(255,255,255,0.1)",
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p
            style={{
              color: "#d8d6dc",
              letterSpacing: "3px",
              marginBottom: "10px",
            }}
          >
            {product.brand}
          </p>

          <h1
            style={{
              fontSize: "3rem",
              lineHeight: "1.1",
              marginBottom: "20px",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              color: "#FFD700",
              fontSize: "1rem",
              marginTop: "-7px",
              marginBottom: "20px",
            }}
          >
            ★★★★★ {product.rating} ({product.reviews} Reviews)
          </p>

          <h2
            style={{
              color: "#00F5FF",
              fontSize: "2rem",
              marginBottom: "30px",
            }}
          >
            {product.price}
          </h2>

          <p
            style={{
              color: "#B8C0D4",
              lineHeight: "1.8",
              marginBottom: "30px",
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: "15px",
              marginBottom: "40px",
            }}
          >
            {product.specs.map((spec, index) => (
              <div key={index}>{spec}</div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginBottom: "25px",
            }}
          >
            <button
              onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                cursor: "pointer",
              }}
            >
              −
            </button>

            <span
              style={{
                fontSize: "1.2rem",
                minWidth: "40px",
                textAlign: "center",
              }}
            >
              {quantity}
            </span>

            <button
              onClick={() => setQuantity(quantity + 1)}
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "white",
                cursor: "pointer",
              }}
            >
              +
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              onClick={() => {
                addToCart(product, quantity);

                setAdded(true);

                if (navigator.vibrate) {
                  navigator.vibrate(50);
                }

                setTimeout(() => {
                  setAdded(false);
                }, 1500);
              }}
              style={{
                padding: "18px 35px",
                borderRadius: "40px",
                border: "none",
                cursor: "pointer",
                background: added
  ? "linear-gradient(90deg,#00F5FF,#06B6D4)"
  : "linear-gradient(90deg,#00F5FF,#8B5CF6)",
  boxShadow: added
  ? "0 0 25px rgba(0,245,255,0.35)"
  : "none",
                color: "white",
                fontWeight: "700",
              }}
            >
              {added ? "✓ Added To Cart" : "Add To Cart"}
            </button>

            <button
              style={{
                padding: "18px 35px",
                borderRadius: "40px",
                border: "1px solid rgba(255,255,255,0.2)",
                background: "transparent",
                color: "white",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
}

export default ProductDetails;