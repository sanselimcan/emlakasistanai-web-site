import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          DEFAULT: "#2DD4D8",
          light: "#5DE0E4",
          dark: "#1BA8AC",
        },
        navy: {
          DEFAULT: "#1B3A5C",
          light: "#254d7a",
          dark: "#0f2236",
        },
        bg: {
          DEFAULT: "#07111e",
          2: "#0d1f32",
        },
        surface: {
          DEFAULT: "#112240",
          2: "#162d4a",
        },
      },
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        dm: ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "mesh-gradient":
          "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(45,212,216,0.07) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(27,58,92,0.4) 0%, transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
