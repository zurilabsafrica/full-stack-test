/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        turquoise: "#5acccc",
        steelBlue: "#335c6e",
        teal: "#4aa088",
        yellowDark: "#faad00",
        orangeRed: "#f76434",
      },
    },
  },
  plugins: [],
};
