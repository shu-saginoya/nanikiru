/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './src/*.{vue,js,ts,jsx,tsx}',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/**/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#10b981'
      }
    },
    fontFamily: {
      gabarito: ['Gabarito', 'cursive']
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
