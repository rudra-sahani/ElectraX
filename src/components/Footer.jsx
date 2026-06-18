import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        marginTop: "120px",
        padding: "70px 80px 30px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "50px",
          marginBottom: "50px",
        }}
      >
        {/* Brand */}
        <div>
          <h2
            style={{
              color: "#00F5FF",
              marginBottom: "15px",
            }}
          >
            ElectraX
          </h2>

          <p
            style={{
              color: "#B8C0D4",
              lineHeight: "1.8",
            }}
          >
            Premium electronics and gaming gear
            designed for enthusiasts who demand
            performance, innovation and style.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>
            Categories
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              color: "#B8C0D4",
            }}
          >
            <span>Laptops</span>
            <span>Audio</span>
            <span>Gaming</span>
            <span>Accessories</span>
          </div>
        </div>

        {/* Support */}
        <div>
          <h3 style={{ marginBottom: "20px" }}>
            Support
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <Link to="/contact">
              Contact Us
            </Link>

            <Link to="/contact">
              Need Assistance?
            </Link>
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop:
            "1px solid rgba(255,255,255,0.08)",
          paddingTop: "25px",
          textAlign: "center",
          color: "#8B8B99",
        }}
      >
        © 2026 ElectraX. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;