/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#000000',
        foreground: '#FFFFFF',
        muted: '#FFFFFF',
        accent: '#6C3BFF',
        card: '#121212',
        border: '#262626',
      }
    },
  },
  plugins: [],
}