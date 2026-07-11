/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Redefined existing colors for clean modernization in luxury bronze/gold
        'primary': '#FFFFFF',       // Light Text
        'secondary': '#d9831e',     // Luxury Bronze/Amber Orange
        
        // Luxury Charcoal Slate Palette
        'navy-dark': '#1b1d1d',
        'navy-deep': '#2c2e2e',
        'navy-light': '#616464',
        'teal-medical': '#d9831e',
        'teal-light': 'rgba(217, 131, 30, 0.1)',
        'blue-medical': '#e6b883',
        'accent-gold': '#d9831e',   // Luxury Bronze/Amber CTA accent
        'soft-neutral': 'transparent', // Make default page backgrounds transparent to show body gradient
        'light-gray': 'rgba(97, 100, 100, 0.1)',
        'slate-neutral': '#8c8e8e', // Soft Slate-400 for subtext
        
        // Base Overrides for native colors to map hardcoded classes automatically
        teal: {
          50: '#fdf8f2',
          100: '#faedd8',
          200: '#f5dcb8',
          300: '#eeca94',
          400: '#e5b26d',
          500: '#d9831e',
          600: '#c27017',
          700: '#9e5a12',
          800: '#7e470f',
          900: '#67390d'
        },
        blue: {
          50: '#fbfbfb',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d5d5d5',
          400: '#c5c5c5',
          500: '#e6b883',
          600: '#d5aa75',
          700: '#ad8b60',
          800: '#8f724f',
          900: '#755d40'
        },
        green: {
          50: '#fdf8f2',
          100: '#faedd8',
          200: '#f5dcb8',
          300: '#eeca94',
          400: '#e5b26d',
          500: '#d9831e',
          600: '#c27017',
          700: '#9e5a12',
          800: '#7e470f',
          900: '#67390d'
        }
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(97, 100, 100, 0.15)',
        'premium-hover': '0 20px 40px -15px rgba(97, 100, 100, 0.22)',
        'teal-glow': '0 10px 25px -5px rgba(217, 131, 30, 0.35)',
      }
    }
  },
  plugins: [],
}