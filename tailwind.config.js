/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light_grey: '#8491AD',
        purple: '#5221E6',
        dark_purple: '#2D1084',
        level1: '#181823',
        peach: '#FFF3E4',
        dark_grey: '#5B6876',
      },
      fontFamily: {
        sen: ['Sen', 'sans-serif'],
        great_vibes: ['Great Vibes', 'cursive'],
      }
    },
  },
  plugins: [],
}

