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
      sm: "480px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
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
