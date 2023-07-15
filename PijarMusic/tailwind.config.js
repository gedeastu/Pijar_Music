/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      outfit : ['Outfit','sans'],
      raleway : ['Raleway','sans'],
      plusJakartaSans : ['Plus Jakarta Sans','sans']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {

    },
  },
  plugins: [
    require('prettier-plugin-tailwindcss'),

  ],
}