/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
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
      },
      fontFamily: {
        Montserrat: 'Montserrat',
        Poppins: 'Poppins',
        Lato: 'Lato',
        Inter: 'Inter',
      }

    },
  },
  plugins: [Myclass],
}

