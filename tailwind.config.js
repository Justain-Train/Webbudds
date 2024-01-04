const { clamp } = require('framer-motion');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    "animation": {
      shimmer: "shimmer 2s linear infinite"
    },
    "keyframes": {
      shimmer: {
        from: {
          "backgroundPosition": "0 0"
        },
        to: {
          "backgroundPosition": "-200% 0"
        }
      }
    },

    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },

    fontSize: {
      'responsive': ['clamp(2.75rem, 3.3vw, 5rem)',{
        fontWeight: '600',
        lineHeight: '1.2',
      }],
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'semi': '1rem',
      'base': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.32rem',
      '3xl': '2rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
     },

   colors: {
      transparent: 'transparent',
      gold: '#e1c194',
      navy: '#2c2e44',
      black: '#121212',
      darkgray:'#959595',
      white: '#d8d6d6',

   }
  },

  extend: {
  },

  plugins: [],
}
