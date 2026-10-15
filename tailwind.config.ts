import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        cloud: "#f7fafc",
        mint: "#5eead4",
        violet: "#8b5cf6",
        amber: "#fbbf24",
      },
      boxShadow: {
        glow: "0 0 70px rgba(94, 234, 212, 0.14)",
        panel: "0 18px 70px rgba(0, 0, 0, 0.26)",
      },
      backgroundImage: {
        "radial-mint": "radial-gradient(circle at center, rgba(94,234,212,.18), transparent 68%)",
        "radial-violet": "radial-gradient(circle at center, rgba(139,92,246,.18), transparent 68%)",
      },
    },
  },
  plugins: [],
};

export default config;
