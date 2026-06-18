import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] =
    useState("");

  const handleLogin = async () => {
    setMessage("");
    setErrorMessage("");

    try {
      setLoading(true);

      const { error } =
        await supabase.auth.signInWithPassword({
          email,
          password,
        });

      if (error) {
        setErrorMessage(
          "Invalid email or password"
        );

        setTimeout(() => {
          setErrorMessage("");
        }, 3000);

        return;
      }

      setMessage("✅ Login successful!");

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate("/", {
          replace: true,
        });
      }, 1500);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "100px",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "40px",
          background: "rgba(255,255,255,0.03)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          borderRadius: "25px",
          backdropFilter: "blur(15px)",
          boxShadow:
            "0 0 30px rgba(0,0,0,0.3)",
        }}
      >
        {errorMessage && (
          <div
            style={{
              background:
                "rgba(239,68,68,0.15)",
              border:
                "1px solid rgba(239,68,68,0.4)",
              color: "#EF4444",
              padding: "12px",
              borderRadius: "12px",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            ❌ {errorMessage}
          </div>
        )}

        {message && (
          <div
            style={{
              background:
                "rgba(34,197,94,0.15)",
              border:
                "1px solid rgba(34,197,94,0.4)",
              color: "#22C55E",
              padding: "12px",
              borderRadius: "12px",
              marginBottom: "20px",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {message}
          </div>
        )}

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Welcome Back
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              padding: "16px",
              borderRadius: "12px",
              border:
                "1px solid rgba(255,255,255,0.1)",
              background:
                "rgba(255,255,255,0.04)",
              color: "white",
              outline: "none",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              padding: "16px",
              borderRadius: "12px",
              border:
                "1px solid rgba(255,255,255,0.1)",
              background:
                "rgba(255,255,255,0.04)",
              color: "white",
              outline: "none",
            }}
          />

          <button
            disabled={loading}
            onClick={handleLogin}
            style={{
              width: "100%",
              padding: "16px",
              border: "none",
              borderRadius: "12px",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              background:
                "linear-gradient(90deg,#00F5FF,#8B5CF6)",
              color: "white",
              fontWeight: "700",
              fontSize: "1rem",
              marginTop: "10px",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading
              ? "Signing In..."
              : "Login"}
          </button>

          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#00F5FF",
              cursor: "pointer",
              marginTop: "5px",
            }}
          >
            Forgot Password?
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#B8C0D4",
              marginTop: "10px",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#00F5FF",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;