/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        header: '#0E21A0',
        nav: '#8EA7E9',
        primary: '#FFF2F2',
        cardUI: '#9EDDFF',
        darkPrimary: '#252B48',
        bgversion: '#04BAE2',
      },
      fontFamily: {
        Montserrat: 'Montserrat',
        Poppins: 'Poppins',
        Lato: 'Lato',
        Inter: 'Inter',
      }

    },
  },
}

