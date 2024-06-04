/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cheese': 'url(../img/liquid-cheese.png)',
        'ecodeck': 'url(../img/logo.png)',
      })
    },
  },
  plugins: [],
}

