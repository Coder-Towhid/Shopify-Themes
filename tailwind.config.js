/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,liquid}"],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      },
      gridTemplateColumns: {
        // Simple 3 column grid
        '3': 'repeat(3, minmax(0, 1fr))'
      }

    
    },
  },
  plugins: [],
}

