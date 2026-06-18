import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,

        background: "#020617",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.h1
        initial={{
          opacity: 0,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        style={{
          fontSize: "4rem",
          fontWeight: "800",
        }}
      >
        ElectraX
      </motion.h1>

      <motion.p
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        style={{
          color: "#00F5FF",
          letterSpacing: "4px",
          marginTop: "10px",
        }}
      >
        POWERING GAMERS
      </motion.p>
    </motion.div>
  );
}

export default Loader;