import { motion } from "framer-motion";

function TrustStrip() {
    
  const features = [
    {
      title: "FREE SHIPPING",
      desc: "Fast delivery across India",
    },
    {
      title: "2 YEAR WARRANTY",
      desc: "Official manufacturer warranty",
    },
    {
      title: "SECURE CHECKOUT",
      desc: "Protected transactions",
    },
    {
      title: "24/7 SUPPORT",
      desc: "Always here to help",
    },
  ];

  return (
    
    <section
      style={{
        padding: "30px 80px 40px",
      }}
    >
        <h3
  style={{
    textAlign: "center",
    color: "#8B8B99",
    letterSpacing: "4px",
    marginBottom: "10px",
  }}
>
  WHY CHOOSE ELECTRAX
</h3>

{/* <h2
  style={{
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "50px",
  }}
>
  Built For Performance
</h2> */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        {features.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -6,
            }}
            style={{
              padding: "28px",
              borderRadius: "22px",

              background:
                "rgba(255,255,255,0.03)",

              border:
                "1px solid rgba(255,255,255,0.08)",

              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#00F5FF",
                fontSize: "1rem",
                letterSpacing: "2px",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#B8C0D4",
                fontSize: "0.95rem",
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

export default TrustStrip;