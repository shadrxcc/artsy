/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'subtitle-black': '#333333',
        'text-grey': 'rgba(0, 0, 0, 0.57)',
        'upcoming': 'linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)',
      }
    },
  },
  plugins: [],
}