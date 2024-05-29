/** @type {import('tailwindcss').Config} */

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // colors: {
    //   black: '#010101',
    //   red: '#A83246'
    // },
    // screens: {
    //   'tablet': '640px',
    //   'cel': {'max': '400px'}
    // },
    extend: {
      colors: {
        'new-blue': '#243C5A',
        gray: {
          ...colors.gray,
          '900': '#999'
        }
      }
    },
  },
  plugins: [],
}

