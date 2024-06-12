/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00df9a",
      },
      fontFamily: {
        inter: ["Inter"],
        montserrat: ["Montserrat"],
        "open-sans": ["Open Sans"],
      },
    },
  },
  plugins: [],
};
