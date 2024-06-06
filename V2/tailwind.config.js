/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      amber: colors.amber,
      rose: colors.rose
    },
  },
  plugins: [],
}

