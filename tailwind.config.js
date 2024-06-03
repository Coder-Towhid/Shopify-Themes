/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,liquid}"],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      },
    },
  },
  safelist: [
    'grid-cols-3'
  ],
  plugins: [],
}
