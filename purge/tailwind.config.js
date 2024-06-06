/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge: {
    enabled: true,
    content: ["./src/**/*.html"]
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}

