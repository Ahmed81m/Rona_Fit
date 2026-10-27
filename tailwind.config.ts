import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: "#1c0f1f",
          900: "#2b1530",
          800: "#3a1c42",
          700: "#4f2559",
          600: "#6b2f76",
          500: "#8a3d94",
        },
        lavender: {
          100: "#f4eefc",
          200: "#e8dcf7",
          300: "#d6c2ef",
          400: "#bb9be0",
        },
        sand: {
          50: "#faf7f5",
          100: "#f3ede8",
        },
        ember: {
          400: "#e0a25c",
          500: "#c98341",
        },
        ink: "#221420",
      },
      fontFamily: {
        arabic: ["Tajawal", "sans-serif"],
        display: ["IBM Plex Sans Arabic", "Tajawal", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        reveal: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        reveal: "reveal 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
