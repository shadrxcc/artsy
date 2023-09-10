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
        "timestamp" : 'rgba(245, 244, 244, 0.24)',
        'text-grey': 'rgba(0, 0, 0, 0.57)',
        'product-shadow': '0px 34px 68px rgba(217, 225, 244, 0.36)',
        'searchborder': 'linear-gradient(92.92deg, #78A3AD 30.44%, rgba(192, 86, 9, 0.49) 88.35%)',
        'upcoming': 'linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)',
      },
      height: {
        'fill': '-webkit-fill-available',
      }
    },
  },
  plugins: [],
}