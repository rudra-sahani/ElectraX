import { Link } from "react-router-dom";
import scarImage from "../assets/laptop-images/rog-lap/rog-lap.png";

function SpotlightProduct() {
  
  return (
    <section
      style={{
        padding: "40px 80px 120px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "60px",
          alignItems: "center",

          background:
            "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(139,92,246,0.04))",

          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "35px",

          padding: "70px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            background: "#8B5CF6",
            filter: "blur(220px)",
            opacity: 0.08,
            right: "-150px",
            top: "-150px",
          }}
        />

        {/* LEFT */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            style={{
              color: "#00F5FF",
              letterSpacing: "4px",
              marginBottom: "15px",
            }}
          >
            FEATURED SPOTLIGHT
          </p>

          <h2
            style={{
              fontSize: "4rem",
              lineHeight: "1.1",
              marginBottom: "25px",
            }}
          >
            ROG Strix
            <br />
            SCAR 16
          </h2>

          <p
            style={{
              color: "#B8C0D4",
              lineHeight: "1.8",
              maxWidth: "550px",
              marginBottom: "30px",
            }}
          >
            Built for elite gamers and creators.
            Experience extreme performance,
            ultra-fast refresh rates and next-level
            cooling technology.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginBottom: "35px",
            }}
          >
            {[
              "RTX Graphics",
              "240Hz Display",
              "Intel Ultra",
              "Premium Cooling",
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: "10px 16px",
                  borderRadius: "30px",
                  background:
                    "rgba(255,255,255,0.04)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <Link
            to="/product/rog-strix-scar-16"
            style={{
              textDecoration: "none",
              padding: "16px 35px",
              borderRadius: "40px",

              background:
                "linear-gradient(90deg,#00F5FF,#8B5CF6)",

              color: "white",
              fontWeight: "700",
            }}
          >
            View Product
          </Link>
        </div>

        {/* RIGHT */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <img
            src={scarImage}
            alt=""
            style={{
              width: "100%",
              maxWidth: "700px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default SpotlightProduct;