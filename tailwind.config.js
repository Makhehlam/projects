/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {
        animation: {
          'pulseSlow': 'pulse 5s infinite',
        }
    },
  },
  plugins: [],
}

