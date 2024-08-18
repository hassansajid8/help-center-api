/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'purple': '#dadbf0',
      'black': '#000000',
      'white': '#ffffff',
      'gray': {
        100: '#b2b2b2',
        300: '#f4f6f8',
        500: '#a4a5a7',
        700: '#1f1f1f',
      }
    }
  },
  plugins: [],
}

