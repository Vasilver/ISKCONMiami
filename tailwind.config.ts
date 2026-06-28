import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#D97706",
        cream: "#F8F3E8",
        darkBrown: "#4B2E2B",
        forestGreen: "#355E3B",
        gold: "#FBBF24"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(75, 46, 43, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
