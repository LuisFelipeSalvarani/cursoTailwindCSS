/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      amber: colors.amber,
      rose: colors.rose
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

