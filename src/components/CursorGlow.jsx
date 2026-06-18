import { useEffect, useRef } from "react";

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;

    const moveGlow = (e) => {
      glow.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        {
          duration: 500,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveGlow
      );
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",

        width: "400px",
        height: "400px",

        borderRadius: "50%",

        transform:
          "translate(-50%, -50%)",

        pointerEvents: "none",

        zIndex: 1,

        background:
          "radial-gradient(circle, rgba(139,92,246,0.12), transparent 70%)",

        filter: "blur(20px)",
      }}
    />
  );
}

export default CursorGlow;