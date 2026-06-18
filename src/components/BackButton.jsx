import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        background: "transparent",
        border: "none",
        color: "#00F5FF",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "600",
      }}
    >
      ← Go Back
    </button>
  );
}

export default BackButton;