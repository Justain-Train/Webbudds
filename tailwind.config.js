const { clamp } = require('framer-motion');
const { default: flattenColorPalette, } = require('tailwindcss/lib/util/flattenColorPalette')

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

    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },

    fontSize: {
      responsive: [
        "clamp(3rem, 3.7vw, 5rem)",
        {
          fontWeight: "600",
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
      darkgray: "#959595",
      gray: "#454545",
      white: "#d8d6d6",
    },
    extend: {
      animation: {
        "meteor-effect": "meteor 5s linear infinite",
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

  plugins: [],
};

