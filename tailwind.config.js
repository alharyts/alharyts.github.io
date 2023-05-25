/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        "poppins": "poppins, sans-serif",
      },
      KeyframesEffect: {
        slideUpDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: ['hover', 'focus', 'group-hover'],
      backgroundColor: {
        'dark': '#1c0522',
      }
    },
  },
  plugins: [],
}

