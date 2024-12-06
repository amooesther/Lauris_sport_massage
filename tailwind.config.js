/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#004aad",
        'secondary':"#7ed957"
        

      }
    },
  },
  plugins: [],
}