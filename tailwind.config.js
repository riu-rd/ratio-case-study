/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
      },
      fontFamily: {
        obold: ["Outfit-Bold", "sans-serif"], 
        oregular: ["Outfit-Regular", "sans-serif"],
        zregular: ["ZillaSlab-Regular", "sans-serif"]
      },
    },
  },
  plugins: [],
};