/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#14b8a6', // teal-500
          light: '#5eead4', // teal-300
          dark: '#0f766e', // teal-700
        },
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins:[]
}

