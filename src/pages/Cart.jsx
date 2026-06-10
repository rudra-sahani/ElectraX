import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart() {
    const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const [showFees, setShowFees] = useState(false);
  const [showDiscounts, setShowDiscounts] = useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      Number(
        item.price.replace("₹", "").replace(/,/g, "")
      ) * item.quantity,
    0
  );

  const protectFee = cartItems.length * 5;
  const platformFee = cartItems.length * 3;
  const packagingFee = cartItems.length * 2;
  const totalFees = protectFee + platformFee + packagingFee;

  const mrp = totalPrice + 3500;
  const mrpDiscount = 3000;
  const couponDiscount = 500;
  const totalDiscount = mrpDiscount + couponDiscount;

  const finalAmount = mrp + totalFees - totalDiscount;

  return (
    <section
      style={{
        padding: "120px 80px",
        minHeight: "100vh",
      }}
    >

          <button
      onClick={() =>
        navigate("/products")
      }
      style={{
        background: "transparent",
        border: "none",
        color: "#00F5FF",
        cursor: "pointer",
        fontSize: "1rem",
        marginBottom: "20px",
      }}
    >
      ← Continue Shopping
    </button>
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "40px",
        }}
      >
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <h2
          style={{
            color: "#B8C0D4",
          }}
        >
          Your cart is empty.
        </h2>
      ) : (
        cartItems.map((item, index) => (
          <div
            key={item.slug}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "25px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "20px",
              marginBottom: "20px",
            }}
          >
            <Link
  to={`/product/${item.slug}`}
>
  <img
    src={item.images[0]}
    alt={item.name}
    style={{
      width: "140px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "12px",
      cursor: "pointer",
    }}
  />
</Link>

            <div style={{ flex: 1 }}>
             <Link
  to={`/product/${item.slug}`}
  style={{
    textDecoration: "none",
    color: "inherit",
  }}
>
  <h2
    style={{
      marginBottom: "10px",
      cursor: "pointer",
    }}
  >
    {item.name}
  </h2>
</Link>

              <p
                style={{
                  color: "#B8C0D4",
                  marginBottom: "8px",
                }}
              >
                Unit Price:
                <span
                  style={{
                    color: "#00F5FF",
                    marginLeft: "8px",
                    fontWeight: "700",
                  }}
                >
                  {item.price}
                </span>
              </p>

              <p
                style={{
                  color: "#22c55e",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                Subtotal: ₹
                {(
                  Number(
                    item.price.replace("₹", "").replace(/,/g, "")
                  ) * item.quantity
                ).toLocaleString()}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    color: "#B8C0D4",
                  }}
                >
                  Qty:
                </span>

                <select
                  value={item.quantity}
                  onChange={(e) => {
                    const newQty = Number(e.target.value);

                    if (newQty > item.quantity) {
                      for (
                        let i = 0;
                        i < newQty - item.quantity;
                        i++
                      ) {
                        increaseQuantity(item.slug);
                      }
                    } else {
                      for (
                        let i = 0;
                        i < item.quantity - newQty;
                        i++
                      ) {
                        decreaseQuantity(item.slug);
                      }
                    }
                  }}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "12px",
                    background: "#111827",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                    outline: "none",
                  }}
                >
                  {[...Array(10)].map((_, i) => (
                    <option
                      key={i + 1}
                      value={i + 1}
                      style={{
                        background: "#111827",
                        color: "white",
                      }}
                    >
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={() => removeFromCart(index)}
                style={{
                  padding: "10px 18px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,80,80,0.25)",
                  background: "rgba(255,80,80,0.08)",
                  color: "#ff7b7b",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,80,80,0.15)";
                  e.target.style.boxShadow = "0 0 20px rgba(255,80,80,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255,80,80,0.08)";
                  e.target.style.boxShadow = "none";
                }}
              >
                🗑 Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cartItems.length > 0 && (
        <div
          style={{
            marginTop: "50px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "20px",
            padding: "30px",
          }}
        >
          <h2
            style={{
              marginBottom: "25px",
            }}
          >
            Order Summary
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "18px",
            }}
          >
            <span>MRP (Incl. of all taxes)</span>
            <span>₹{mrp.toLocaleString()}</span>
          </div>

          <div
            onClick={() => setShowFees(!showFees)}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Fees {showFees ? "▲" : "▼"}</span>
            <span>₹{totalFees}</span>
          </div>

          <AnimatePresence>
            {showFees && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    color: "#B8C0D4",
                  }}
                >
                  <span>Protect Promise Fee</span>
                  <span>₹{protectFee}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    color: "#B8C0D4",
                  }}
                >
                  <span>Platform Fee</span>
                  <span>₹{platformFee}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    color: "#B8C0D4",
                  }}
                >
                  <span>Secure Packaging</span>
                  <span>₹{packagingFee}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            onClick={() => setShowDiscounts(!showDiscounts)}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>Discounts {showDiscounts ? "▲" : "▼"}</span>

            <span
              style={{
                color: "#22c55e",
              }}
            >
              -₹{totalDiscount}
            </span>
          </div>

          <AnimatePresence>
            {showDiscounts && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                    color: "#B8C0D4",
                  }}
                >
                  <span>Discount on MRP</span>
                  <span>-₹{mrpDiscount}</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "15px",
                    color: "#B8C0D4",
                  }}
                >
                  <span>Coupon Applied</span>
                  <span>-₹{couponDiscount}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <hr
            style={{
              margin: "20px 0",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontWeight: "700",
              }}
            >
              Total Amount
            </span>

            <span
              style={{
                color: "#00F5FF",
                fontWeight: "700",
              }}
            >
              ₹{finalAmount.toLocaleString()}
            </span>
          </div>

          <p
            style={{
              color: "#22c55e",
              marginBottom: "25px",
            }}
          >
            You saved ₹{totalDiscount}
          </p>
        </div>
      )}

      <button
  style={{
    marginTop: "35px",
    width: "100%",
    padding: "18px",
    border: "none",
    borderRadius: "14px",
    cursor: "pointer",
    fontSize: "1.05rem",
    fontWeight: "700",
    color: "#fff",
    background:
      "linear-gradient(90deg,#00F5FF,#8B5CF6)",
    boxShadow:
      "0 0 25px rgba(0,245,255,0.25)",
    transition: "all 0.3s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform =
      "translateY(-3px)";
    e.currentTarget.style.boxShadow =
      "0 0 35px rgba(0,245,255,0.4)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform =
      "translateY(0)";
    e.currentTarget.style.boxShadow =
      "0 0 25px rgba(0,245,255,0.25)";
  }}
  onClick={() => alert("Checkout coming soon")}
>
  Place Order
</button>
    </section>
  );
}

export default Cart;