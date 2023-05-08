/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      none: "0",
      DEFAULT: "0.25rem",
      lg: "1em",
      md: "0.8em",
      sm: "0.5em",
    },
    screens: {
      sm: { max: "480px" },

      md: { max: "768px" },

      lg: { max: "1024px" },

      xl: { max: "1280px" },

      "2xl": { max: "1536px" },
    },
    extend: {
      colors: {
        primary: "#DF0000",
        secondary: "#BB1616",
        tertiary: "#323030",
        device: "#8D8D8D",
        screen: "#484F5F",
      },
    },
  },
  plugins: [],
};
