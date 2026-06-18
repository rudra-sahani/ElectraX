import gamingSetup from "../assets/gaming-setup.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import  BackButton from "../components/BackButton";


import {
  FiCpu,
  FiAward,
  FiShield,
  FiZap
} from "react-icons/fi";


function About() {
  const savePagePosition = () => {
  sessionStorage.setItem(
    window.location.pathname,
    window.scrollY
  );
};

const saved = sessionStorage.getItem(
  location.pathname
);
  const navigate = useNavigate();
  return (
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -25 }}
    transition={{ duration: 0.45 }}
  >  
    <section
      style={{
        minHeight: "75vh",
        padding: "140px 80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      
      <div
  style={{
    position: "absolute",
    top: "140px",
    left: "80px",
    zIndex: 10,
  }}
>
 <div
  style={{
    marginBottom: "40px",
  }}
>
  <BackButton />
</div>
</div>
    
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "#00F5FF",
          filter: "blur(250px)",
          opacity: 0.08,
          top: "-150px",
          right: "-150px",
        }}
      />
      

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "#8B5CF6",
          filter: "blur(220px)",
          opacity: 0.1,
          bottom: "-150px",
          left: "-150px",
        }}
        
      />

      
      {/* Content */}
      <div
        style={{
          maxWidth: "1000px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
        
      >
          

        
        <p
          style={{
            color: "#00F5FF",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontWeight: "600",
          }}
        >
          About ElectraX
        </p>

        <h1
          style={{
            fontSize: "5rem",
            lineHeight: "1.1",
            marginBottom: "30px",
          }}
        >
          Built For Gamers.
          <br />
          Engineered For Performance.
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#B8C0D4",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          ElectraX is a premium gaming and electronics destination
          created for enthusiasts who demand power, speed,
          innovation and next-generation technology.
        </p>
      </div>
    </section>

    
 
  <section
  style={{
padding: "80px 80px"  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        height: "420px",
        borderRadius: "30px",
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.06)",

background:
  "linear-gradient(135deg, rgba(0,245,255,0.08), rgba(139,92,246,0.08))",

boxShadow:
  "0 0 80px rgba(0,245,255,0.08), 0 0 120px rgba(139,92,246,0.08)",
      }}
    >
      <img
  src={gamingSetup}
  alt=""
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.92,

    
 }}
 
/>
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <p
        style={{
          color: "#00F5FF",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "20px",
        }}
      >
        Our Story
      </p>

      <h2
        style={{
          fontSize: "3.5rem",
          marginBottom: "25px",
          lineHeight: "1.2",
        }}
      >
        Technology Should
        <br />
        Inspire.
      </h2>

      <p
        style={{
          color: "#B8C0D4",
          lineHeight: "2",
          fontSize: "1.05rem",
          marginBottom: "25px",
        }}
      >
        At ElectraX, we believe technology should do more than
        simply function.
      </p>

      <p
        style={{
          color: "#B8C0D4",
          lineHeight: "2",
          fontSize: "1.05rem",
          marginBottom: "25px",
        }}
      >
        From elite gaming laptops and mechanical keyboards to
        immersive audio gear and precision gaming controllers,
        every product in our collection is selected with one goal:
        delivering exceptional performance and premium design.
      </p>

      <p
        style={{
          color: "#B8C0D4",
          lineHeight: "2",
          fontSize: "1.05rem",
        }}
      >
        We built ElectraX as a destination for gamers, creators,
        and technology enthusiasts who refuse to settle for
        ordinary hardware.

        
      </p>
    </div>
  </div>
</section>

<section
  style={{
padding: "40px 80px 100px",  }}
>
  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(250px,1fr))",
      gap: "30px",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >
    {[
      {
        number: "17000+",
        label: "Satisfied Customers",
      },
      {
        number: "100+",
        label: "Premium Products",
      },
      {
        number: "25+",
        label: "Top Brands",
      },
      {
        number: "4.9★",
        label: "Average Rating",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          padding: "45px",
          textAlign: "center",

          borderRadius: "25px",

          background:
            "rgba(255,255,255,0.03)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            color: "#00F5FF",
            marginBottom: "12px",
          }}
        >
          {item.number}
        </h2>

        <p
          style={{
            color: "#B8C0D4",
            fontSize: "1rem",
          }}
        >
          {item.label}
        </p>
      </div>
    ))}
  </div>
</section>

<section
  style={{
    padding: "80px",
    maxWidth: "1400px",
    margin: "0 auto",
  }}
>
  <div
    style={{
      textAlign: "center",
      marginBottom: "60px",
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
      Why Choose Us
    </p>

    <h2
      style={{
        fontSize: "3rem",
        marginBottom: "20px",
      }}
    >
      Built Around Excellence
    </h2>

    <p
      style={{
        color: "#B8C0D4",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.8",
      }}
    >
      Every product and experience at ElectraX is designed
      to deliver premium quality, performance and reliability.
    </p>
  </div>

  <div
    style={{
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit,minmax(280px,1fr))",
      gap: "30px",
    }}
  >
    {[
  {
    icon: <FiCpu />,
    title: "Performance First",
    description:
      "Hardware selected for speed, reliability and gaming excellence.",
  },

  {
    icon: <FiAward />,
    title: "Premium Quality",
    description:
      "Only products from trusted brands and top-tier manufacturers.",
  },

  {
  icon: <FiZap />,
  title: "Fast Delivery",
  description:
    "Quick and secure shipping across the country.",
},

  {
    icon: <FiShield />,
    title: "Customer Focused",
    description:
      "Support and service designed around customer satisfaction.",
  },
].map((item, index) => (
      <div
        key={index}
        style={{
          padding: "40px",
          borderRadius: "25px",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "all 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform =
            "translateY(-10px)";
          e.currentTarget.style.boxShadow =
            "0 0 35px rgba(0,245,255,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform =
            "translateY(0)";
          e.currentTarget.style.boxShadow =
            "none";
        }}
      >
    <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px",
    fontSize: "2.7rem",
    color: "#00F5FF",
    filter: "drop-shadow(0 0 10px rgba(0,245,255,0.5))",
    minHeight: "60px",
  }}
>
  {item.icon}
</div>

        <h3
          style={{
            marginBottom: "15px",
            fontSize: "1.4rem",
          }}
        >
          {item.title}
        </h3>
        <p
  style={{
    color: "#B8C0D4",
    fontSize: "0.95rem",
    lineHeight: "1.7",
    marginTop: "12px",
    maxWidth: "250px",
  }}
>
  {item.description}
</p>

        <p
          style={{
            color: "#B8C0D4",
            lineHeight: "1.8",
          }}
        >
          {item.text}
        </p>
      </div>
    ))}
  </div>
</section>

<section
  style={{
    padding: "140px 80px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Glow */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      background: "#00F5FF",
      filter: "blur(250px)",
      opacity: 0.08,
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    }}
  />

  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "900px",
      margin: "0 auto",
    }}
  >
    <p
      style={{
        color: "#00F5FF",
        letterSpacing: "4px",
        textTransform: "uppercase",
        marginBottom: "20px",
      }}
    >
      Ready To Upgrade?
    </p>

    <h2
      style={{
        fontSize: "4rem",
        lineHeight: "1.2",
        marginBottom: "25px",
      }}
    >
      Build Your Dream
      <br />
      Gaming Setup Today
    </h2>

    <p
      style={{
        color: "#B8C0D4",
        fontSize: "1.15rem",
        lineHeight: "1.8",
        marginBottom: "40px",
      }}
    >
      Discover premium laptops, keyboards, headsets and gaming
      accessories carefully selected for performance enthusiasts.
    </p>

    <button
  onClick={() =>
    navigate("/products", {
      state: {
        scrollToProducts: true,
      },
    })
  }
  style={{
    padding: "18px 40px",
    borderRadius: "50px",
    border: "none",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "700",
    color: "white",
    background:
      "linear-gradient(90deg,#FBBF24,#F59E0B)",
    boxShadow:
      "0 0 35px rgba(251,191,36,0.35)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-4px)";
    e.currentTarget.style.boxShadow =
      "0 0 45px rgba(251,191,36,0.5)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 35px rgba(251,191,36,0.35)";
  }}
>
  Explore Products
</button>
  </div>
</section>

</motion.div>
  );
}

export default About;