/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fbcfe8',   // pink-200
          DEFAULT: '#f472b6', // pink-400
          dark: '#be185d',    // pink-700
        },
        accent: '#f9a8d4',   // pink-300
        danger: '#fb7185',   // rose-400
        grayish: '#fdf2f8',  // pink-50
      },
    },
  },
  plugins: [],
}
