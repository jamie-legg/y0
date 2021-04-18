const colors = require("tailwindcss/colors");
module.exports = {
  purge:['.pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*/.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      y: {
        1:'#C592E8',
        2:'#B699F2',
        3:'#9995DB',
        4:'#99ACF2',
        5:'#92BBE8'
      },
      indigo: {
        light: '#ff0000',
        DEFAULT: '#C592E8',
        dark: '#0000ff',
        600: '#ff00ff'
      },
      white: {
        DEFAULT:'#ffffff'
      },
      dark:{
        1: '#fafafa',
        5:'#111111'
      },
      green: {
        DEFAULT:'#00ff00'
      },
      gray: {
        50: colors.gray[50],
        100: colors.gray[100],
        200: colors.gray[200],
        300: colors.gray[300],
        400: colors.gray[400],
        500: colors.gray[500],
        600: colors.gray[600],
        700: colors.gray[700],
        800: colors.gray[800],
        900: colors.gray[900]
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}
