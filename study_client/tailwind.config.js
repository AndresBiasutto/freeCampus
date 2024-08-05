/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#93BFB7',
          lightBackground: '#E4F2E7',
          text: '#000000',
          primary: '#1a202c',
          secondary: '#2d3748',
          accent: '#4a5568',
          redBtn: '#FDA4AF',
          redBtnHvr: '#F87171',
          blueBtn: '#7DD3FC',
          blueBtnHvr: '#38BDF8',
        },
        dark: {
          background: '#2D3E40',
          darkBackground: '#387373',
          text: '#ffffff',
          primary: '#2d3748',
          secondary: '#4a5568',
          accent: '#718096',
          redBtn: '#991B1B',
          redBtnHvr: '#7F1D1D',
          blueBtn: '#075985',
          blueBtnHvr: '#0C4A6E',
        },
      },
    },
  },
  // theme: {
  //   extend: {
  //     fontFamily: {
  //       primaryRegular: ['Regular'],
  //       primaryMedium: ['Medium'],
  //       primaryBold: ['Bold'],
  //       primaryItalic: ['Italic'],
  //       primaryLight: ['Light']
  //     }
  //   },
  // },
  plugins: [
    flowbite.plugin()
  ],
}

