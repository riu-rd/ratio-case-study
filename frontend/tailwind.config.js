/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        colorlink: "#2EA7D3",
        colorhandle: "#0883AA",
        gray: "#919191",
        colorline: "#EDEDED",
      },
      fontFamily: {
        outfitthin: ["Outfit-Thin", "sans-serif"], 
        outfitextralight: ["Outfit-ExtraLight", "sans-serif"], 
        outfitlight: ["Outfit-Light", "sans-serif"], 
        outfitnormal: ["Outfit-Normal", "sans-serif"],
        outfitmedium: ["Outfit-Medium", "sans-serif"],
        outfitsemibold: ["Outfit-SemiBold", "sans-serif"],
        outfitbold: ["Outfit-Bold", "sans-serif"],
        outfitextrabold: ["Outfit-ExtraBold", "sans-serif"],
        outfitblack: ["Outfit-Black", "sans-serif"],


        zillalight: ["ZillaSlab-Light", "sans-serif"],
        zillanormal: ["ZillaSlab-Normal", "sans-serif"],
        zillamedium: ["ZillaSlab-Medium", "sans-serif"],
        zillasemibold: ["ZillaSlab-SemiBold", "sans-serif"],
        zillabold: ["ZillaSlab-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};