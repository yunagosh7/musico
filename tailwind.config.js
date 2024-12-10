/** @type {import('tailwindcss').Config} */

const {colors: defaultColors } = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',

  ],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        white: {
          50: '#FFFFFF88', // opacity 50%
          75: '#FFFFFFBF', // opacity 75%
          100: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
}

