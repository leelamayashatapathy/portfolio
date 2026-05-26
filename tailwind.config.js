/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#c96a2f',
          soft: '#e4b07b',
          deep: '#8a4117',
        },
        canvas: '#f3ede3',
        panel: '#fffaf2',
        ink: '#1f2933',
        muted: '#5f6772',
        forest: '#274f46',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        heading: ['DM Serif Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins:[]
}

