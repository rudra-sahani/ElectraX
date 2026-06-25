import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function MyListings() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMyProducts();
  }, []);

  async function fetchMyProducts() {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("electrax_products")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", {
          ascending: false,
        });

      if (error) {
        console.log(error);
        return;
      }

      setProducts(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  

  async function deleteProduct(id) {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("electrax_products")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  }

  async function deleteProduct(id) {
  const confirmDelete = window.confirm(
    "Delete this product?"
  );

  if (!confirmDelete) return;

  const { error } = await supabase
    .from("electrax_products")
    .delete()
    .eq("id", id);

  console.log("DELETE ERROR:", error);

  if (error) {
    alert(error.message);
    return;
  }

  alert("Deleted Successfully");

  setProducts((prev) =>
    prev.filter((item) => item.id !== id)
  );
}

  if (loading) {
    return (
      <section
        style={{
          padding: "120px 80px",
          minHeight: "100vh",
        }}
      >
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section
      style={{
        padding: "120px 80px",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "15px",
          fontSize: "3rem",
        }}
      >
        My Listings
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#B8C0D4",
          marginBottom: "60px",
        }}
      >
        Products you have listed on ElectraX
      </p>

      {products.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            color: "#B8C0D4",
          }}
        >
          No products listed yet.
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background:
                  "rgba(255,255,255,0.03)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: "25px",
                overflow: "hidden",
                
              }}
            >
              <div
                style={{
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background:
                    "rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={product.image_url}
                  alt={product.title}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                   
  width: "100%",
  height: "250px",
  objectFit: "cover",
  borderRadius: "15px",

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
                  {product.title}
                </h3>

                <p
                  style={{
                    color: "#00F5FF",
                    fontWeight: "700",
                    marginBottom: "10px",
                  }}
                >
                  ₹{product.price}
                </p>

                <p
                  style={{
                    color: "#B8C0D4",
                    marginBottom: "20px",
                    lineHeight: "1.6",
                  }}
                >
                  {product.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                  }}
                >
                  <button
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "12px",
                      border:
                        "1px solid rgba(255,255,255,0.1)",
                      background:
                        "rgba(255,255,255,0.04)",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(product.id)
                    }
                    style={{
                      flex: 1,
                      padding: "12px",
                      borderRadius: "12px",
                      border: "none",
                      background:
                        "linear-gradient(90deg,#EF4444,#DC2626)",
                      color: "#fff",
                      cursor: "pointer",
                      fontWeight: "600",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default MyListings;