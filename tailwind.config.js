/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  darkMode:"class",
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
      },
      colors:{
        primary:"#ffc001",
        secondary:"#ff9c01",
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
        },
      },
    },
  },
  plugins: [],
}

