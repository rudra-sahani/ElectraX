import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  Clock3,
  MessageSquare,
} from "lucide-react";

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "60vh",
          padding: "140px 80px 80px",
          position: "relative",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "transparent",
            border: "none",
            color: "#00F5FF",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
            marginBottom: "70px",
          }}
        >
          ← Go Back
        </button>

        <div
          style={{
            textAlign: "center",
            maxWidth: "1000px",
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
            Contact ElectraX
          </p>

          <h1
            style={{
              fontSize: "5rem",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Need Assistance?
          </h1>

          <p
            style={{
              color: "#B8C0D4",
              fontSize: "1.15rem",
              lineHeight: "1.8",
            }}
          >
            Have questions about products, gaming setups,
            recommendations or orders? Our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        style={{
          padding: "0 80px 120px",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "40px",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "30px",
              padding: "35px",
              height: "fit-content",
            }}
          >
            <h2
              style={{
                marginBottom: "30px",
              }}
            >
              Contact Information
            </h2>

            {[
              {
                icon: <Mail size={28} />,
                title: "Email",
                value: "support@electrax.com",
              },
              {
                icon: <Phone size={28} />,
                title: "Phone",
                value: "+91 98765 43210",
              },
              {
                icon: <Clock3 size={28} />,
                title: "Availability",
                value: "24/7 Customer Support",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "18px",
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    color: "#00F5FF",
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <h4
                    style={{
                      marginBottom: "5px",
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    style={{
                      color: "#B8C0D4",
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FORM */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border:
                "1px solid rgba(255,255,255,0.08)",
              borderRadius: "30px",
              padding: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "30px",
              }}
            >
              <MessageSquare
                size={28}
                color="#00F5FF"
              />

              <h2>Send A Message</h2>
            </div>

            <form>
              <input
                type="text"
                placeholder="Your Name"
                style={inputStyle}
              />

              <input
                type="email"
                placeholder="Your Email"
                style={inputStyle}
              />

              <textarea
                rows="7"
                placeholder="How can we help you?"
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              />

             <div
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "25px",
  }}
>
  <button
    type="submit"
    style={{
      padding: "18px 40px",
      borderRadius: "40px",
      border: "none",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "1rem",

      background:
        "linear-gradient(90deg,#00F5FF,#8B5CF6)",

      color: "white",

      boxShadow:
        "0 0 30px rgba(0,245,255,0.25)",
    }}
  >
    Send Message
  </button>
</div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px 20px",
  marginBottom: "20px",
  borderRadius: "15px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
  color: "white",
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
};

export default Contact;