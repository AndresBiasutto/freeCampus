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
          background: '#F2B705',
          lightBackground: '#F2E0C9',
          text: '#000000',
          primary:'#F2BE5C' ,
          secondary: '#F2CE1B',
          accent: '#F2C288',
          redBtn: '#FDA4AF',
          redBtnHvr: '#F87171',
          blueBtn: '#7DD3FC',
          blueBtnHvr: '#38BDF8',
        },
        dark: {
          background:'#0A3A40' ,
          darkBackground: '#042326',
          text: '#ffffff',
          primary: '#0F5959',
          secondary: '#1D7373',
          accent: '#107361',
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

