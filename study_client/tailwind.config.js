/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ['Regular'],
        primaryMedium: ['Medium'],
        primaryBold: ['Bold'],
        primaryItalic: ['Italic'],
        primaryLight: ['Light']
      }
    },
  },
  plugins: [],
}

