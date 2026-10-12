/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        foodiGreen: {
          DEFAULT: '#24d34e',
          dark: '#16b83c',
          light: '#e7fbe9',
          border: '#d8f8df',
        },
        foodiBlack: '#171717',
        foodiGray: '#777777',
        foodiLightGray: '#f7f8f6',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        foodi: '0 8px 25px rgba(0, 0, 0, 0.07)',
        foodiCard: '0 6px 20px rgba(0, 0, 0, 0.045)',
        foodiFloating: '0 8px 25px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}

