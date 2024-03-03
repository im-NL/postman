/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {},
    colors: {
      back: '#121315',
      secondary: {
        100: '#e0eeee',
        200: '#c5fcfc',
      },
      card: '#17181b',
      red: '#EB0000'
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      'heading': ['dirtyline'],
      'secondary': ['syne'],
      'mono': ['dmmono'],
    },
  },
  plugins: [],
}

