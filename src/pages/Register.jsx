import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabase";

function Register() {
    const handleRegister = async () => {
  try {
    setLoading(true);

    const { data, error } =
      await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

    if (error) {
      alert(error.message);
      return;
    }
    await supabase
  .from("electrax_profiles")
  .insert([
    {
      id: data.user.id,
      full_name: fullName,
      email: email,
    },
  ]);

  

    alert(
      "Registration successful! Please check your email and verify your account."
    );

    setFullName("");
    setEmail("");
    setPassword("");
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "25px",
          backdropFilter: "blur(15px)",
          boxShadow: "0 0 30px rgba(0,0,0,0.3)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Create Account
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            minLength={3}
            value={fullName}
            onChange={(e) =>
              setFullName(e.target.value)
            }
            style={{
              padding: "16px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "white",
              outline: "none",
            }}
          />

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
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
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
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "white",
              outline: "none",
            }}
          />

          <button
            disabled={loading}
             onClick={handleRegister}
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
              ? "Creating Account..."
              : "Register"}
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#B8C0D4",
              marginTop: "10px",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#00F5FF",
                textDecoration: "none",
                fontWeight: "600",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;