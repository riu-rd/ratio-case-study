/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        cerulean: "#2EA7D3",
        ceruleanblue: "#0883AA",
        gray: "#919191",
        lightgray: "#EDEDED",
        lightbluegray: "#eff0f0",
        darkgray: "#838383",
        halftransparent: "#00000080",
        turquoise: "#81D8D0"
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

        sfprolight: ["SFProText-Light", "sans-serif"],
        sfpronormal: ["SFProText-Normal", "sans-serif"],
        sfpromedium: ["SFProText-Medium", "sans-serif"],
        sfprosemibold: ["SFProText-SemiBold", "sans-serif"],
        sfprobold: ["SFProText-Bold", "sans-serif"],

        interlight: ["Inter-Light", "sans-serif"],
        internormal: ["Inter-Normal", "sans-serif"],
        intermedium: ["Inter-Medium", "sans-serif"],
        intersemibold: ["Inter-SemiBold", "sans-serif"],
        interbold: ["Inter-Bold", "sans-serif"],

        sfprodisplaylight: ["SFProDisplay-Light", "sans-serif"],
        sfprodisplaynormal: ["SFProDisplay-Normal", "sans-serif"],
        sfprodisplaymedium: ["SFProDisplay-Medium", "sans-serif"],
        sfprodisplaysemibold: ["SFProDisplay-SemiBold", "sans-serif"],
        sfprodisplaybold: ["SFProDisplay-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};