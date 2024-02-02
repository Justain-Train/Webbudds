
const { default: flattenColorPalette, } = require('tailwindcss/lib/util/flattenColorPalette')

const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation: {
      shimmer: "shimmer 2s linear infinite",
    },
    keyframes: {
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
    },


    fontSize: {
      responsive: [
        "clamp(3rem, 4.3vw, 5rem)",
        {
          lineHeight: "1.2",
        },
      ],


    'heading': ['clamp(2rem, 5vw, 2.75rem)'], 
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      semi: "1rem",
      base: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.32rem",
      "3xl": "2rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },

    boxShadow: {
      'light': '0px 0px 58px 20px rgba(85, 85, 85, 0.20);',
    },

    colors: {
      transparent: "transparent",
      gold: "#e1c194",
      navy: "#2c2e44",
      black: "#121212",
      white: "#d8d6d6",
      neutral: colors.neutral,
    },
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
        "bounce-effect": "bounce 1s infinite",
      },
      keyframes: {

        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },

  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};


