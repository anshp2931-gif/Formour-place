/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-white': '#fdfcf7',
        'brand-brown': '#4a4a4a',
        'brand-tan': '#e8dcc8',
        'brand-sand': '#d4cec1',
      }
    },
  },
  plugins: [],
}
