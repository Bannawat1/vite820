/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTilte:"#154666",
        primaryContent:"#13678A",
        primarySubcontent:"#1E1E1E",
        primaryBase:"#03A688",
        primaryAccent:"#DAFDBA",
        primaryBg:"#F5F5F5", 

      }
    },
  plugins: [],
  }
}

