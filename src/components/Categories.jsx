import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      icon: "🎮",
      title: "Gaming",
      desc: "Consoles, PCs & Gaming Gear",
      category: "controllers",
    },
    {
      icon: "💻",
      title: "Laptops",
      desc: "High Performance Machines",
      category: "laptops",
    },
    {
      icon: "🎧",
      title: "Audio",
      desc: "Immersive Sound Experience",
      category: "audio",
    },
    {
      icon: "⌨️",
      title: "Accessories",
      desc: "Premium Tech Essentials",
      category: "accessories",
    },
  ];

  return (
 <section
  id="categories"
  style={{
    padding: "70px 80px",
    scrollMarginTop: "100px",
  }}
>
      <h2
        style={{
          textAlign: "center",
          fontSize: "3rem",
          marginBottom: "20px",
        }}
      >
        Shop By Category
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#a0aec0",
          marginBottom: "60px",
        }}
      >
        Discover premium technology tailored to your needs.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
        }}
      >
        {categories.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -12,
              scale: 1.03,
            }}
            transition={{
              duration: 0.3,
            }}
            onClick={() =>
              navigate(`/products?category=${item.category}`)
            }
            style={{
              padding: "40px",
              borderRadius: "25px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.08)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                marginBottom: "20px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                marginBottom: "10px",
                fontSize: "1.5rem",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#a0aec0",
              }}
            >
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Categories;