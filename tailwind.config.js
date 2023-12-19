/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }

    },
    colors : {
      primary1 : '#4C4DDC',
      primary2 : '#F5F5FF',
      primary3 : '#3334CC',
      primary4 : '#F2994A',
      primary5 : '#1F2147'
    }

  },
  plugins: [
    require("daisyui"), require('flowbite/plugin')],
  
  daisyui: {
    themes: []
  }
}