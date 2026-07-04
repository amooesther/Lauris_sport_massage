/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefined existing colors for clean modernization
        'primary': '#FFFFFF',       // Light Text
        'secondary': '#34D399',     // Bright Medical Green
        
        // New sophisticated colors
        'navy-dark': '#071330',
        'navy-deep': '#0D2847',
        'navy-light': '#172554',
        'teal-medical': '#0D9488',
        'teal-light': 'rgba(13, 148, 136, 0.1)',
        'blue-medical': '#0284C7',
        'accent-gold': '#34D399',   // Medical green as CTA accent
        'soft-neutral': 'transparent', // Make default page backgrounds transparent to show body gradient
        'light-gray': 'rgba(255, 255, 255, 0.05)',
        'slate-neutral': '#94A3B8', // Slate-400 for subtext
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(11, 19, 43, 0.1)',
        'premium-hover': '0 20px 40px -15px rgba(11, 19, 43, 0.15)',
        'teal-glow': '0 10px 25px -5px rgba(13, 148, 136, 0.3)',
      }
    }
  },
  plugins: [],
}