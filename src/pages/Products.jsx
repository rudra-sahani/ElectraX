import {
  Link,
  useSearchParams,
  useLocation,
} from "react-router-dom";

import { products } from "../data/products";

import { useEffect } from "react";

function Products() {
  
  const [searchParams] = useSearchParams();
  const location = useLocation();
   
  const category = searchParams.get("category");

  const categoryLabels = {
    laptops: "Laptops",
    audio: "Audio",
    controllers: "Gaming",
    accessories: "Accessories",
  };

  const filteredProducts = category
    ? products.filter(
        (product) => product.category === category
      )
    : products;

  const pageTitle = category
    ? categoryLabels[category] || "Products"
    : "All Products";

   useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, []);
  return (
    <section
      style={{
        padding: "120px 80px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "15px",
          textAlign: "center",
        }}
      >
        {pageTitle}
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#B8C0D4",
          marginBottom: "25px",
        }}
      >
        {category
          ? `Showing products for ${pageTitle.toLowerCase()}`
          : "Explore the complete ElectraX collection."}
      </p>

    <div
  style={{
    textAlign: "center",
    marginBottom: "45px",
  }}
>
  <button
    onClick={() => window.history.back()}
    style={{
      background: "transparent",
      border: "none",
      color: "#00F5FF",
      fontWeight: "600",
      cursor: "pointer",
      fontSize: "1rem",
    }}
  >
    ← Go Back
  </button>
</div>

      {filteredProducts.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            color: "#B8C0D4",
            fontSize: "1.2rem",
          }}
        >
          No products found in this category.
        </div>
      ) : (
        <div
  id="products-section"
  style={{
    display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div
                style={{
                  background:
                    "rgba(255,255,255,0.03)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "25px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(139,92,246,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0px)";
                  e.currentTarget.style.boxShadow =
                    "none";
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
    padding: "20px",
    textAlign: "center",
  }}
                >
                  <p
                    style={{
                      color: "#8B8B99",
                      fontSize: "0.85rem",
                      letterSpacing: "2px",
                      marginBottom: "8px",
                      textTransform: "uppercase",
                    }}
                  >
                    {categoryLabels[product.category] ||
                      product.category}
                  </p>

                  <h3
                    style={{
                      marginBottom: "10px",
                      fontSize: "1.3rem",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      color: "#00F5FF",
                      fontWeight: "700",
                      marginBottom: "6px",
                    }}
                  >
                    {product.price}
                  </p>

                  <p
                    style={{
                      color: "#B8C0D4",
                      fontSize: "0.9rem",
                    }}
                  >
                    {product.brand}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div
  style={{
    marginTop: "100px",
    padding: "35px 45px",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  }}
>
  <div>
    <h3
      style={{
        marginBottom: "8px",
        fontSize: "1.5rem",
      }}
    >
      Having Trouble?
    </h3>

    <p
      style={{
        color: "#B8C0D4",
      }}
    >
      Need help choosing products or have a question?
    </p>
  </div>

  <Link
    to="/contact"
    style={{
      textDecoration: "none",
      padding: "16px 35px",
      borderRadius: "40px",
      background:
        "linear-gradient(90deg,#00F5FF,#8B5CF6)",
      color: "white",
      fontWeight: "700",
      boxShadow:
        "0 0 25px rgba(0,245,255,0.25)",
    }}
  >
    Reach Us
  </Link>
</div>
    </section>
  );
}

export default Products;