/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      container: 'rgba(255,255,255,0.3)',
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/OrlovaImage.jpg')",
      },
      transition:{
        'height': 'height .6s ease'
      },
      transitionProperty: {
        'height': 'height'
      }
    },
  },
  plugins: [],
}