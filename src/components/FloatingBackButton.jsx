import { useLocation, useNavigate } from "react-router-dom";

function FloatingBackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: "fixed",
        left: "30px",
        bottom: "30px",
        zIndex: 1000,

        padding: "14px 22px",

        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.08)",

        background: "rgba(15,23,42,0.8)",
        backdropFilter: "blur(10px)",

        color: "#00F5FF",
        cursor: "pointer",
      }}
    >
      ← Back
    </button>
  );
}

export default FloatingBackButton;