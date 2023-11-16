/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
  },
  container: {
    center: true,
    padding: {
      default: "20px",
      md: "50px"
    }
  },
  colors : {
    "black" : '#1E1E1E',
    "white" : '#FFFFFF'
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"]
  }
}